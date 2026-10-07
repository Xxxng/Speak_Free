// Apply reviewed study wording while preserving IDs, PDF text and progress keys.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const file = path.join(__dirname, 'toeic-sentences-data.js');
const source = fs.readFileSync(file, 'utf8');
const context = {};
vm.runInNewContext(source + ';globalThis.cards=TOEIC_SENTENCES;', context);
const corrections = {
  '2': {
    '2': ['This is a picture taken in an office.'],
    '7': ['This is a picture taken in a laboratory.'],
    '9': ['This is a picture taken in a warehouse.'],
    '14': ['The first things I notice in this picture are two women.', '이 사진에서 가장 먼저 눈에 띄는 것은 두 명의 여자이다.'],
    '15': ['The first things I notice in this picture are three men.', '이 사진에서 가장 먼저 눈에 띄는 것은 세 명의 남자이다.'],
    '16': [null, '사진 앞쪽에서 책상 위에 놓인 많은 사무용품을 볼 수 있다.'],
    '22': [null, '그녀의 뒤에서 서 있는 두 명의 남자를 볼 수 있다.'],
    '24': [null, '그들 중 일부는 평상복을 입고 있다.'],
    '41': ['He is giving a presentation.'],
    '46': [null, '그는 태블릿 PC를 사용하고 있다.'],
    '47': [null, '그는 행거에 옷을 걸고 있다.'],
    '54': [null, '그는 재킷을 입고 있다.'],
    '55': ['She is carrying a purse over her shoulder.', '그녀는 어깨에 핸드백을 메고 있다.'],
    '60': ['He is wearing a backpack.'],
    '61': ['He is riding in a boat.'],
    '63': ['He is wearing a navy blue T-shirt.', '그는 남색 티셔츠를 입고 있다.'],
    '64': ['He is wearing a padded jacket.', '그는 패딩 재킷을 입고 있다.'],
    '66': ['He is vacuuming.', '그는 진공청소기로 청소하고 있다.'],
    '67': ['He is pushing a cart.'],
    '70': [null, '그는 해변용 의자에서 쉬고 있다.'],
    '72': ['They are standing at the checkout counter.'],
    '75': [null, '그들은 줄을 서서 기다리고 있다.'],
    '77': ['They are walking along the street.'],
    '80': ['They are arranging items.', '그들은 물건을 정리하고 있다.'],
    '87': ['They are riding motorcycles.', '그들은 오토바이를 타고 있다.'],
    '91': ['They are getting on a subway train.', '그들은 지하철에 올라타고 있다.'],
    '94': [null, '그들은 테이블 앞에 앉아 있다.'],
    '99': ['I can see a woman smiling.', '나는 미소 짓는 여자를 볼 수 있다.'],
    '103': ['They are sitting under a parasol.'],
    '108': [null, '그들은 책상 앞에 앉아 있다.'],
    '117': ['He is wearing a black baseball cap.'],
    '120': ['He has white hair.', '그는 백발이다.'],
    '121': [null, '그는 손짓을 하고 있다.'],
    '124': ['He is wearing work clothes.'],
    '130': ['I can see a sign.'],
    '131': ['I can see traffic signs and traffic lights.'],
    '132': ['I can see many stacked boxes.', '나는 쌓여 있는 많은 상자를 볼 수 있다.'],
    '133': ['I can see a lot of parked cars.', '나는 주차된 많은 자동차를 볼 수 있다.'],
    '134': [null, '나는 몇 척의 보트를 볼 수 있다.'],
    '135': ['I can see some pictures hanging on the wall.'],
    '136': [null, '나는 행거에 걸려 있는 옷들을 볼 수 있다.'],
    '138': [null, '나는 진열된 많은 옷을 볼 수 있다.'],
    '139': [null, '나는 진열된 식료품을 볼 수 있다.'],
    '140': [null, '나는 책장에 있는 많은 책을 볼 수 있다.'],
    '143': ['There is a street stall.', '노점 가판대가 있다.'],
    '147': ['Overall, it looks like a busy day in the city.', '전반적으로 도시의 분주한 하루인 것 같다.'],
    '148': ['Overall, it looks like a beautiful, sunny day.', '전반적으로 아름답고 화창한 날인 것 같다.'],
    '149': ['Overall, it looks like a peaceful day.']
  },
  '3': {
    '1': ['It relieves my stress. I’m stressed out these days, so I need it.', '이것은 내 스트레스를 풀어 준다. 나는 요즘 스트레스를 많이 받아서 이것이 필요하다.'],
    '3': [null, '가격이 합리적이다.'],
    '6': [null, '나는 책에서 유용한 정보를 많이 얻을 수 있다.'],
    '8': ['It’s a more reliable source, so I can trust the information.', '더 믿을 만한 출처라서 정보를 신뢰할 수 있다.'],
    '9': ['I can get information anytime, anywhere on my smartphone.'],
    '10': ['It feels more personal and helps me build a closer relationship.', '더 개인적으로 느껴지고, 더 가까운 관계를 맺는 데 도움이 된다.'],
    '11': ['It leads to fewer misunderstandings.', '이것은 오해를 덜 불러일으킨다.'],
    '14': [null, '이곳에는 훌륭한 시설이 있다.'],
    '15': ['It’s a popular place, so people love it.'],
    '16': ['I’m a student, so my budget is tight.'],
    '18': [null, '나는 그것에 너무 많은 돈을 낭비하고 싶지 않다.'],
    '20': ['I’m a student, so I’m busy with my schoolwork.', '나는 학생이라서 학업으로 바쁘다.'],
    '27': ['I feel more comfortable and can focus better.'],
    '30': ['I can save time because I don’t have to go out.', '밖에 나갈 필요가 없어서 시간을 절약할 수 있다.'],
    '31': ['They are too old, so I think it would be good to replace them with new ones.', '그것들은 너무 오래되어서 새것으로 교체하면 좋을 것 같다.'],
    '32': ['They are outdated, so I think it would be better to replace them with new ones.', '그것들은 구식이라서 새것으로 교체하면 더 좋을 것 같다.'],
    '33': ['If we had more stores here, it would be more convenient.'],
    '34': ['It’s essential for me.', '이것은 나에게 꼭 필요하다.'],
    '36': ['It makes me happy and gives me a great experience.', '이것은 나를 행복하게 하고 좋은 경험을 하게 해 준다.'],
    '37': ['They provide a welcoming environment and a pleasant experience.', '그들은 편안하고 환영받는 분위기와 기분 좋은 경험을 제공한다.'],
    '38': ['It’s reliable, so I can trust the product.', '이것은 믿을 만해서 제품을 신뢰할 수 있다.'],
    '39': ['It’s a popular item, so people will love it.'],
    '40': [null, '이것은 나에게 정서적으로 소중한 의미가 있다.'],
    '44': ['It’s a habit of mine.', '이것은 내 습관이다.'],
    '45': [null, '나는 그것이 정말 좋았다.'],
    '50': ['It’s very helpful to me.']
  },
  '5': {
    '2': ['They can meet new people and expand their professional networks.', '그들은 새로운 사람들을 만나고 인맥을 넓힐 수 있다.'],
    '3': ['They can have many new experiences and broaden their perspectives.', '그들은 새로운 경험을 많이 하고 견문을 넓힐 수 있다.'],
    '4': [null, '그들은 아직 충분히 성숙하지 않아서 좋은 결정을 내리지 못한다.'],
    '6': ['They can’t focus on their studies or work.'],
    '8': [null, '그들은 수업에서 뒤처질 것이다.'],
    '12': [null, '그들은 생계를 유지할 수 없다.'],
    '13': ['I can earn a higher salary.', '나는 더 높은 급여를 받을 수 있다.'],
    '14': ['The cost of [an item or service] is too high.', '[물건이나 서비스]의 비용이 너무 높다.'],
    '16': ['That’s a good investment because it improves people’s lives.', '그것은 사람들의 삶을 더 낫게 해 주므로 좋은 투자이다.'],
    '19': ['They can set their own schedules.', '그들은 자신의 일정을 정할 수 있다.'],
    '23': [null, '그들은 정보를 얻고 다른 사람들과 공유할 수 있다.'],
    '24': [null, '더 가족처럼 느껴진다.'],
    '25': ['They can get a lot of useful, up-to-date information on the Internet.', '그들은 인터넷에서 유용한 최신 정보를 많이 얻을 수 있다.'],
    '26': ['They can [verb phrase] anytime, anywhere on their smartphones.', '그들은 스마트폰으로 언제 어디서나 [동사구에 해당하는 행동]을 할 수 있다.'],
    '27': ['It’s faster and more convenient.'],
    '28': ['There is a lot of inaccurate information on the Internet, so not all of it is reliable.', '인터넷에는 부정확한 정보가 많아서 모든 정보를 믿을 수 있는 것은 아니다.'],
    '29': ['It distracts [a group of people], so they can’t focus on their studies or work.', '이것은 [사람들]의 집중을 방해해서 그들이 공부나 업무에 집중할 수 없게 한다.'],
    '33': ['I can understand the speaker’s feelings more accurately.'],
    '34': ['They can create a friendly work atmosphere.', '그들은 우호적인 업무 분위기를 만들 수 있다.'],
    '35': ['They can communicate better with others.'],
    '36': ['They can be good team players and build good relationships with others.'],
    '37': ['They can build a good reputation.', '그들은 좋은 평판을 쌓을 수 있다.'],
    '38': [null, '그들은 큰 영향력을 가질 수 있다.'],
    '39': [null, '그들은 다른 사람들에게 동기를 부여할 수 있다.'],
    '40': ['Everything is constantly changing, and there is a lot of competition.'],
    '42': ['He can handle a variety of situations thanks to his creativity.', '그는 창의력 덕분에 다양한 상황을 잘 처리할 수 있다.'],
    '43': ['They have a lot of experience and knowledge.', '그들은 경험과 지식이 풍부하다.'],
    '추가 1': [null, '그들은 나에게 좋은 조언을 해 줄 수 있다.'],
    '44': [null, '직원들은 더 효율적이고 생산적으로 일할 수 있다.'],
    '45': [null, '직원들은 자신의 직무에 더 만족할 수 있다.'],
    '46': ['It can create a better work environment.', '이것은 더 나은 업무 환경을 만들 수 있다.'],
    '47': [null, '그들은 덜 전문적으로 보일 수 있다.'],
    '48': [null, '고객들은 만족감을 느끼고 계속 충성 고객으로 남을 것이다.'],
    '51': ['People frequently use [a platform or medium], so advertising there will be very effective.', '사람들이 [플랫폼이나 매체]를 자주 이용하므로 그곳에 광고하면 매우 효과적일 것이다.'],
    '52': ['It relieves their stress and helps them relax.'],
    '53': ['It is good for their physical and mental health.', '이것은 그들의 신체 건강과 정신 건강에 좋다.'],
    '54': ['It is bad for their health.'],
    '추가 2': ['It can help them develop healthy habits. / It can lead to unhealthy habits.', '이것은 그들이 건강한 습관을 기르는 데 도움이 될 수 있다. / 이것은 건강하지 않은 습관으로 이어질 수 있다.'],
    '57': ['It can help create a cleaner environment.'],
    '59–60': ['Today, people can [present-day activity]. This helps them [present-day benefit]. However, in the past, people had to [past activity], so they [past disadvantage].', '오늘날 사람들은 [현재의 행동]을 할 수 있다. 이것은 그들이 [현재의 이점]을 얻는 데 도움이 된다. 하지만 과거에는 사람들이 [과거의 행동]을 해야 해서 [과거의 불편함]을 겪었다.']
  }
};
const koSpacing = [
  [/낭비 할/g, '낭비할'], [/일 할/g, '일할'], [/소통 할/g, '소통할'], [/방해 받/g, '방해받'],
  [/이 곳/g, '이곳'], [/인기있는/g, '인기 있는'], [/줄 안/g, '줄 안'],
  [/이 것은/g, '이것은'], [/그 것은/g, '그것은'], [/그 것들은/g, '그것들은'], [/그 것을/g, '그것을'],
  [/할 수/g, '할 수'], [/ 할 필요/g, ' 할 필요'], [/ 할 것이다/g, ' 할 것이다'],
  [/ 할 수/g, ' 할 수'], [/절약 할/g, '절약할'], [/집중 할/g, '집중할'], [/제공한다/g, '제공한다'],
  [/사용 하고/g, '사용하고'], [/일 하고/g, '일하고'], [/서빙 하고/g, '서빙하고'], [/공연 하고/g, '공연하고'],
  [/얘기 하고/g, '얘기하고'], [/스캔 하고/g, '스캔하고'], [/청소를 하고/g, '청소하고'],
  [/들여다 보고/g, '들여다보고'], [/산책 시키고/g, '산책시키고'], [/건네 주고/g, '건네주고'],
  [/보고있다/g, '보고 있다'], [/입고있다/g, '입고 있다'], [/서있다/g, '서 있다'],
  [/앉아있다/g, '앉아 있다'], [/읽고있다/g, '읽고 있다'], [/누워있다/g, '누워 있다'],
  [/가지고있다/g, '가지고 있다'], [/정리되어있다/g, '정리되어 있다'],
  [/사진이 다/g, '사진이다'], [/많은 시간이/g, '많은 시간이'], [/스마트 폰/g, '스마트폰'],
  [/인간관계/g, '인간관계'], [/너무 오래 되/g, '너무 오래되'], [/좋아 할/g, '좋아할'],
  [/시도 해 보는/g, '시도해 보는'], [/친구를 만들/g, '친구를 사귈'], [/스트레스를  풀어/g, '스트레스를 풀어'],
  [/쉴수있다/g, '쉴 수 있다'], [/더 잘 집중 할/g, '더 잘 집중할'], [/잘지내/g, '잘 지내'],
  [/메뉴판/g, '메뉴판'], [/어깨위에/g, '어깨 위에'], [/진열대위에/g, '진열대 위에'],
  [/선반위에/g, '선반 위에'], [/진열 되어있다/g, '진열되어 있다'], [/전통의상/g, '전통 의상'],
  [/갈 수/g, '갈 수'], [/빨라서/g, '빨라서'], [/필요 한/g, '필요한'], [/스케쥴/g, '스케줄'],
  [/만날 수 있고 친구를 사귈 수 있다/g, '만나고 친구를 사귈 수 있다'],
  [/동기 부여 해줄 수 있다/g, '동기를 부여할 수 있다'], [/끌어 들 일/g, '끌어들일'],
  [/어려움을 직면/g, '어려움에 직면'], [/더 효과적 생산적으로/g, '더 효율적이고 생산적으로']
];
const changes=[];
for (const c of context.cards) {
  const originalEn=c.originalEn??c.en, originalKo=c.originalKo??c.ko;
  let en=originalEn.replace(/\s+/g,' ').trim();
  let ko=originalKo.replace(/\s+/g,' ').trim();
  for (const [pattern,replacement] of koSpacing) ko=ko.replace(pattern,replacement);
  const fix=corrections[c.part]?.[c.number];
  if(fix){en=fix[0]??en;ko=fix[1]??ko;}
  if(en&&!/[.!?]$/.test(en))en+='.';
  if(ko&&!/[.!?]$/.test(ko))ko+='.';
  c.originalEn=originalEn;c.originalKo=originalKo;c.en=en;c.ko=ko;c.reviewed=true;
  c.title=c.title.replace(/\s+/g,' ').trim();
  if(en!==originalEn||ko!==originalKo)changes.push({part:c.part,number:c.number,before:originalEn,after:en});
}
if(context.cards.length!==260||context.cards.some(c=>!c.en||!c.ko))throw Error('Missing study content');
const output=source.replace(/^\/\/[^\n]*\nconst TOEIC_SENTENCES = [\s\S]*?;\r?\nconst TOEIC_SENTENCE_SOURCES = /,
  '// Reviewed study sentences; verbatim source text remains in originalEn, originalKo and rawCells.\nconst TOEIC_SENTENCES = '+JSON.stringify(context.cards,null,2)+';\nconst TOEIC_SENTENCE_SOURCES = ');
if(output===source&&!source.includes('"reviewed": true'))throw Error('Data replacement failed');
fs.writeFileSync(file,output);
console.log('Reviewed all 260 items. Updated wording/formatting in '+changes.length+' items. IDs and PDF text preserved.');
