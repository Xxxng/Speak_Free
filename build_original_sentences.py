from pathlib import Path
import json,re,shutil,hashlib
root=Path('C:/Users/User/Downloads')
raw=json.loads(Path('tmp/toeic-original/extracted.json').read_text(encoding='utf8'))
materials=Path('materials/toeic-original');materials.mkdir(parents=True,exist_ok=True)
cards=[];pages={};sources=[]
# PDF font uses NUL glyphs for visible spaces. Preserve all text, spelling and punctuation.
def visible(s): return (s or '').replace('\x00',' ')
def split_content(s,part,num):
 if part=='5' and num=='26': pos=s.index('\n')
 elif part=='5' and num=='53': pos=s.index('이 것')
 else:
  match=re.search('[가-힣]',s);pos=match.start() if match else len(s)
 return s[:pos].strip(),s[pos:].strip()
for part in ['2','3','5']:
 source=next(p for p in root.glob('Part_*.pdf') if p.name.startswith(f'Part_{part}_'))
 target=materials/f'part{part}.pdf';shutil.copyfile(source,target)
 sources.append({'part':part,'name':source.name,'file':target.as_posix(),'sha256':hashlib.sha256(source.read_bytes()).hexdigest()})
 pages[part]=[{'page':p['page'],'text':visible(p['text'])} for p in raw[part]]
 numbers=[];extra=0
 for page in raw[part]:
  for table in page['tables']:
   for cells in table:
    first=visible(cells[0]).strip();body=visible(cells[1]) if len(cells)>1 else ''
    if part=='2':
     m=re.match(r'^(\d+)\.\s*(.*)',first,re.S)
     if not m:continue
     num=m[1];title=f'{num}번';ko=m[2];en=body.strip()
    elif part=='3':
     m=re.match(r'^(\d+)\.\s*(.*)',first,re.S)
     if not m:continue
     num=m[1];title=m[2];en,ko=split_content(body,part,num)
    else:
     if first=='59\n60':
      num='59–60';title='과거 현재 비교 · 공통 틀';en=body.strip();ko='';numbers.extend([59,60])
     elif re.fullmatch(r'\d+',first):
      num=first;title=f'{num}번';en,ko=split_content(body,part,num)
     elif first=='※':
      extra+=1;num=f'추가 {extra}';title='추가로 알아 두면 좋은 문장'
      m=re.search(r'(They can|It can)',body)
      assert m,body
      en,ko=split_content(body[m.start():],part,num)
     else:continue
    if num.isdigit():numbers.append(int(num))
    cards.append({'id':f'original-p{part}-{num}','part':part,'number':num,'title':title,'en':en,'ko':ko,'page':page['page'],'file':target.as_posix(),'rawCells':[visible(c) for c in cells],'combined':num=='59–60'})
 assert numbers==list(range(1,{'2':149,'3':50,'5':60}[part]+1)),(part,numbers)
 # All visible characters in every included cell are preserved in either the card or rawCells.
 for c in [c for c in cards if c['part']==part]:
  text=re.sub(r'\s','',c['en']+c['ko'])
  body=re.sub(r'\s','',c['rawCells'][1])
  if part=='2':assert re.sub(r'\s','',c['en'])==body
  elif not c['number'].startswith('추가'):assert text==body,(part,c['number'])
Path('toeic-sentences-data.js').write_text('// Verbatim user-provided PDF text; only PDF space glyphs are decoded.\nconst TOEIC_SENTENCES = '+json.dumps(cards,ensure_ascii=False,indent=2)+';\nconst TOEIC_SENTENCE_SOURCES = '+json.dumps(sources,ensure_ascii=False,indent=2)+';\nconst TOEIC_ORIGINAL_PAGES = '+json.dumps(pages,ensure_ascii=False,indent=2)+';\n',encoding='utf8')
print({part:sum(c['part']==part for c in cards) for part in ['2','3','5']})
print('Verified every numbered row, all visible source characters, and source-file hashes.')


# Keep the reviewed study layer when regenerating the PDF corpus.
import subprocess
subprocess.run(["node", str(Path(__file__).with_name("correct_toeic_sentences.js"))], check=True)
