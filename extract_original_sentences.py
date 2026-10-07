from pathlib import Path
import pdfplumber,json
root=Path('C:/Users/User/Downloads')
out=Path('tmp/toeic-original');out.mkdir(parents=True,exist_ok=True)
allrows={}
for part in [2,3,5]:
 file=next(p for p in root.glob('Part_*.pdf') if p.name.startswith(f'Part_{part}_'))
 with pdfplumber.open(file) as pdf:
  rows=[]
  for n,page in enumerate(pdf.pages,1):
   tables=page.extract_tables()
   rows.append({'page':n,'text':page.extract_text(),'tables':tables})
  allrows[str(part)]=rows
  print('PART',part,'pages',len(rows))
  for row in rows:
   print('page',row['page'],'tables',[len(t) for t in row['tables']])
  print(json.dumps(rows[0],ensure_ascii=False)[:8000])
(out/'extracted.json').write_text(json.dumps(allrows,ensure_ascii=False,indent=2),encoding='utf8')
