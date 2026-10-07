// Reviewed study sentences; verbatim source text remains in originalEn, originalKo and rawCells.
const TOEIC_SENTENCES = [
  {
    "id": "original-p2-1",
    "part": "2",
    "number": "1",
    "title": "1번",
    "en": "This is a picture taken at a park.",
    "ko": "이 사진은 공원에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "1. 이 사진은 공원에서 찍힌 사진이다",
      "This is a picture taken at a park"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a park",
    "originalKo": "이 사진은 공원에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-2",
    "part": "2",
    "number": "2",
    "title": "2번",
    "en": "This is a picture taken in an office.",
    "ko": "이 사진은 사무실에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "2. 이 사진은 사무실에서 찍힌 사진이다",
      "This is a picture taken at an office"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at an office",
    "originalKo": "이 사진은 사무실에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-3",
    "part": "2",
    "number": "3",
    "title": "3번",
    "en": "This is a picture taken at a restaurant.",
    "ko": "이 사진은 레스토랑에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "3. 이 사진은 레스토랑에서 찍힌 사진이다",
      "This is a picture taken at a restaurant"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a restaurant",
    "originalKo": "이 사진은 레스토랑에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-4",
    "part": "2",
    "number": "4",
    "title": "4번",
    "en": "This is a picture taken at a library.",
    "ko": "이 사진은 도서관에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "4. 이 사진은 도서관에서 찍힌 사진이다",
      "This is a picture taken at a library"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a library",
    "originalKo": "이 사진은 도서관에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-5",
    "part": "2",
    "number": "5",
    "title": "5번",
    "en": "This is a picture taken indoors.",
    "ko": "이 사진은 실내에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "5. 이 사진은 실내에서 찍힌 사진이다",
      "This is a picture taken indoors"
    ],
    "combined": false,
    "originalEn": "This is a picture taken indoors",
    "originalKo": "이 사진은 실내에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-6",
    "part": "2",
    "number": "6",
    "title": "6번",
    "en": "This is a picture taken outdoors.",
    "ko": "이 사진은 실외에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "6. 이 사진은 실외에서 찍힌 사진이다",
      "This is a picture taken outdoors"
    ],
    "combined": false,
    "originalEn": "This is a picture taken outdoors",
    "originalKo": "이 사진은 실외에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-7",
    "part": "2",
    "number": "7",
    "title": "7번",
    "en": "This is a picture taken in a laboratory.",
    "ko": "이 사진은 실험실에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "7. 이 사진은 실험실에서 찍힌 사진이다",
      "This is a picture taken at a laboratory"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a laboratory",
    "originalKo": "이 사진은 실험실에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-8",
    "part": "2",
    "number": "8",
    "title": "8번",
    "en": "This is a picture taken at a clothing store.",
    "ko": "이 사진은 옷 가게에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "8. 이 사진은 옷 가게에서 찍힌 사진이다",
      "This is a picture taken at a clothing store"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a clothing store",
    "originalKo": "이 사진은 옷 가게에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-9",
    "part": "2",
    "number": "9",
    "title": "9번",
    "en": "This is a picture taken in a warehouse.",
    "ko": "이 사진은 창고에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "9. 이 사진은 창고에서 찍힌 사진이다",
      "This is a picture taken at a warehouse"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a warehouse",
    "originalKo": "이 사진은 창고에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-10",
    "part": "2",
    "number": "10",
    "title": "10번",
    "en": "This is a picture taken at a café.",
    "ko": "이 사진은 카페에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "10. 이 사진은 카페에서 찍힌 사진이다",
      "This is a picture taken at a café"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a café",
    "originalKo": "이 사진은 카페에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-11",
    "part": "2",
    "number": "11",
    "title": "11번",
    "en": "This is a picture taken at a cafeteria.",
    "ko": "이 사진은 구내 식당에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "11. 이 사진은 구내 식당에서 찍힌 사진이\n다",
      "This is a picture taken at a cafeteria"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a cafeteria",
    "originalKo": "이 사진은 구내 식당에서 찍힌 사진이\n다",
    "reviewed": true
  },
  {
    "id": "original-p2-12",
    "part": "2",
    "number": "12",
    "title": "12번",
    "en": "This is a picture taken on a street.",
    "ko": "이 사진은 길 위에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "12. 이 사진은 길 위에서 찍힌 사진이다",
      "This is a picture taken on a street"
    ],
    "combined": false,
    "originalEn": "This is a picture taken on a street",
    "originalKo": "이 사진은 길 위에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-13",
    "part": "2",
    "number": "13",
    "title": "13번",
    "en": "This is a picture taken at a construction site.",
    "ko": "이 사진은 공사장에서 찍힌 사진이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "13. 이 사진은 공사장에서 찍힌 사진이다",
      "This is a picture taken at a construction\nsite"
    ],
    "combined": false,
    "originalEn": "This is a picture taken at a construction\nsite",
    "originalKo": "이 사진은 공사장에서 찍힌 사진이다",
    "reviewed": true
  },
  {
    "id": "original-p2-14",
    "part": "2",
    "number": "14",
    "title": "14번",
    "en": "The first things I notice in this picture are two women.",
    "ko": "이 사진에서 가장 먼저 눈에 띄는 것은 두 명의 여자이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "14. 이 사진에서 가장 먼저 볼 수 있는 것\n은 두 명의 여자이다",
      "The first thing I can see from this picture is\ntwo women"
    ],
    "combined": false,
    "originalEn": "The first thing I can see from this picture is\ntwo women",
    "originalKo": "이 사진에서 가장 먼저 볼 수 있는 것\n은 두 명의 여자이다",
    "reviewed": true
  },
  {
    "id": "original-p2-15",
    "part": "2",
    "number": "15",
    "title": "15번",
    "en": "The first things I notice in this picture are three men.",
    "ko": "이 사진에서 가장 먼저 눈에 띄는 것은 세 명의 남자이다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "15. 이 사진에서 가장 먼저 볼 수 있는 것\n은 세명의 남자이다",
      "The first thing I can see from this picture is\nthree men"
    ],
    "combined": false,
    "originalEn": "The first thing I can see from this picture is\nthree men",
    "originalKo": "이 사진에서 가장 먼저 볼 수 있는 것\n은 세명의 남자이다",
    "reviewed": true
  },
  {
    "id": "original-p2-16",
    "part": "2",
    "number": "16",
    "title": "16번",
    "en": "In the foreground of the picture, I can see a lot of office supplies on the desk.",
    "ko": "사진 앞쪽에서 책상 위에 놓인 많은 사무용품을 볼 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "16. 사진의 전면에서 나는 책상 위에 올려\n진 많은 사무용품들을 볼 수 있다",
      "In the foreground of the picture,\nI can see a lot of office supplies on the\ndesk"
    ],
    "combined": false,
    "originalEn": "In the foreground of the picture,\nI can see a lot of office supplies on the\ndesk",
    "originalKo": "사진의 전면에서 나는 책상 위에 올려\n진 많은 사무용품들을 볼 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-17",
    "part": "2",
    "number": "17",
    "title": "17번",
    "en": "In the middle of the picture, there is a fountain.",
    "ko": "사진의 중심에 분수대가 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "17. 사진의 중심에 분수대가 있다",
      "In the middle of the picture, there is a\nfountain"
    ],
    "combined": false,
    "originalEn": "In the middle of the picture, there is a\nfountain",
    "originalKo": "사진의 중심에 분수대가 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-18",
    "part": "2",
    "number": "18",
    "title": "18번",
    "en": "On the left side of the picture, there is a sidewalk.",
    "ko": "사진의 왼쪽에 인도가 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "18. 사진의 왼쪽에 인도가 있다",
      "On the left side of the picture, there is a\nsidewalk"
    ],
    "combined": false,
    "originalEn": "On the left side of the picture, there is a\nsidewalk",
    "originalKo": "사진의 왼쪽에 인도가 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-19",
    "part": "2",
    "number": "19",
    "title": "19번",
    "en": "On the right side of the picture, there is a large window.",
    "ko": "사진의 오른쪽에 큰 창문이 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "19. 사진의 오른쪽에 큰 창문이 있다",
      "On the right side of the picture, there is a\nlarge window"
    ],
    "combined": false,
    "originalEn": "On the right side of the picture, there is a\nlarge window",
    "originalKo": "사진의 오른쪽에 큰 창문이 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-20",
    "part": "2",
    "number": "20",
    "title": "20번",
    "en": "In the background of the picture, I can see many buildings and trees.",
    "ko": "사진의 배경에서 나는 많은 건물들과 나무들을 볼 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "20. 사진의 배경에서 나는 많은 건물들과\n나무들을 볼 수 있다",
      "In the background of the picture, I can see\nmany buildings and trees"
    ],
    "combined": false,
    "originalEn": "In the background of the picture, I can see\nmany buildings and trees",
    "originalKo": "사진의 배경에서 나는 많은 건물들과\n나무들을 볼 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-21",
    "part": "2",
    "number": "21",
    "title": "21번",
    "en": "Next to her, there is another woman.",
    "ko": "그녀의 옆에 또 다른 여자가 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "21. 그녀의 옆에 또 다른 여자가 있다",
      "Next to her, there is another woman."
    ],
    "combined": false,
    "originalEn": "Next to her, there is another woman.",
    "originalKo": "그녀의 옆에 또 다른 여자가 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-22",
    "part": "2",
    "number": "22",
    "title": "22번",
    "en": "Behind her, I can see two men standing.",
    "ko": "그녀의 뒤에서 서 있는 두 명의 남자를 볼 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "22. 그녀의 뒤에 나는 서 있는 두명의 남\n성을 볼 수 있다",
      "Behind her, I can see two men standing"
    ],
    "combined": false,
    "originalEn": "Behind her, I can see two men standing",
    "originalKo": "그녀의 뒤에 나는 서 있는 두명의 남\n성을 볼 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-23",
    "part": "2",
    "number": "23",
    "title": "23번",
    "en": "Most of them are wearing formal clothes.",
    "ko": "그들 중 대부분은 정장을 입고 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "23. 그들 중 대부분은 정장을 입고 있다",
      "Most of them are wearing formal clothes"
    ],
    "combined": false,
    "originalEn": "Most of them are wearing formal clothes",
    "originalKo": "그들 중 대부분은 정장을 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-24",
    "part": "2",
    "number": "24",
    "title": "24번",
    "en": "Some of them are wearing casual clothes.",
    "ko": "그들 중 일부는 평상복을 입고 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "24. 그들 중 일부는 캐주얼을 입고 있다",
      "Some of them are wearing casual clothes."
    ],
    "combined": false,
    "originalEn": "Some of them are wearing casual clothes.",
    "originalKo": "그들 중 일부는 캐주얼을 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-25",
    "part": "2",
    "number": "25",
    "title": "25번",
    "en": "There is a man taking a picture.",
    "ko": "사진을 찍고 있는 남자가 있다.",
    "page": 1,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "25. 사진을 찍고 있는 남자가 있다",
      "There is a man taking a picture."
    ],
    "combined": false,
    "originalEn": "There is a man taking a picture.",
    "originalKo": "사진을 찍고 있는 남자가 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-26",
    "part": "2",
    "number": "26",
    "title": "26번",
    "en": "She is looking into a bag.",
    "ko": "그녀는 가방 안을 들여다보고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "26. 그녀는 가방 안을 들여다 보고 있다",
      "She is looking into a bag"
    ],
    "combined": false,
    "originalEn": "She is looking into a bag",
    "originalKo": "그녀는 가방 안을 들여다 보고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-27",
    "part": "2",
    "number": "27",
    "title": "27번",
    "en": "He is helping customers.",
    "ko": "그는 고객들을 도우고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "27. 그는 고객들을 도우고 있다",
      "He is helping customers"
    ],
    "combined": false,
    "originalEn": "He is helping customers",
    "originalKo": "그는 고객들을 도우고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-28",
    "part": "2",
    "number": "28",
    "title": "28번",
    "en": "She is walking a dog.",
    "ko": "그녀는 강아지를 산책시키고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "28. 그녀는 강아지를 산책 시키고 있다",
      "She is walking a dog"
    ],
    "combined": false,
    "originalEn": "She is walking a dog",
    "originalKo": "그녀는 강아지를 산책 시키고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-29",
    "part": "2",
    "number": "29",
    "title": "29번",
    "en": "He is holding something.",
    "ko": "그는 무언가를 들고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "29. 그는 무언가를 들고 있다",
      "He is holding something"
    ],
    "combined": false,
    "originalEn": "He is holding something",
    "originalKo": "그는 무언가를 들고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-30",
    "part": "2",
    "number": "30",
    "title": "30번",
    "en": "She is looking at a menu.",
    "ko": "그녀는 메뉴판을 보고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "30. 그녀는 메뉴판을 보고 있다",
      "She is looking at a menu"
    ],
    "combined": false,
    "originalEn": "She is looking at a menu",
    "originalKo": "그녀는 메뉴판을 보고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-31",
    "part": "2",
    "number": "31",
    "title": "31번",
    "en": "He is writing something down.",
    "ko": "그는 무언가를 쓰고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "31. 그는 무언가를 쓰고 있다",
      "He is writing something down"
    ],
    "combined": false,
    "originalEn": "He is writing something down",
    "originalKo": "그는 무언가를 쓰고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-32",
    "part": "2",
    "number": "32",
    "title": "32번",
    "en": "She is holding a document.",
    "ko": "그녀는 서류를 들고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "32. 그녀는 서류를 들고 있다",
      "She is holding a document"
    ],
    "combined": false,
    "originalEn": "She is holding a document",
    "originalKo": "그녀는 서류를 들고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-33",
    "part": "2",
    "number": "33",
    "title": "33번",
    "en": "He is looking for something.",
    "ko": "그는 무언가를 찾고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "33. 그는 무언가를 찾고 있다",
      "He is looking for something"
    ],
    "combined": false,
    "originalEn": "He is looking for something",
    "originalKo": "그는 무언가를 찾고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-34",
    "part": "2",
    "number": "34",
    "title": "34번",
    "en": "She is holding a shopping bag.",
    "ko": "그녀는 쇼핑백을 들고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "34. 그녀는 쇼핑백을 들고 있다",
      "She is holding a shopping bag"
    ],
    "combined": false,
    "originalEn": "She is holding a shopping bag",
    "originalKo": "그녀는 쇼핑백을 들고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-35",
    "part": "2",
    "number": "35",
    "title": "35번",
    "en": "He is reaching for an item.",
    "ko": "그는 물건을 집으려고 손을 뻗고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "35. 그는 물건을 집으려고 손을 뻗고 있다",
      "He is reaching for an item."
    ],
    "combined": false,
    "originalEn": "He is reaching for an item.",
    "originalKo": "그는 물건을 집으려고 손을 뻗고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-36",
    "part": "2",
    "number": "36",
    "title": "36번",
    "en": "She is looking at a smartphone.",
    "ko": "그녀는 스마트폰을 보고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "36. 그녀는 스마트폰을 보고있다",
      "She is looking at a smartphone"
    ],
    "combined": false,
    "originalEn": "She is looking at a smartphone",
    "originalKo": "그녀는 스마트폰을 보고있다",
    "reviewed": true
  },
  {
    "id": "original-p2-37",
    "part": "2",
    "number": "37",
    "title": "37번",
    "en": "He is drinking some water.",
    "ko": "그는 물을 마시고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "37. 그는 물을 마시고 있다",
      "He is drinking some water"
    ],
    "combined": false,
    "originalEn": "He is drinking some water",
    "originalKo": "그는 물을 마시고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-38",
    "part": "2",
    "number": "38",
    "title": "38번",
    "en": "She is cooking.",
    "ko": "그녀는 요리를 하고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "38. 그녀는 요리를 하고 있다",
      "She is cooking"
    ],
    "combined": false,
    "originalEn": "She is cooking",
    "originalKo": "그녀는 요리를 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-39",
    "part": "2",
    "number": "39",
    "title": "39번",
    "en": "He is lying on the ground.",
    "ko": "그는 바닥에 누워 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "39. 그는 바닥에 누워있다",
      "He is lying on the ground"
    ],
    "combined": false,
    "originalEn": "He is lying on the ground",
    "originalKo": "그는 바닥에 누워있다",
    "reviewed": true
  },
  {
    "id": "original-p2-40",
    "part": "2",
    "number": "40",
    "title": "40번",
    "en": "She is pushing a baby stroller.",
    "ko": "그녀는 유모차를 밀고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "40. 그녀는 유모차를 밀고 있다",
      "She is pushing a baby stroller"
    ],
    "combined": false,
    "originalEn": "She is pushing a baby stroller",
    "originalKo": "그녀는 유모차를 밀고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-41",
    "part": "2",
    "number": "41",
    "title": "41번",
    "en": "He is giving a presentation.",
    "ko": "그는 발표를 하고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "41. 그는 발표를 하고 있다",
      "He is making a presentation."
    ],
    "combined": false,
    "originalEn": "He is making a presentation.",
    "originalKo": "그는 발표를 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-42",
    "part": "2",
    "number": "42",
    "title": "42번",
    "en": "She is serving food to customers.",
    "ko": "그녀는 음식을 고객들에게 서빙하고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "42. 그녀는 음식을 고객들에게 서빙 하고\n있다",
      "She is serving food to customers"
    ],
    "combined": false,
    "originalEn": "She is serving food to customers",
    "originalKo": "그녀는 음식을 고객들에게 서빙 하고\n있다",
    "reviewed": true
  },
  {
    "id": "original-p2-43",
    "part": "2",
    "number": "43",
    "title": "43번",
    "en": "He is holding a plastic bag.",
    "ko": "그는 비닐봉지를 들고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "43. 그는 비닐봉지를 들고 있다",
      "He is holding a plastic bag"
    ],
    "combined": false,
    "originalEn": "He is holding a plastic bag",
    "originalKo": "그는 비닐봉지를 들고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-44",
    "part": "2",
    "number": "44",
    "title": "44번",
    "en": "She is picking up a piece of paper.",
    "ko": "그녀는 종이 한 장을 줍고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "44. 그녀는 종이 한 장을 줍고 있다",
      "She is picking up a piece of paper"
    ],
    "combined": false,
    "originalEn": "She is picking up a piece of paper",
    "originalKo": "그녀는 종이 한 장을 줍고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-45",
    "part": "2",
    "number": "45",
    "title": "45번",
    "en": "He is handing over a credit card.",
    "ko": "그는 신용카드를 건네주고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "45. 그는 신용카드를 건네 주고 있다",
      "He is handing over a credit card"
    ],
    "combined": false,
    "originalEn": "He is handing over a credit card",
    "originalKo": "그는 신용카드를 건네 주고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-46",
    "part": "2",
    "number": "46",
    "title": "46번",
    "en": "He is using a tablet PC.",
    "ko": "그는 태블릿 PC를 사용하고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "46. PC 그는 태블릿 를 사용 하고 있다",
      "He is using a tablet PC."
    ],
    "combined": false,
    "originalEn": "He is using a tablet PC.",
    "originalKo": "PC 그는 태블릿 를 사용 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-47",
    "part": "2",
    "number": "47",
    "title": "47번",
    "en": "He is hanging his clothes on a rack.",
    "ko": "그는 행거에 옷을 걸고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "47. 그는 옷걸이에 옷을 걸고 있다",
      "He is hanging his clothes on a rack."
    ],
    "combined": false,
    "originalEn": "He is hanging his clothes on a rack.",
    "originalKo": "그는 옷걸이에 옷을 걸고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-48",
    "part": "2",
    "number": "48",
    "title": "48번",
    "en": "She is holding a cup.",
    "ko": "그녀는 컵을 들고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "48. 그녀는 컵을 들고 있다",
      "She is holding a cup"
    ],
    "combined": false,
    "originalEn": "She is holding a cup",
    "originalKo": "그녀는 컵을 들고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-49",
    "part": "2",
    "number": "49",
    "title": "49번",
    "en": "She is holding a purse.",
    "ko": "그녀는 핸드백을 들고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "49. 그녀는 핸드백을 들고 있다",
      "She is holding a purse"
    ],
    "combined": false,
    "originalEn": "She is holding a purse",
    "originalKo": "그녀는 핸드백을 들고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-50",
    "part": "2",
    "number": "50",
    "title": "50번",
    "en": "He is putting some food into a microwave.",
    "ko": "그는 음식을 전자레인지에 넣고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "50. 그는 음식을 전자레인지에 넣고 있다",
      "He is putting some food into a\nmicrowave"
    ],
    "combined": false,
    "originalEn": "He is putting some food into a\nmicrowave",
    "originalKo": "그는 음식을 전자레인지에 넣고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-51",
    "part": "2",
    "number": "51",
    "title": "51번",
    "en": "She is eating some food.",
    "ko": "그녀는 음식을 먹고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "51. 그녀는 음식을 먹고 있다",
      "She is eating some food"
    ],
    "combined": false,
    "originalEn": "She is eating some food",
    "originalKo": "그녀는 음식을 먹고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-52",
    "part": "2",
    "number": "52",
    "title": "52번",
    "en": "He is riding a bicycle.",
    "ko": "그는 자전거를 타고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "52. 그는 자전거를 타고 있다",
      "He is riding a bicycle."
    ],
    "combined": false,
    "originalEn": "He is riding a bicycle.",
    "originalKo": "그는 자전거를 타고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-53",
    "part": "2",
    "number": "53",
    "title": "53번",
    "en": "She is talking on the phone.",
    "ko": "그녀는 전화통화를 하고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "53. 그녀는 전화통화를 하고 있다",
      "She is talking on the phone"
    ],
    "combined": false,
    "originalEn": "She is talking on the phone",
    "originalKo": "그녀는 전화통화를 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-54",
    "part": "2",
    "number": "54",
    "title": "54번",
    "en": "He is wearing a jacket.",
    "ko": "그는 재킷을 입고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "54. 그는 자켓을 입고 있다",
      "He is wearing a jacket"
    ],
    "combined": false,
    "originalEn": "He is wearing a jacket",
    "originalKo": "그는 자켓을 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-55",
    "part": "2",
    "number": "55",
    "title": "55번",
    "en": "She is carrying a purse over her shoulder.",
    "ko": "그녀는 어깨에 핸드백을 메고 있다.",
    "page": 2,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "55. 그녀는 핸드백을 어깨위에 매고 있다",
      "She has her purse on her shoulder"
    ],
    "combined": false,
    "originalEn": "She has her purse on her shoulder",
    "originalKo": "그녀는 핸드백을 어깨위에 매고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-56",
    "part": "2",
    "number": "56",
    "title": "56번",
    "en": "He is taking an order.",
    "ko": "그는 주문을 받고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "56. 그는 주문을 받고 있다",
      "He is taking an order"
    ],
    "combined": false,
    "originalEn": "He is taking an order",
    "originalKo": "그는 주문을 받고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-57",
    "part": "2",
    "number": "57",
    "title": "57번",
    "en": "She is working on a computer.",
    "ko": "그녀는 컴퓨터로 일하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "57. 그녀는 컴퓨터로 일하고 있다",
      "She is working on a computer"
    ],
    "combined": false,
    "originalEn": "She is working on a computer",
    "originalKo": "그녀는 컴퓨터로 일하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-58",
    "part": "2",
    "number": "58",
    "title": "58번",
    "en": "He is working on a laptop.",
    "ko": "그는 노트북으로 일하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "58. 그는 노트북으로 일 하고 있다",
      "He is working on a laptop"
    ],
    "combined": false,
    "originalEn": "He is working on a laptop",
    "originalKo": "그는 노트북으로 일 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-59",
    "part": "2",
    "number": "59",
    "title": "59번",
    "en": "He is putting something on the bulletin board.",
    "ko": "그는 게시판에 무언가를 붙이고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "59. 그는 게시판에 무언가를 붙이고 있다",
      "He is putting something on the bulletin\nboard"
    ],
    "combined": false,
    "originalEn": "He is putting something on the bulletin\nboard",
    "originalKo": "그는 게시판에 무언가를 붙이고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-60",
    "part": "2",
    "number": "60",
    "title": "60번",
    "en": "He is wearing a backpack.",
    "ko": "그는 백팩을 메고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "60. 그는 백팩을 메고 있다",
      "They are wearing backpacks"
    ],
    "combined": false,
    "originalEn": "They are wearing backpacks",
    "originalKo": "그는 백팩을 메고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-61",
    "part": "2",
    "number": "61",
    "title": "61번",
    "en": "He is riding in a boat.",
    "ko": "그는 보트를 타고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "61. 그는 보트를 타고 있다",
      "He is riding a boat"
    ],
    "combined": false,
    "originalEn": "He is riding a boat",
    "originalKo": "그는 보트를 타고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-62",
    "part": "2",
    "number": "62",
    "title": "62번",
    "en": "He is loading a box into a truck.",
    "ko": "그는 트럭에 박스를 싣고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "62. 그는 트럭에 박스를 싣고 있다",
      "He is loading a box into a truck"
    ],
    "combined": false,
    "originalEn": "He is loading a box into a truck",
    "originalKo": "그는 트럭에 박스를 싣고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-63",
    "part": "2",
    "number": "63",
    "title": "63번",
    "en": "He is wearing a navy blue T-shirt.",
    "ko": "그는 남색 티셔츠를 입고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "63. 그는 남색 티셔츠를 입고있다",
      "He is wearing a navy t-shirt"
    ],
    "combined": false,
    "originalEn": "He is wearing a navy t-shirt",
    "originalKo": "그는 남색 티셔츠를 입고있다",
    "reviewed": true
  },
  {
    "id": "original-p2-64",
    "part": "2",
    "number": "64",
    "title": "64번",
    "en": "He is wearing a padded jacket.",
    "ko": "그는 패딩 재킷을 입고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "64. 그는 패딩을 입고 있다",
      "He is weairng a padded jumper"
    ],
    "combined": false,
    "originalEn": "He is weairng a padded jumper",
    "originalKo": "그는 패딩을 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-65",
    "part": "2",
    "number": "65",
    "title": "65번",
    "en": "He is raising his hand.",
    "ko": "그는 한 손을 들고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "65. 그는 한 손을 들고 있다",
      "He is raising his hand"
    ],
    "combined": false,
    "originalEn": "He is raising his hand",
    "originalKo": "그는 한 손을 들고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-66",
    "part": "2",
    "number": "66",
    "title": "66번",
    "en": "He is vacuuming.",
    "ko": "그는 진공청소기로 청소하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "66. 그는 청소기로 청소를 하고 있다",
      "He is cleaning with a vacuum."
    ],
    "combined": false,
    "originalEn": "He is cleaning with a vacuum.",
    "originalKo": "그는 청소기로 청소를 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-67",
    "part": "2",
    "number": "67",
    "title": "67번",
    "en": "He is pushing a cart.",
    "ko": "그는 카트를 밀고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "67. 그는 카트를 밀고 있다",
      "He is pushing a cart / carrying a cart"
    ],
    "combined": false,
    "originalEn": "He is pushing a cart / carrying a cart",
    "originalKo": "그는 카트를 밀고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-68",
    "part": "2",
    "number": "68",
    "title": "68번",
    "en": "He is wearing a brown coat.",
    "ko": "그는 갈색 코트를 입고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "68. 그는 갈색 코트를 입고 있다",
      "He is wearing a brown coat"
    ],
    "combined": false,
    "originalEn": "He is wearing a brown coat",
    "originalKo": "그는 갈색 코트를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-69",
    "part": "2",
    "number": "69",
    "title": "69번",
    "en": "He is looking at a product.",
    "ko": "그는 제품을 보고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "69. 그는 제품을 보고 있다",
      "He is looking at a product"
    ],
    "combined": false,
    "originalEn": "He is looking at a product",
    "originalKo": "그는 제품을 보고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-70",
    "part": "2",
    "number": "70",
    "title": "70번",
    "en": "He is relaxing on a beach chair.",
    "ko": "그는 해변용 의자에서 쉬고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "70. 그는 해변에서 쓰는 의자 위에서 쉬고\n있다",
      "He is relaxing on a beach chair"
    ],
    "combined": false,
    "originalEn": "He is relaxing on a beach chair",
    "originalKo": "그는 해변에서 쓰는 의자 위에서 쉬고\n있다",
    "reviewed": true
  },
  {
    "id": "original-p2-71",
    "part": "2",
    "number": "71",
    "title": "71번",
    "en": "They are walking down the stairs.",
    "ko": "그들은 계단을 내려오고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "71. 그들은 계단을 내려오고 있다",
      "They are walking down the stairs"
    ],
    "combined": false,
    "originalEn": "They are walking down the stairs",
    "originalKo": "그들은 계단을 내려오고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-72",
    "part": "2",
    "number": "72",
    "title": "72번",
    "en": "They are standing at the checkout counter.",
    "ko": "그들은 계산대에 서 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "72. 그들은 계산대에 서있다",
      "They are standing at the cashier"
    ],
    "combined": false,
    "originalEn": "They are standing at the cashier",
    "originalKo": "그들은 계산대에 서있다",
    "reviewed": true
  },
  {
    "id": "original-p2-73",
    "part": "2",
    "number": "73",
    "title": "73번",
    "en": "They are performing.",
    "ko": "그들은 공연하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "73. 그들은 공연 하고 있다",
      "They are performing."
    ],
    "combined": false,
    "originalEn": "They are performing.",
    "originalKo": "그들은 공연 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-74",
    "part": "2",
    "number": "74",
    "title": "74번",
    "en": "They are watching the performance.",
    "ko": "그들은 공연을 관람하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "74. 그들은 공연을 관람하고 있다",
      "They are watching the performance."
    ],
    "combined": false,
    "originalEn": "They are watching the performance.",
    "originalKo": "그들은 공연을 관람하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-75",
    "part": "2",
    "number": "75",
    "title": "75번",
    "en": "They are waiting in line.",
    "ko": "그들은 줄을 서서 기다리고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "75. 그들은 기다리고 있다",
      "They are waiting in line"
    ],
    "combined": false,
    "originalEn": "They are waiting in line",
    "originalKo": "그들은 기다리고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-76",
    "part": "2",
    "number": "76",
    "title": "76번",
    "en": "They are crossing the street.",
    "ko": "그들은 길을 건너고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "76. 그들은 길을 건너고 있다",
      "They are crossing the street"
    ],
    "combined": false,
    "originalEn": "They are crossing the street",
    "originalKo": "그들은 길을 건너고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-77",
    "part": "2",
    "number": "77",
    "title": "77번",
    "en": "They are walking along the street.",
    "ko": "그들은 길을 걸어가고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "77. 그들은 길을 걸어가고 있다",
      "They are walking on the street"
    ],
    "combined": false,
    "originalEn": "They are walking on the street",
    "originalKo": "그들은 길을 걸어가고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-78",
    "part": "2",
    "number": "78",
    "title": "78번",
    "en": "They are having a conversation.",
    "ko": "그들은 대화를 하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "78. 그들은 대화를 하고 있다",
      "They are having a conversation"
    ],
    "combined": false,
    "originalEn": "They are having a conversation",
    "originalKo": "그들은 대화를 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-79",
    "part": "2",
    "number": "79",
    "title": "79번",
    "en": "They are reading a document.",
    "ko": "그들은 문서를 읽고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "79. 그들은 문서를 읽고있다",
      "They are reading a document"
    ],
    "combined": false,
    "originalEn": "They are reading a document",
    "originalKo": "그들은 문서를 읽고있다",
    "reviewed": true
  },
  {
    "id": "original-p2-80",
    "part": "2",
    "number": "80",
    "title": "80번",
    "en": "They are arranging items.",
    "ko": "그들은 물건을 정리하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "80. 그들은 물건을 정리하고 있다",
      ""
    ],
    "combined": false,
    "originalEn": "",
    "originalKo": "그들은 물건을 정리하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-81",
    "part": "2",
    "number": "81",
    "title": "81번",
    "en": "They are listening to the presenter.",
    "ko": "그들은 발표자의 발표를 듣고있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "81. 그들은 발표자의 발표를 듣고있다",
      "They are listening to the presenter"
    ],
    "combined": false,
    "originalEn": "They are listening to the presenter",
    "originalKo": "그들은 발표자의 발표를 듣고있다",
    "reviewed": true
  },
  {
    "id": "original-p2-82",
    "part": "2",
    "number": "82",
    "title": "82번",
    "en": "They are sitting on a bench.",
    "ko": "그들은 벤치에 앉아 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "82. 그들은 벤치에 앉아있다",
      "They are sitting on a bench"
    ],
    "combined": false,
    "originalEn": "They are sitting on a bench",
    "originalKo": "그들은 벤치에 앉아있다",
    "reviewed": true
  },
  {
    "id": "original-p2-83",
    "part": "2",
    "number": "83",
    "title": "83번",
    "en": "They are using a copy machine.",
    "ko": "그들은 복사기를 이용하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "83. 그들은 복사기를 이용하고 있다",
      "They are using a copy machine"
    ],
    "combined": false,
    "originalEn": "They are using a copy machine",
    "originalKo": "그들은 복사기를 이용하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-84",
    "part": "2",
    "number": "84",
    "title": "84번",
    "en": "They are talking to each other.",
    "ko": "그들은 서로 얘기하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "84. 그들은 서로 얘기 하고 있다",
      "They are talking to each other"
    ],
    "combined": false,
    "originalEn": "They are talking to each other",
    "originalKo": "그들은 서로 얘기 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-85",
    "part": "2",
    "number": "85",
    "title": "85번",
    "en": "They are relaxing.",
    "ko": "그들은 쉬고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "85. 그들은 쉬고 있다",
      "They are relaxing"
    ],
    "combined": false,
    "originalEn": "They are relaxing",
    "originalKo": "그들은 쉬고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-86",
    "part": "2",
    "number": "86",
    "title": "86번",
    "en": "They are playing musical instruments.",
    "ko": "그들은 악기를 연주하고 있다.",
    "page": 3,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "86. 그들은 악기를 연주하고 있다",
      "They are playing musical instruments"
    ],
    "combined": false,
    "originalEn": "They are playing musical instruments",
    "originalKo": "그들은 악기를 연주하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-87",
    "part": "2",
    "number": "87",
    "title": "87번",
    "en": "They are riding motorcycles.",
    "ko": "그들은 오토바이를 타고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "87. 그들은 오토바이를 타고 있다",
      "They are riding a motorcycle."
    ],
    "combined": false,
    "originalEn": "They are riding a motorcycle.",
    "originalKo": "그들은 오토바이를 타고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-88",
    "part": "2",
    "number": "88",
    "title": "88번",
    "en": "They are wearing uniforms.",
    "ko": "그들은 유니폼을 입고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "88. 그들은 유니폼을 입고 있다",
      "They are wearing uniforms"
    ],
    "combined": false,
    "originalEn": "They are wearing uniforms",
    "originalKo": "그들은 유니폼을 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-89",
    "part": "2",
    "number": "89",
    "title": "89번",
    "en": "They are working.",
    "ko": "그들은 일하고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "89. 그들은 일하고 있다",
      "They are working"
    ],
    "combined": false,
    "originalEn": "They are working",
    "originalKo": "그들은 일하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-90",
    "part": "2",
    "number": "90",
    "title": "90번",
    "en": "They are sitting on the grass.",
    "ko": "그들은 잔디 위에 앉아 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "90. 그들은 잔디 위에 앉아있다",
      "They are sitting on the grass"
    ],
    "combined": false,
    "originalEn": "They are sitting on the grass",
    "originalKo": "그들은 잔디 위에 앉아있다",
    "reviewed": true
  },
  {
    "id": "original-p2-91",
    "part": "2",
    "number": "91",
    "title": "91번",
    "en": "They are getting on a subway train.",
    "ko": "그들은 지하철에 올라타고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "91. 그들은 지하철에 타고 있다",
      "They are getting on the subway"
    ],
    "combined": false,
    "originalEn": "They are getting on the subway",
    "originalKo": "그들은 지하철에 타고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-92",
    "part": "2",
    "number": "92",
    "title": "92번",
    "en": "They are standing at the counter.",
    "ko": "그들은 카운터에 서 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "92. 그들은 카운터에 서있다",
      "They are standing at the counter"
    ],
    "combined": false,
    "originalEn": "They are standing at the counter",
    "originalKo": "그들은 카운터에 서있다",
    "reviewed": true
  },
  {
    "id": "original-p2-93",
    "part": "2",
    "number": "93",
    "title": "93번",
    "en": "They are using computers.",
    "ko": "그들은 컴퓨터를 이용하고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "93. 그들은 컴퓨터를 이용하고 있다",
      "They are using computers"
    ],
    "combined": false,
    "originalEn": "They are using computers",
    "originalKo": "그들은 컴퓨터를 이용하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-94",
    "part": "2",
    "number": "94",
    "title": "94번",
    "en": "They are sitting at a table.",
    "ko": "그들은 테이블 앞에 앉아 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "94. 그들은 테이블에 앉아있다",
      "They are sitting at a table"
    ],
    "combined": false,
    "originalEn": "They are sitting at a table",
    "originalKo": "그들은 테이블에 앉아있다",
    "reviewed": true
  },
  {
    "id": "original-p2-95",
    "part": "2",
    "number": "95",
    "title": "95번",
    "en": "They are swimming at the beach.",
    "ko": "그들은 해변에서 수영하고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "95. 그들은 해변에서 수영하고 있다",
      "They are swimming at the beach"
    ],
    "combined": false,
    "originalEn": "They are swimming at the beach",
    "originalKo": "그들은 해변에서 수영하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-96",
    "part": "2",
    "number": "96",
    "title": "96번",
    "en": "They are wearing helmets.",
    "ko": "그들은 헬멧을 쓰고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "96. 그들은 헬멧을 쓰고 있다",
      "They are wearing helmets"
    ],
    "combined": false,
    "originalEn": "They are wearing helmets",
    "originalKo": "그들은 헬멧을 쓰고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-97",
    "part": "2",
    "number": "97",
    "title": "97번",
    "en": "They are having a video conference.",
    "ko": "그들은 화상회의를 하고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "97. 그들은 화상회의를 하고 있다",
      "They are having a video conference."
    ],
    "combined": false,
    "originalEn": "They are having a video conference.",
    "originalKo": "그들은 화상회의를 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-98",
    "part": "2",
    "number": "98",
    "title": "98번",
    "en": "They are having a meeting.",
    "ko": "그들은 회의를 하고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "98. 그들은 회의를 하고 있다",
      "They are having a meeting"
    ],
    "combined": false,
    "originalEn": "They are having a meeting",
    "originalKo": "그들은 회의를 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-99",
    "part": "2",
    "number": "99",
    "title": "99번",
    "en": "I can see a woman smiling.",
    "ko": "나는 미소 짓는 여자를 볼 수 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "99. 나는 미소 짓는 여자를 볼 수 있다",
      "There is a woman smiling"
    ],
    "combined": false,
    "originalEn": "There is a woman smiling",
    "originalKo": "나는 미소 짓는 여자를 볼 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-100",
    "part": "2",
    "number": "100",
    "title": "100번",
    "en": "She is pointing at the screen.",
    "ko": "그녀는 화면을 가리키는 중이다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "100. 그녀는 화면을 가리키는 중이다",
      "She is pointing at the screen"
    ],
    "combined": false,
    "originalEn": "She is pointing at the screen",
    "originalKo": "그녀는 화면을 가리키는 중이다",
    "reviewed": true
  },
  {
    "id": "original-p2-101",
    "part": "2",
    "number": "101",
    "title": "101번",
    "en": "He is carrying a box.",
    "ko": "그는 박스를 운반 중이다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "101. 그는 박스를 운반 중이다",
      "He is carrying a box"
    ],
    "combined": false,
    "originalEn": "He is carrying a box",
    "originalKo": "그는 박스를 운반 중이다",
    "reviewed": true
  },
  {
    "id": "original-p2-102",
    "part": "2",
    "number": "102",
    "title": "102번",
    "en": "She is receiving an item.",
    "ko": "그녀는 물건을 받고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "102. 그녀는 물건을 받고 있다",
      "She is receiving an item"
    ],
    "combined": false,
    "originalEn": "She is receiving an item",
    "originalKo": "그녀는 물건을 받고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-103",
    "part": "2",
    "number": "103",
    "title": "103번",
    "en": "They are sitting under a parasol.",
    "ko": "그들은 파라솔 밑에 앉아 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "103. 그들은 파라솔 밑에 앉아있다",
      "They are sitting under the parasol"
    ],
    "combined": false,
    "originalEn": "They are sitting under the parasol",
    "originalKo": "그들은 파라솔 밑에 앉아있다",
    "reviewed": true
  },
  {
    "id": "original-p2-104",
    "part": "2",
    "number": "104",
    "title": "104번",
    "en": "They are having a picnic.",
    "ko": "그들은 소풍을 하고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "104. 그들은 소풍을 하고 있다",
      "They are having a picnic"
    ],
    "combined": false,
    "originalEn": "They are having a picnic",
    "originalKo": "그들은 소풍을 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-105",
    "part": "2",
    "number": "105",
    "title": "105번",
    "en": "He is paddling a boat.",
    "ko": "그는 노를 젓고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "105. 그는 노를 젓고 있다",
      "He is paddling a boat"
    ],
    "combined": false,
    "originalEn": "He is paddling a boat",
    "originalKo": "그는 노를 젓고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-106",
    "part": "2",
    "number": "106",
    "title": "106번",
    "en": "She is fishing.",
    "ko": "그녀는 낚시를 하고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "106. 그녀는 낚시를 하고 있다",
      "She is fishing"
    ],
    "combined": false,
    "originalEn": "She is fishing",
    "originalKo": "그녀는 낚시를 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-107",
    "part": "2",
    "number": "107",
    "title": "107번",
    "en": "He is scanning a book.",
    "ko": "그는 책을 스캔하고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "107. 그는 책을 스캔 하고 있다",
      "He is scanning a book"
    ],
    "combined": false,
    "originalEn": "He is scanning a book",
    "originalKo": "그는 책을 스캔 하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-108",
    "part": "2",
    "number": "108",
    "title": "108번",
    "en": "They are sitting at a desk.",
    "ko": "그들은 책상 앞에 앉아 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "108. 그들은 책상에 앉아있다",
      "They are sitting at a desk"
    ],
    "combined": false,
    "originalEn": "They are sitting at a desk",
    "originalKo": "그들은 책상에 앉아있다",
    "reviewed": true
  },
  {
    "id": "original-p2-109",
    "part": "2",
    "number": "109",
    "title": "109번",
    "en": "He is leaning against the wall.",
    "ko": "그는 벽에 기대고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "109. 그는 벽에 기대고 있다",
      "He is leaning against the wall"
    ],
    "combined": false,
    "originalEn": "He is leaning against the wall",
    "originalKo": "그는 벽에 기대고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-110",
    "part": "2",
    "number": "110",
    "title": "110번",
    "en": "She has curly hair.",
    "ko": "그녀는 곱슬머리를 가지고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "110. 그녀는 곱슬머리를 가지고 있다",
      "She has curly hair."
    ],
    "combined": false,
    "originalEn": "She has curly hair.",
    "originalKo": "그녀는 곱슬머리를 가지고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-111",
    "part": "2",
    "number": "111",
    "title": "111번",
    "en": "She is wearing white pants.",
    "ko": "그녀는 흰색 바지를 입고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "111. 그녀는 흰색 바지를 입고 있다",
      "She is wearing white pants"
    ],
    "combined": false,
    "originalEn": "She is wearing white pants",
    "originalKo": "그녀는 흰색 바지를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-112",
    "part": "2",
    "number": "112",
    "title": "112번",
    "en": "She is wearing a red skirt.",
    "ko": "그녀는 빨간색 스커트를 입고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "112. 그녀는 빨간색 스커트를 입고 있다",
      "She is wearing a red skirt"
    ],
    "combined": false,
    "originalEn": "She is wearing a red skirt",
    "originalKo": "그녀는 빨간색 스커트를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-113",
    "part": "2",
    "number": "113",
    "title": "113번",
    "en": "She is wearing sunglasses.",
    "ko": "그녀는 선글라스를 쓰고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "113. 그녀는 선글라스를 쓰고 있다",
      "She is wearing sunglasses"
    ],
    "combined": false,
    "originalEn": "She is wearing sunglasses",
    "originalKo": "그녀는 선글라스를 쓰고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-114",
    "part": "2",
    "number": "114",
    "title": "114번",
    "en": "She is wearing a dress.",
    "ko": "그녀는 원피스를 입고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "114. 그녀는 원피스를 입고 있다",
      "She is wearing a dress"
    ],
    "combined": false,
    "originalEn": "She is wearing a dress",
    "originalKo": "그녀는 원피스를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-115",
    "part": "2",
    "number": "115",
    "title": "115번",
    "en": "She is wearing traditional clothes.",
    "ko": "그녀는 전통 의상을 입고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "115. 그녀는 전통의상을 입고 있다",
      "She is wearing traditional clothes"
    ],
    "combined": false,
    "originalEn": "She is wearing traditional clothes",
    "originalKo": "그녀는 전통의상을 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-116",
    "part": "2",
    "number": "116",
    "title": "116번",
    "en": "She is wearing a checkered shirt.",
    "ko": "그녀는 체크무늬 셔츠를 입고 있다.",
    "page": 4,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "116. 그녀는 체크무늬 셔츠를 입고 있다",
      "She is wearing a checkered shirt"
    ],
    "combined": false,
    "originalEn": "She is wearing a checkered shirt",
    "originalKo": "그녀는 체크무늬 셔츠를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-117",
    "part": "2",
    "number": "117",
    "title": "117번",
    "en": "He is wearing a black baseball cap.",
    "ko": "그는 검은색 야구모자를 쓰고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "117. 그는 검은색 야구모자를 쓰고 있다",
      "He is wearing a black cap"
    ],
    "combined": false,
    "originalEn": "He is wearing a black cap",
    "originalKo": "그는 검은색 야구모자를 쓰고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-118",
    "part": "2",
    "number": "118",
    "title": "118번",
    "en": "He has blond hair.",
    "ko": "그는 금발 머리를 가지고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "118. 그는 금발 머리를 가지고 있다",
      "He has blond hair."
    ],
    "combined": false,
    "originalEn": "He has blond hair.",
    "originalKo": "그는 금발 머리를 가지고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-119",
    "part": "2",
    "number": "119",
    "title": "119번",
    "en": "He is wearing shorts.",
    "ko": "그는 반바지를 입고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "119. 그는 반바지를 입고 있다",
      "He is wearing shorts"
    ],
    "combined": false,
    "originalEn": "He is wearing shorts",
    "originalKo": "그는 반바지를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-120",
    "part": "2",
    "number": "120",
    "title": "120번",
    "en": "He has white hair.",
    "ko": "그는 백발이다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "120. 그는 백발을 가지고있다",
      "He has gray hair."
    ],
    "combined": false,
    "originalEn": "He has gray hair.",
    "originalKo": "그는 백발을 가지고있다",
    "reviewed": true
  },
  {
    "id": "original-p2-121",
    "part": "2",
    "number": "121",
    "title": "121번",
    "en": "He is gesturing.",
    "ko": "그는 손짓을 하고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "121. 그는 손짓, 제스쳐를 취하고 있다",
      "He is gesturing"
    ],
    "combined": false,
    "originalEn": "He is gesturing",
    "originalKo": "그는 손짓, 제스쳐를 취하고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-122",
    "part": "2",
    "number": "122",
    "title": "122번",
    "en": "He is wearing a sweater.",
    "ko": "그는 스웨터를 입고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "122. 그는 스웨터를 입고 있다",
      "He is wearing a sweater"
    ],
    "combined": false,
    "originalEn": "He is wearing a sweater",
    "originalKo": "그는 스웨터를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-123",
    "part": "2",
    "number": "123",
    "title": "123번",
    "en": "He is wearing glasses.",
    "ko": "그는 안경을 쓰고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "123. 그는 안경을 쓰고 있다",
      "He is wearing glasses"
    ],
    "combined": false,
    "originalEn": "He is wearing glasses",
    "originalKo": "그는 안경을 쓰고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-124",
    "part": "2",
    "number": "124",
    "title": "124번",
    "en": "He is wearing work clothes.",
    "ko": "그는 작업복을 입고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "124. 그는 작업복을 입고 있다",
      "He is wearing working clothes"
    ],
    "combined": false,
    "originalEn": "He is wearing working clothes",
    "originalKo": "그는 작업복을 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-125",
    "part": "2",
    "number": "125",
    "title": "125번",
    "en": "He is wearing a vest.",
    "ko": "그는 조끼를 입고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "125. 그는 조끼를 입고 있다",
      "He is wearing a vest"
    ],
    "combined": false,
    "originalEn": "He is wearing a vest",
    "originalKo": "그는 조끼를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-126",
    "part": "2",
    "number": "126",
    "title": "126번",
    "en": "He is wearing a striped shirt.",
    "ko": "그는 줄무늬 셔츠를 입고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "126. 그는 줄무늬 셔츠를 입고 있다",
      "He is wearing a striped shirt"
    ],
    "combined": false,
    "originalEn": "He is wearing a striped shirt",
    "originalKo": "그는 줄무늬 셔츠를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-127",
    "part": "2",
    "number": "127",
    "title": "127번",
    "en": "He has short hair.",
    "ko": "그는 짧은 머리를 가지고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "127. 그는 짧은 머리를 가지고 있다",
      "He has short hair"
    ],
    "combined": false,
    "originalEn": "He has short hair",
    "originalKo": "그는 짧은 머리를 가지고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-128",
    "part": "2",
    "number": "128",
    "title": "128번",
    "en": "He is wearing jeans.",
    "ko": "그는 청바지를 입고 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "128. 그는 청바지를 입고 있다",
      "He is wearing jeans"
    ],
    "combined": false,
    "originalEn": "He is wearing jeans",
    "originalKo": "그는 청바지를 입고 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-129",
    "part": "2",
    "number": "129",
    "title": "129번",
    "en": "Products are displayed on the shelves.",
    "ko": "제품들이 진열대 위에 진열되어 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "129. 제품들이 진열대위에 진열 되어있다",
      "Products are displayed on the shelves"
    ],
    "combined": false,
    "originalEn": "Products are displayed on the shelves",
    "originalKo": "제품들이 진열대위에 진열 되어있다",
    "reviewed": true
  },
  {
    "id": "original-p2-130",
    "part": "2",
    "number": "130",
    "title": "130번",
    "en": "I can see a sign.",
    "ko": "나는 간판을 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "130. 나는 간판을 볼 수 있다",
      "I can see a signboard"
    ],
    "combined": false,
    "originalEn": "I can see a signboard",
    "originalKo": "나는 간판을 볼 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-131",
    "part": "2",
    "number": "131",
    "title": "131번",
    "en": "I can see traffic signs and traffic lights.",
    "ko": "나는 교통 표지판들과 신호등을 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "131. 나는 교통 표지판들과 신호등을 볼 수\n있다",
      "I can see a traffic sign and a traffic\nlight"
    ],
    "combined": false,
    "originalEn": "I can see a traffic sign and a traffic\nlight",
    "originalKo": "나는 교통 표지판들과 신호등을 볼 수\n있다",
    "reviewed": true
  },
  {
    "id": "original-p2-132",
    "part": "2",
    "number": "132",
    "title": "132번",
    "en": "I can see many stacked boxes.",
    "ko": "나는 쌓여 있는 많은 상자를 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "132. 나는 많은 쌓여있는 박스들을 볼 수\n있다",
      "I can see many boxes stacked"
    ],
    "combined": false,
    "originalEn": "I can see many boxes stacked",
    "originalKo": "나는 많은 쌓여있는 박스들을 볼 수\n있다",
    "reviewed": true
  },
  {
    "id": "original-p2-133",
    "part": "2",
    "number": "133",
    "title": "133번",
    "en": "I can see a lot of parked cars.",
    "ko": "나는 주차된 많은 자동차를 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "133. 나는 많은 주차되어진 차들을 볼 수\n있다",
      "I can see a lot of cars parked"
    ],
    "combined": false,
    "originalEn": "I can see a lot of cars parked",
    "originalKo": "나는 많은 주차되어진 차들을 볼 수\n있다",
    "reviewed": true
  },
  {
    "id": "original-p2-134",
    "part": "2",
    "number": "134",
    "title": "134번",
    "en": "I can see some boats.",
    "ko": "나는 몇 척의 보트를 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "134. 나는 및몇 보트들을 볼 수 있다",
      "I can see some boats"
    ],
    "combined": false,
    "originalEn": "I can see some boats",
    "originalKo": "나는 및몇 보트들을 볼 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-135",
    "part": "2",
    "number": "135",
    "title": "135번",
    "en": "I can see some pictures hanging on the wall.",
    "ko": "나는 벽에 걸려 있는 그림 몇 개를 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "135. 나는 벽에 걸려 있는 그림 몇 개를 볼\n수 있다.",
      "I can see some pictures on the wall"
    ],
    "combined": false,
    "originalEn": "I can see some pictures on the wall",
    "originalKo": "나는 벽에 걸려 있는 그림 몇 개를 볼\n수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p2-136",
    "part": "2",
    "number": "136",
    "title": "136번",
    "en": "I can see some clothes hanging on a rack.",
    "ko": "나는 행거에 걸려 있는 옷들을 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "136. 나는 옷걸이에 걸려있는 옷들을 볼 수\n있다",
      "I can see some clothes hanging on a\nrack"
    ],
    "combined": false,
    "originalEn": "I can see some clothes hanging on a\nrack",
    "originalKo": "나는 옷걸이에 걸려있는 옷들을 볼 수\n있다",
    "reviewed": true
  },
  {
    "id": "original-p2-137",
    "part": "2",
    "number": "137",
    "title": "137번",
    "en": "I can see some lights.",
    "ko": "나는 조명들을 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "137. 나는 조명들을 볼 수 있다",
      "I can see some lights"
    ],
    "combined": false,
    "originalEn": "I can see some lights",
    "originalKo": "나는 조명들을 볼 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-138",
    "part": "2",
    "number": "138",
    "title": "138번",
    "en": "I can see a lot of clothes on display.",
    "ko": "나는 진열된 많은 옷을 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "138. 나는 진열 되어진 많은 옷을 볼 수 있\n다",
      "I can see a lot of clothes on display"
    ],
    "combined": false,
    "originalEn": "I can see a lot of clothes on display",
    "originalKo": "나는 진열 되어진 많은 옷을 볼 수 있\n다",
    "reviewed": true
  },
  {
    "id": "original-p2-139",
    "part": "2",
    "number": "139",
    "title": "139번",
    "en": "I can see groceries on display.",
    "ko": "나는 진열된 식료품을 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "139. 나는 진열되어진 식료품들을 볼 수 있\n다",
      "I can see groceries on display"
    ],
    "combined": false,
    "originalEn": "I can see groceries on display",
    "originalKo": "나는 진열되어진 식료품들을 볼 수 있\n다",
    "reviewed": true
  },
  {
    "id": "original-p2-140",
    "part": "2",
    "number": "140",
    "title": "140번",
    "en": "I can see many books on the bookshelves.",
    "ko": "나는 책장에 있는 많은 책을 볼 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "140. 나는 책장에 많은 책들을 볼 수 있다",
      "I can see many books on the\nbookshelves"
    ],
    "combined": false,
    "originalEn": "I can see many books on the\nbookshelves",
    "originalKo": "나는 책장에 많은 책들을 볼 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-141",
    "part": "2",
    "number": "141",
    "title": "141번",
    "en": "There is a computer monitor.",
    "ko": "컴퓨터 모니터가 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "141. 컴퓨터 모니터가 있다",
      "There is a computer monitor"
    ],
    "combined": false,
    "originalEn": "There is a computer monitor",
    "originalKo": "컴퓨터 모니터가 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-142",
    "part": "2",
    "number": "142",
    "title": "142번",
    "en": "There is a whiteboard.",
    "ko": "화이트 보드가 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "142. 화이트 보드가 있다",
      "There is a whiteboard"
    ],
    "combined": false,
    "originalEn": "There is a whiteboard",
    "originalKo": "화이트 보드가 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-143",
    "part": "2",
    "number": "143",
    "title": "143번",
    "en": "There is a street stall.",
    "ko": "노점 가판대가 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "143. 노점상이 있다",
      "There is a street vendor"
    ],
    "combined": false,
    "originalEn": "There is a street vendor",
    "originalKo": "노점상이 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-144",
    "part": "2",
    "number": "144",
    "title": "144번",
    "en": "There is a street light.",
    "ko": "가로등이 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "144. 가로등이 있다",
      "There is a street light"
    ],
    "combined": false,
    "originalEn": "There is a street light",
    "originalKo": "가로등이 있다",
    "reviewed": true
  },
  {
    "id": "original-p2-145",
    "part": "2",
    "number": "145",
    "title": "145번",
    "en": "Items are arranged on the shelves.",
    "ko": "물품들이 선반 위에 정리되어 있다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "145. 물품들이 선반위에 정리되어있다",
      "Items are arranged on the shelves"
    ],
    "combined": false,
    "originalEn": "Items are arranged on the shelves",
    "originalKo": "물품들이 선반위에 정리되어있다",
    "reviewed": true
  },
  {
    "id": "original-p2-146",
    "part": "2",
    "number": "146",
    "title": "146번",
    "en": "Overall, it seems like they are busy.",
    "ko": "전반적으로 그들은 바쁜 것 같다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "146. 전반적으로 그들은 바쁜 것 같다",
      "Overall, it seems like they are busy"
    ],
    "combined": false,
    "originalEn": "Overall, it seems like they are busy",
    "originalKo": "전반적으로 그들은 바쁜 것 같다",
    "reviewed": true
  },
  {
    "id": "original-p2-147",
    "part": "2",
    "number": "147",
    "title": "147번",
    "en": "Overall, it looks like a busy day in the city.",
    "ko": "전반적으로 도시의 분주한 하루인 것 같다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "147. 전반적으로 도시의 분주한 날 같다",
      "Overall, it seems like a busy day in a\ncity"
    ],
    "combined": false,
    "originalEn": "Overall, it seems like a busy day in a\ncity",
    "originalKo": "전반적으로 도시의 분주한 날 같다",
    "reviewed": true
  },
  {
    "id": "original-p2-148",
    "part": "2",
    "number": "148",
    "title": "148번",
    "en": "Overall, it looks like a beautiful, sunny day.",
    "ko": "전반적으로 아름답고 화창한 날인 것 같다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "148. 전반적으로 아름다운 화창한 날씨 인\n것 같다",
      "Overall, it seems like a beautiful sunny\nday"
    ],
    "combined": false,
    "originalEn": "Overall, it seems like a beautiful sunny\nday",
    "originalKo": "전반적으로 아름다운 화창한 날씨 인\n것 같다",
    "reviewed": true
  },
  {
    "id": "original-p2-149",
    "part": "2",
    "number": "149",
    "title": "149번",
    "en": "Overall, it looks like a peaceful day.",
    "ko": "전반적으로 평화로운 날 같다.",
    "page": 5,
    "file": "materials/toeic-original/part2.pdf",
    "rawCells": [
      "149. 전반적으로 평화로운 날 같다",
      "Overall, it seems like a peaceful day"
    ],
    "combined": false,
    "originalEn": "Overall, it seems like a peaceful day",
    "originalKo": "전반적으로 평화로운 날 같다",
    "reviewed": true
  },
  {
    "id": "original-p3-1",
    "part": "3",
    "number": "1",
    "title": "스트레스",
    "en": "It relieves my stress. I’m stressed out these days, so I need it.",
    "ko": "이것은 내 스트레스를 풀어 준다. 나는 요즘 스트레스를 많이 받아서 이것이 필요하다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "1. 스트레스",
      "It relieves my stress. I’m stressed out these days. So, I need this.\n이 것은 나의 스트레스를 풀어 준다. 나는 요즘 스트레스를 많이 받았다 \n그래서 이것이 필요하다"
    ],
    "combined": false,
    "originalEn": "It relieves my stress. I’m stressed out these days. So, I need this.",
    "originalKo": "이 것은 나의 스트레스를 풀어 준다. 나는 요즘 스트레스를 많이 받았다 \n그래서 이것이 필요하다",
    "reviewed": true
  },
  {
    "id": "original-p3-2",
    "part": "3",
    "number": "2",
    "title": "돈 절약",
    "en": "It’s cheaper, so I can save money.",
    "ko": "이것은 더 싸서 돈을 절약할 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "2. 돈 절약",
      "It’s cheaper, so I can save money.\n이 것은 더 싸서 돈을 절약 할 수 있다"
    ],
    "combined": false,
    "originalEn": "It’s cheaper, so I can save money.",
    "originalKo": "이 것은 더 싸서 돈을 절약 할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p3-3",
    "part": "3",
    "number": "3",
    "title": "가격",
    "en": "The price is reasonable.",
    "ko": "가격이 합리적이다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "3. 가격",
      "The price is reasonable.\n가격이 저렴하다."
    ],
    "combined": false,
    "originalEn": "The price is reasonable.",
    "originalKo": "가격이 저렴하다.",
    "reviewed": true
  },
  {
    "id": "original-p3-4",
    "part": "3",
    "number": "4",
    "title": "시간 절약",
    "en": "It’s faster, so I can save time.",
    "ko": "이것은 더 빨라서 시간을 절약할 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "4. 시간 절약",
      "It’s faster, so I can save time.\n이 것은 더 빨라서 시간을 절약 할 수 있다."
    ],
    "combined": false,
    "originalEn": "It’s faster, so I can save time.",
    "originalKo": "이 것은 더 빨라서 시간을 절약 할 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p3-5",
    "part": "3",
    "number": "5",
    "title": "유용한 정보1",
    "en": "I can get a lot of useful information from my friends.",
    "ko": "나는 친구들에게 많은 유용한 정보를 얻을 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "5. 유용한 정보1",
      "I can get a lot of useful information from my friends\n나는 친구들에게 많은 유용한 정보를 얻을 수 있다"
    ],
    "combined": false,
    "originalEn": "I can get a lot of useful information from my friends",
    "originalKo": "나는 친구들에게 많은 유용한 정보를 얻을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p3-6",
    "part": "3",
    "number": "6",
    "title": "유용한 정보 2",
    "en": "I can get a lot of useful information from books.",
    "ko": "나는 책에서 유용한 정보를 많이 얻을 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "6. 유용한 정보 2",
      "I can get a lot of useful information from books\n나는 친구들에게 많은 유용한 정보를 얻을 수 있다"
    ],
    "combined": false,
    "originalEn": "I can get a lot of useful information from books",
    "originalKo": "나는 친구들에게 많은 유용한 정보를 얻을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p3-7",
    "part": "3",
    "number": "7",
    "title": "유용한 정보 3",
    "en": "I can get a lot of useful information on the Internet.",
    "ko": "나는 인터넷에서 많은 유용한 정보를 얻을 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "7. 유용한 정보 3",
      "I can get a lot of useful information on the Internet.\n나는 인터넷에서 많은 유용한 정보를 얻을 수 있다."
    ],
    "combined": false,
    "originalEn": "I can get a lot of useful information on the Internet.",
    "originalKo": "나는 인터넷에서 많은 유용한 정보를 얻을 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p3-8",
    "part": "3",
    "number": "8",
    "title": "믿을 만한 정보",
    "en": "It’s a more reliable source, so I can trust the information.",
    "ko": "더 믿을 만한 출처라서 정보를 신뢰할 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "8. 믿을 만한 정보",
      "It’s more reliable, so the information is more trustworthy.\n이 것은 더 믿을 만 해서 정보가 더 신뢰가 간다 "
    ],
    "combined": false,
    "originalEn": "It’s more reliable, so the information is more trustworthy.",
    "originalKo": "이 것은 더 믿을 만 해서 정보가 더 신뢰가 간다",
    "reviewed": true
  },
  {
    "id": "original-p3-9",
    "part": "3",
    "number": "9",
    "title": "언제 어디서나",
    "en": "I can get information anytime, anywhere on my smartphone.",
    "ko": "나는 정보를 언제 어디서나 내 스마트폰으로 얻을 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "9. 언제 어디서나",
      "I can get information anytime anywhere on my smartphone.\n나는 정보를 언제 어디서나 내 스마트 폰으로 얻을 수 있다"
    ],
    "combined": false,
    "originalEn": "I can get information anytime anywhere on my smartphone.",
    "originalKo": "나는 정보를 언제 어디서나 내 스마트 폰으로 얻을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p3-10",
    "part": "3",
    "number": "10",
    "title": "대면 장점1",
    "en": "It feels more personal and helps me build a closer relationship.",
    "ko": "더 개인적으로 느껴지고, 더 가까운 관계를 맺는 데 도움이 된다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "10. 대면 장점1",
      "It is more personal, and builds a closer relationship.\n이 것은 더 개인적이고 더 밀접한 인간관계를 쌓을 수 있다."
    ],
    "combined": false,
    "originalEn": "It is more personal, and builds a closer relationship.",
    "originalKo": "이 것은 더 개인적이고 더 밀접한 인간관계를 쌓을 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p3-11",
    "part": "3",
    "number": "11",
    "title": "대면장점 2",
    "en": "It leads to fewer misunderstandings.",
    "ko": "이것은 오해를 덜 불러일으킨다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "11. 대면장점 2",
      "It causes less misunderstanding.\n이 것은 오해를 덜 불러 일으킨다."
    ],
    "combined": false,
    "originalEn": "It causes less misunderstanding.",
    "originalKo": "이 것은 오해를 덜 불러 일으킨다.",
    "reviewed": true
  },
  {
    "id": "original-p3-12",
    "part": "3",
    "number": "12",
    "title": "좋아하는 일",
    "en": "It’s my favorite thing to do.",
    "ko": "이것은 내가 가장 좋아하는 일이다.",
    "page": 1,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "12. 좋아하는 일",
      "It’s my favorite thing to do.\n이 것은 내가 가장 좋아하는 일이다."
    ],
    "combined": false,
    "originalEn": "It’s my favorite thing to do.",
    "originalKo": "이 것은 내가 가장 좋아하는 일이다.",
    "reviewed": true
  },
  {
    "id": "original-p3-13",
    "part": "3",
    "number": "13",
    "title": "행복",
    "en": "It makes me happy, and I can forget about my worries.",
    "ko": "이것은 나를 행복하게 해주고, 나는 걱정 근심을 잊을 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "13. 행복",
      "It makes me happy, and I can forget about my worries. \n이 것은 나를 행복하게 해주고, 나는 걱정 근심을 잊을 수 있다."
    ],
    "combined": false,
    "originalEn": "It makes me happy, and I can forget about my worries.",
    "originalKo": "이 것은 나를 행복하게 해주고, 나는 걱정 근심을 잊을 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p3-14",
    "part": "3",
    "number": "14",
    "title": "좋은 시설",
    "en": "It has great facilities.",
    "ko": "이곳에는 훌륭한 시설이 있다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "14. 좋은 시설",
      "It has great facilities. \n이 것은 좋은 시설을 가지고 있다."
    ],
    "combined": false,
    "originalEn": "It has great facilities.",
    "originalKo": "이 것은 좋은 시설을 가지고 있다.",
    "reviewed": true
  },
  {
    "id": "original-p3-15",
    "part": "3",
    "number": "15",
    "title": "핫플레이스",
    "en": "It’s a popular place, so people love it.",
    "ko": "이곳은 인기 있는 곳이라, 사람들이 좋아한다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "15. 핫플레이스",
      "It’s a well-liked place so people love it.\n이 곳은 인기 있는 곳이라, 사람들이 좋아한다."
    ],
    "combined": false,
    "originalEn": "It’s a well-liked place so people love it.",
    "originalKo": "이 곳은 인기 있는 곳이라, 사람들이 좋아한다.",
    "reviewed": true
  },
  {
    "id": "original-p3-16",
    "part": "3",
    "number": "16",
    "title": "예산 부족1",
    "en": "I’m a student, so my budget is tight.",
    "ko": "나는 학생이라 예산이 빠듯하다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "16. 예산 부족1",
      "I’m a student so my budget is tight.\n나는 학생이라 예산이 빠듯하다."
    ],
    "combined": false,
    "originalEn": "I’m a student so my budget is tight.",
    "originalKo": "나는 학생이라 예산이 빠듯하다.",
    "reviewed": true
  },
  {
    "id": "original-p3-17",
    "part": "3",
    "number": "17",
    "title": "예산 부족2",
    "en": "I can’t afford to buy expensive things.",
    "ko": "나는 비싼 것을 살 여유가 없다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "17. 예산 부족2",
      "I can’t afford to buy expensive things.\n나는 비싼 것을 살 여유가 없다. "
    ],
    "combined": false,
    "originalEn": "I can’t afford to buy expensive things.",
    "originalKo": "나는 비싼 것을 살 여유가 없다.",
    "reviewed": true
  },
  {
    "id": "original-p3-18",
    "part": "3",
    "number": "18",
    "title": "돈 낭비1",
    "en": "I don’t want to waste too much money on that.",
    "ko": "나는 그것에 너무 많은 돈을 낭비하고 싶지 않다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "18. 돈 낭비1",
      "I don’t want to waste too much money on that.\n나는 그것에 지나치게 많은 돈을 쓰고 싶지 않다."
    ],
    "combined": false,
    "originalEn": "I don’t want to waste too much money on that.",
    "originalKo": "나는 그것에 지나치게 많은 돈을 쓰고 싶지 않다.",
    "reviewed": true
  },
  {
    "id": "original-p3-19",
    "part": "3",
    "number": "19",
    "title": "돈 낭비2",
    "en": "It’s a waste of money.",
    "ko": "이것은 돈 낭비다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "19. 돈 낭비2",
      "It’s a waste of money.\n이 것은 돈 낭비다."
    ],
    "combined": false,
    "originalEn": "It’s a waste of money.",
    "originalKo": "이 것은 돈 낭비다.",
    "reviewed": true
  },
  {
    "id": "original-p3-20",
    "part": "3",
    "number": "20",
    "title": "시간 부족 1",
    "en": "I’m a student, so I’m busy with my schoolwork.",
    "ko": "나는 학생이라서 학업으로 바쁘다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "20. 시간 부족 1",
      "I’m a student and I’m so busy with my school work. \n나는 학생이다 그래서 학업에 바쁘다."
    ],
    "combined": false,
    "originalEn": "I’m a student and I’m so busy with my school work.",
    "originalKo": "나는 학생이다 그래서 학업에 바쁘다.",
    "reviewed": true
  },
  {
    "id": "original-p3-21",
    "part": "3",
    "number": "21",
    "title": "시간부족 2",
    "en": "I don’t have much time.",
    "ko": "나는 시간이 많이 없다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "21. 시간부족 2",
      "I don’t have much time\n나는 시간이 많이 없다."
    ],
    "combined": false,
    "originalEn": "I don’t have much time",
    "originalKo": "나는 시간이 많이 없다.",
    "reviewed": true
  },
  {
    "id": "original-p3-22",
    "part": "3",
    "number": "22",
    "title": "시간 부족3",
    "en": "I don’t want to waste too much time on that.",
    "ko": "나는 그것에 지나치게 많은 시간을 낭비하기 싫다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "22. 시간 부족3",
      "I don’t want to waste too much time on that.\n나는 그것에 지나치게 많은 시간을 낭비하기 싫다"
    ],
    "combined": false,
    "originalEn": "I don’t want to waste too much time on that.",
    "originalKo": "나는 그것에 지나치게 많은 시간을 낭비하기 싫다",
    "reviewed": true
  },
  {
    "id": "original-p3-23",
    "part": "3",
    "number": "23",
    "title": "시간낭비",
    "en": "It’s a waste of time.",
    "ko": "이것은 시간 낭비다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "23. 시간낭비",
      "It’s a waste of time.\n이 것은 시간 낭비다"
    ],
    "combined": false,
    "originalEn": "It’s a waste of time.",
    "originalKo": "이 것은 시간 낭비다",
    "reviewed": true
  },
  {
    "id": "original-p3-24",
    "part": "3",
    "number": "24",
    "title": "재미",
    "en": "It’s more fun and entertaining, so I don’t get bored.",
    "ko": "이것은 더 재밌고 즐거움을 주는 일이다. 그래서 나는 지루해지지 않는다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "24. 재미",
      "It’s more fun and entertaining, so I don’t get bored\n이 것은 더 재밌고 즐거움을 주는 일이다. 그래서 나는 지루해지지 않는다"
    ],
    "combined": false,
    "originalEn": "It’s more fun and entertaining, so I don’t get bored",
    "originalKo": "이 것은 더 재밌고 즐거움을 주는 일이다. 그래서 나는 지루해지지 않는다",
    "reviewed": true
  },
  {
    "id": "original-p3-25",
    "part": "3",
    "number": "25",
    "title": "같이 1",
    "en": "I think it’s more fun to do things in a group.",
    "ko": "나는 같이 하는 것이 더 재미있다고 생각한다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "25. 같이 1",
      "I think it’s more fun to do things in a group\n나는 같이 하는 것이 더 재미있다고 생각한다"
    ],
    "combined": false,
    "originalEn": "I think it’s more fun to do things in a group",
    "originalKo": "나는 같이 하는 것이 더 재미있다고 생각한다",
    "reviewed": true
  },
  {
    "id": "original-p3-26",
    "part": "3",
    "number": "26",
    "title": "같이 2",
    "en": "I can meet new people and make friends.",
    "ko": "나는 새로운 사람을 만나고 친구를 사귈 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "26. 같이 2",
      "I can meet new people and make friends. \n나는 새로운 사람을 만날 수 있고 친구를 만들 수 있다."
    ],
    "combined": false,
    "originalEn": "I can meet new people and make friends.",
    "originalKo": "나는 새로운 사람을 만날 수 있고 친구를 만들 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p3-27",
    "part": "3",
    "number": "27",
    "title": "혼자 1",
    "en": "I feel more comfortable and can focus better.",
    "ko": "나는 더 편안함을 느끼고 더 잘 집중할 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "27. 혼자 1",
      "I feel more comfortable and I can focus better.\n나는 더 편안함을 느끼고 더 잘 집중 할 수 있다."
    ],
    "combined": false,
    "originalEn": "I feel more comfortable and I can focus better.",
    "originalKo": "나는 더 편안함을 느끼고 더 잘 집중 할 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p3-28",
    "part": "3",
    "number": "28",
    "title": "혼자 2",
    "en": "I don’t have to waste time waiting for other people.",
    "ko": "나는 다른 사람들을 기다리느라 시간을 낭비할 필요가 없다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "28. 혼자 2",
      "I don’t have to waste time waiting for other people.\n나는 다른 사람들을 기다리느라 시간을 낭비 할 필요가 없다"
    ],
    "combined": false,
    "originalEn": "I don’t have to waste time waiting for other people.",
    "originalKo": "나는 다른 사람들을 기다리느라 시간을 낭비 할 필요가 없다",
    "reviewed": true
  },
  {
    "id": "original-p3-29",
    "part": "3",
    "number": "29",
    "title": "집 1",
    "en": "I feel more comfortable at home.",
    "ko": "나는 집에서 더 편안함을 느낀다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "29. 집 1",
      "I feel more comfortable at home.\n나는 집에서 더 편안함을 느낀다"
    ],
    "combined": false,
    "originalEn": "I feel more comfortable at home.",
    "originalKo": "나는 집에서 더 편안함을 느낀다",
    "reviewed": true
  },
  {
    "id": "original-p3-30",
    "part": "3",
    "number": "30",
    "title": "집 2",
    "en": "I can save time because I don’t have to go out.",
    "ko": "밖에 나갈 필요가 없어서 시간을 절약할 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "30.  집 2",
      "I can save time because I don’t have to waste time going out. \n나는 시간을 절약 할 수 있다 왜냐하면 나는 밖에 나가느라 시간을 낭비 할 \n필요가 없기 때문이다."
    ],
    "combined": false,
    "originalEn": "I can save time because I don’t have to waste time going out.",
    "originalKo": "나는 시간을 절약 할 수 있다 왜냐하면 나는 밖에 나가느라 시간을 낭비 할 \n필요가 없기 때문이다.",
    "reviewed": true
  },
  {
    "id": "original-p3-31",
    "part": "3",
    "number": "31",
    "title": "새로운 것1",
    "en": "They are too old, so I think it would be good to replace them with new ones.",
    "ko": "그것들은 너무 오래되어서 새것으로 교체하면 좋을 것 같다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "31. 새로운 것1",
      "They are too old so I think it’s good to have new ones.\n그 것들은 너무 오래 되어서 새로운 것이 생기면 좋을 것 같다"
    ],
    "combined": false,
    "originalEn": "They are too old so I think it’s good to have new ones.",
    "originalKo": "그 것들은 너무 오래 되어서 새로운 것이 생기면 좋을 것 같다",
    "reviewed": true
  },
  {
    "id": "original-p3-32",
    "part": "3",
    "number": "32",
    "title": "새로운 것 2",
    "en": "They are outdated, so I think it would be better to replace them with new ones.",
    "ko": "그것들은 구식이라서 새것으로 교체하면 더 좋을 것 같다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "32. 새로운 것 2",
      "They are too outdated so I think it’s good to have new ones.\n그 것들은 너무 구식이어서 새로운 것이 있으면 더 나을 것 같다 "
    ],
    "combined": false,
    "originalEn": "They are too outdated so I think it’s good to have new ones.",
    "originalKo": "그 것들은 너무 구식이어서 새로운 것이 있으면 더 나을 것 같다",
    "reviewed": true
  },
  {
    "id": "original-p3-33",
    "part": "3",
    "number": "33",
    "title": "새로운 것 3",
    "en": "If we had more stores here, it would be more convenient.",
    "ko": "여기에 더 많은 가게가 있다면, 더 편리할 것이다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "33. 새로운 것 3",
      "If we have more stores here, it would be more convenient. \n여기에 더 많은 가게가 있다면, 더 편리할 것이다"
    ],
    "combined": false,
    "originalEn": "If we have more stores here, it would be more convenient.",
    "originalKo": "여기에 더 많은 가게가 있다면, 더 편리할 것이다",
    "reviewed": true
  },
  {
    "id": "original-p3-34",
    "part": "3",
    "number": "34",
    "title": "필요1",
    "en": "It’s essential for me.",
    "ko": "이것은 나에게 꼭 필요하다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "34. 필요1",
      "It’s very necessary for me \n이 것은 나에게 매우 필요 한 것이다."
    ],
    "combined": false,
    "originalEn": "It’s very necessary for me",
    "originalKo": "이 것은 나에게 매우 필요 한 것이다.",
    "reviewed": true
  },
  {
    "id": "original-p3-35",
    "part": "3",
    "number": "35",
    "title": "필요 2",
    "en": "I frequently use it.",
    "ko": "나는 그것을 자주 이용한다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "35. 필요 2",
      "I frequently use it. \n나는 그 것을 자주 이용한다"
    ],
    "combined": false,
    "originalEn": "I frequently use it.",
    "originalKo": "나는 그 것을 자주 이용한다",
    "reviewed": true
  },
  {
    "id": "original-p3-36",
    "part": "3",
    "number": "36",
    "title": "좋은 경험1",
    "en": "It makes me happy and gives me a great experience.",
    "ko": "이것은 나를 행복하게 하고 좋은 경험을 하게 해 준다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "36. 좋은 경험1",
      "It makes me happy and I can have a great experience. \n이 것은 나를 행복하게 해주고, 나는 좋은 경험을 할 수 있다"
    ],
    "combined": false,
    "originalEn": "It makes me happy and I can have a great experience.",
    "originalKo": "이 것은 나를 행복하게 해주고, 나는 좋은 경험을 할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p3-37",
    "part": "3",
    "number": "37",
    "title": "좋은 경험 2",
    "en": "They provide a welcoming environment and a pleasant experience.",
    "ko": "그들은 편안하고 환영받는 분위기와 기분 좋은 경험을 제공한다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "37. 좋은 경험 2",
      "They provide a happy environment and a pleasant experience.\n그들은 행복한 분위기와 기분 좋은 경험을 제공한다"
    ],
    "combined": false,
    "originalEn": "They provide a happy environment and a pleasant experience.",
    "originalKo": "그들은 행복한 분위기와 기분 좋은 경험을 제공한다",
    "reviewed": true
  },
  {
    "id": "original-p3-38",
    "part": "3",
    "number": "38",
    "title": "믿을 만한 제품",
    "en": "It’s reliable, so I can trust the product.",
    "ko": "이것은 믿을 만해서 제품을 신뢰할 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "38. 믿을 만한 제품",
      "It’s more reliable and I can trust the product \n이 것은 더 믿을 만 해서 나는 그 제품을 신뢰 할 수 있다 "
    ],
    "combined": false,
    "originalEn": "It’s more reliable and I can trust the product",
    "originalKo": "이 것은 더 믿을 만 해서 나는 그 제품을 신뢰 할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p3-39",
    "part": "3",
    "number": "39",
    "title": "인기있는 것",
    "en": "It’s a popular item, so people will love it.",
    "ko": "이것은 인기 있는 아이템인지라 사람들이 좋아할 것이다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "39. 인기있는 것",
      "It’s a popular item so people will love it. \n이 것은 인기있는 아이템인지라 사람들이 좋아 할 것이다"
    ],
    "combined": false,
    "originalEn": "It’s a popular item so people will love it.",
    "originalKo": "이 것은 인기있는 아이템인지라 사람들이 좋아 할 것이다",
    "reviewed": true
  },
  {
    "id": "original-p3-40",
    "part": "3",
    "number": "40",
    "title": "선물1",
    "en": "It has sentimental value.",
    "ko": "이것은 나에게 정서적으로 소중한 의미가 있다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "40. 선물1",
      "It has sentimental value. \n이 것은 의미가 깊다"
    ],
    "combined": false,
    "originalEn": "It has sentimental value.",
    "originalKo": "이 것은 의미가 깊다",
    "reviewed": true
  },
  {
    "id": "original-p3-41",
    "part": "3",
    "number": "41",
    "title": "도전",
    "en": "I like to try new things.",
    "ko": "나는 새로운 것을 시도해 보는 것을 좋아한다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "41. 도전",
      "I like to try new things\n나는 새로운 것을 시도 해 보는 것을 좋아한다"
    ],
    "combined": false,
    "originalEn": "I like to try new things",
    "originalKo": "나는 새로운 것을 시도 해 보는 것을 좋아한다",
    "reviewed": true
  },
  {
    "id": "original-p3-42",
    "part": "3",
    "number": "42",
    "title": "선물2",
    "en": "It’s a good gift.",
    "ko": "이것은 좋은 선물이다.",
    "page": 3,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "42. 선물2",
      "It’s a good gift\n이 것은 좋은 선물이다"
    ],
    "combined": false,
    "originalEn": "It’s a good gift",
    "originalKo": "이 것은 좋은 선물이다",
    "reviewed": true
  },
  {
    "id": "original-p3-43",
    "part": "3",
    "number": "43",
    "title": "루틴 1",
    "en": "It’s part of my routine.",
    "ko": "이것은 내 일상의 일부이다.",
    "page": 4,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "43. 루틴 1",
      "It’s part of my routine. \n이 것은 내 일상의 일부이다"
    ],
    "combined": false,
    "originalEn": "It’s part of my routine.",
    "originalKo": "이 것은 내 일상의 일부이다",
    "reviewed": true
  },
  {
    "id": "original-p3-44",
    "part": "3",
    "number": "44",
    "title": "루틴2",
    "en": "It’s a habit of mine.",
    "ko": "이것은 내 습관이다.",
    "page": 4,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "44. 루틴2",
      "It’s my habit \n이 것은 내 습관이다"
    ],
    "combined": false,
    "originalEn": "It’s my habit",
    "originalKo": "이 것은 내 습관이다",
    "reviewed": true
  },
  {
    "id": "original-p3-45",
    "part": "3",
    "number": "45",
    "title": "좋아한다1",
    "en": "I really liked it.",
    "ko": "나는 그것이 정말 좋았다.",
    "page": 4,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "45. 좋아한다1",
      "I really liked it\n난 그 것이 정말 좋았었다"
    ],
    "combined": false,
    "originalEn": "I really liked it",
    "originalKo": "난 그 것이 정말 좋았었다",
    "reviewed": true
  },
  {
    "id": "original-p3-46",
    "part": "3",
    "number": "46",
    "title": "좋아한다2",
    "en": "It was great.",
    "ko": "그것은 훌륭했다.",
    "page": 4,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "46. 좋아한다2",
      "It was great \n그 것은 훌륭했다"
    ],
    "combined": false,
    "originalEn": "It was great",
    "originalKo": "그 것은 훌륭했다",
    "reviewed": true
  },
  {
    "id": "original-p3-47",
    "part": "3",
    "number": "47",
    "title": "좋아한다 3",
    "en": "It was awesome.",
    "ko": "그것은 매우 근사했다.",
    "page": 4,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "47. 좋아한다 3",
      "It was awesome\n그 것은 매우 근사했다"
    ],
    "combined": false,
    "originalEn": "It was awesome",
    "originalKo": "그 것은 매우 근사했다",
    "reviewed": true
  },
  {
    "id": "original-p3-48",
    "part": "3",
    "number": "48",
    "title": "장점1",
    "en": "It’s cheaper and faster.",
    "ko": "이것은 더 싸고 빠르다.",
    "page": 4,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "48. 장점1",
      "It’s cheaper and faster \n이 것은 더 싸고 빠르다"
    ],
    "combined": false,
    "originalEn": "It’s cheaper and faster",
    "originalKo": "이 것은 더 싸고 빠르다",
    "reviewed": true
  },
  {
    "id": "original-p3-49",
    "part": "3",
    "number": "49",
    "title": "장점2",
    "en": "It’s very convenient and useful.",
    "ko": "이것은 매우 편리하고 유용하다.",
    "page": 4,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "49. 장점2",
      "It’s very convenient and useful\n이 것은 매우 편리하고 유용하다"
    ],
    "combined": false,
    "originalEn": "It’s very convenient and useful",
    "originalKo": "이 것은 매우 편리하고 유용하다",
    "reviewed": true
  },
  {
    "id": "original-p3-50",
    "part": "3",
    "number": "50",
    "title": "장점3",
    "en": "It’s very helpful to me.",
    "ko": "이것은 나에게 매우 도움이 된다.",
    "page": 4,
    "file": "materials/toeic-original/part3.pdf",
    "rawCells": [
      "50. 장점3",
      "It’s very helpful for me\n이 것은 나에게 매우 도움이 된다."
    ],
    "combined": false,
    "originalEn": "It’s very helpful for me",
    "originalKo": "이 것은 나에게 매우 도움이 된다.",
    "reviewed": true
  },
  {
    "id": "original-p5-1",
    "part": "5",
    "number": "1",
    "title": "1번",
    "en": "They can learn new things.",
    "ko": "그들은 새로운 것들을 배울 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "1",
      "They can learn new things. 그들은 새로운 것들을 배울 수 있다"
    ],
    "combined": false,
    "originalEn": "They can learn new things.",
    "originalKo": "그들은 새로운 것들을 배울 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-2",
    "part": "5",
    "number": "2",
    "title": "2번",
    "en": "They can meet new people and expand their professional networks.",
    "ko": "그들은 새로운 사람들을 만나고 인맥을 넓힐 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "2",
      "They can meet new people and expand their network. \n그들은 새로운 사람을 만나고 인맥을 넓힐 수 있다"
    ],
    "combined": false,
    "originalEn": "They can meet new people and expand their network.",
    "originalKo": "그들은 새로운 사람을 만나고 인맥을 넓힐 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-3",
    "part": "5",
    "number": "3",
    "title": "3번",
    "en": "They can have many new experiences and broaden their perspectives.",
    "ko": "그들은 새로운 경험을 많이 하고 견문을 넓힐 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "3",
      "They can have a lot of (new) experience and broaden their perspective.\n그들은 많은 것을 경험하고 그들의 견문을 넓힐 수 있다"
    ],
    "combined": false,
    "originalEn": "They can have a lot of (new) experience and broaden their perspective.",
    "originalKo": "그들은 많은 것을 경험하고 그들의 견문을 넓힐 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-4",
    "part": "5",
    "number": "4",
    "title": "4번",
    "en": "They can’t make good decisions because they are not mature enough.",
    "ko": "그들은 아직 충분히 성숙하지 않아서 좋은 결정을 내리지 못한다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "4",
      "They can’t make good decisions because they are not mature enough \n그들은 좋은 결정을 하지 못하는데 왜냐하면 그들은 아직 충분히 성숙하지 못했기 때문이다."
    ],
    "combined": false,
    "originalEn": "They can’t make good decisions because they are not mature enough",
    "originalKo": "그들은 좋은 결정을 하지 못하는데 왜냐하면 그들은 아직 충분히 성숙하지 못했기 때문이다.",
    "reviewed": true
  },
  {
    "id": "original-p5-5",
    "part": "5",
    "number": "5",
    "title": "5번",
    "en": "They will be distracted.",
    "ko": "그들은 집중을 못하게 될 것이다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "5",
      "They will be distracted. 그들은 집중을 못하게 될 것이다 "
    ],
    "combined": false,
    "originalEn": "They will be distracted.",
    "originalKo": "그들은 집중을 못하게 될 것이다",
    "reviewed": true
  },
  {
    "id": "original-p5-6",
    "part": "5",
    "number": "6",
    "title": "6번",
    "en": "They can’t focus on their studies or work.",
    "ko": "그들은 그들의 학업/업무에 집중할 수 없다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "6",
      "They can’t focus on their studies/ work. 그들은 그들의 학업/업무에 집중 할 수 없다 "
    ],
    "combined": false,
    "originalEn": "They can’t focus on their studies/ work.",
    "originalKo": "그들은 그들의 학업/업무에 집중 할 수 없다",
    "reviewed": true
  },
  {
    "id": "original-p5-7",
    "part": "5",
    "number": "7",
    "title": "7번",
    "en": "They can’t get good grades at school.",
    "ko": "그들은 학교에서 좋은 성적을 받을 수 없다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "7",
      "They can’t get good grades at school 그들은 학교에서 좋은 성적을 받을 수 없다 "
    ],
    "combined": false,
    "originalEn": "They can’t get good grades at school",
    "originalKo": "그들은 학교에서 좋은 성적을 받을 수 없다",
    "reviewed": true
  },
  {
    "id": "original-p5-8",
    "part": "5",
    "number": "8",
    "title": "8번",
    "en": "They will fall behind in class.",
    "ko": "그들은 수업에서 뒤처질 것이다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "8",
      "They will fall behind in class 그들은 학업이 뒤쳐질 것이다 "
    ],
    "combined": false,
    "originalEn": "They will fall behind in class",
    "originalKo": "그들은 학업이 뒤쳐질 것이다",
    "reviewed": true
  },
  {
    "id": "original-p5-9",
    "part": "5",
    "number": "9",
    "title": "9번",
    "en": "They can’t work efficiently.",
    "ko": "그들은 효율적으로 일할 수 없다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "9",
      "They can’t work efficiently 그들은 효율적으로 일 할 수 없다 "
    ],
    "combined": false,
    "originalEn": "They can’t work efficiently",
    "originalKo": "그들은 효율적으로 일 할 수 없다",
    "reviewed": true
  },
  {
    "id": "original-p5-10",
    "part": "5",
    "number": "10",
    "title": "10번",
    "en": "They can save money.",
    "ko": "그들은 돈을 절약할 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "10",
      "They can save money 그들은 돈을 절약 할 수 있다"
    ],
    "combined": false,
    "originalEn": "They can save money",
    "originalKo": "그들은 돈을 절약 할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-11",
    "part": "5",
    "number": "11",
    "title": "11번",
    "en": "The cost of living is too high.",
    "ko": "생활비가 너무 비싸다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "11",
      "The cost of living is too high. 생활비가 너무 비싸다"
    ],
    "combined": false,
    "originalEn": "The cost of living is too high.",
    "originalKo": "생활비가 너무 비싸다",
    "reviewed": true
  },
  {
    "id": "original-p5-12",
    "part": "5",
    "number": "12",
    "title": "12번",
    "en": "They can’t make a living.",
    "ko": "그들은 생계를 유지할 수 없다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "12",
      "They can’t make a living. 그들은 먹고 살기가 힘들다"
    ],
    "combined": false,
    "originalEn": "They can’t make a living.",
    "originalKo": "그들은 먹고 살기가 힘들다",
    "reviewed": true
  },
  {
    "id": "original-p5-13",
    "part": "5",
    "number": "13",
    "title": "13번",
    "en": "I can earn a higher salary.",
    "ko": "나는 더 높은 급여를 받을 수 있다.",
    "page": 1,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "13",
      "I can get a high(er) salary 나는 (더) 높은 급여를 받을 수 있다"
    ],
    "combined": false,
    "originalEn": "I can get a high(er) salary",
    "originalKo": "나는 (더) 높은 급여를 받을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-14",
    "part": "5",
    "number": "14",
    "title": "14번",
    "en": "The cost of [an item or service] is too high.",
    "ko": "[물건이나 서비스]의 비용이 너무 높다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "14",
      "The cost of N is too expensive. 명사의 가격이 너무 비싸다"
    ],
    "combined": false,
    "originalEn": "The cost of N is too expensive.",
    "originalKo": "명사의 가격이 너무 비싸다",
    "reviewed": true
  },
  {
    "id": "original-p5-15",
    "part": "5",
    "number": "15",
    "title": "15번",
    "en": "It’s a waste of money.",
    "ko": "이것은 돈 낭비다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "15",
      "It’s a waste of money 이 것은 돈 낭비다"
    ],
    "combined": false,
    "originalEn": "It’s a waste of money",
    "originalKo": "이 것은 돈 낭비다",
    "reviewed": true
  },
  {
    "id": "original-p5-16",
    "part": "5",
    "number": "16",
    "title": "16번",
    "en": "That’s a good investment because it improves people’s lives.",
    "ko": "그것은 사람들의 삶을 더 낫게 해 주므로 좋은 투자이다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "16",
      "That’s a good investment because it makes lives better. \n그것은 좋은 투자인데 왜냐하면 삶을 더 낫게 만들어준다"
    ],
    "combined": false,
    "originalEn": "That’s a good investment because it makes lives better.",
    "originalKo": "그것은 좋은 투자인데 왜냐하면 삶을 더 낫게 만들어준다",
    "reviewed": true
  },
  {
    "id": "original-p5-17",
    "part": "5",
    "number": "17",
    "title": "17번",
    "en": "They can focus better.",
    "ko": "그들은 더 잘 집중할 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "17",
      "They can focus better. 그들은 더 잘 집중 할 수 있다"
    ],
    "combined": false,
    "originalEn": "They can focus better.",
    "originalKo": "그들은 더 잘 집중 할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-18",
    "part": "5",
    "number": "18",
    "title": "18번",
    "en": "They will not be distracted by others.",
    "ko": "그들은 다른 사람들에게 방해받지 않을 것이다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "18",
      "They will not be distracted by others. 그들은 다른 사람들에게 방해 받지 않을 것이다."
    ],
    "combined": false,
    "originalEn": "They will not be distracted by others.",
    "originalKo": "그들은 다른 사람들에게 방해 받지 않을 것이다.",
    "reviewed": true
  },
  {
    "id": "original-p5-19",
    "part": "5",
    "number": "19",
    "title": "19번",
    "en": "They can set their own schedules.",
    "ko": "그들은 자신의 일정을 정할 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "19",
      "They can set their own schedule. 그들은 그들의 스케쥴을 정할 수 있다."
    ],
    "combined": false,
    "originalEn": "They can set their own schedule.",
    "originalKo": "그들은 그들의 스케쥴을 정할 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p5-20",
    "part": "5",
    "number": "20",
    "title": "20번",
    "en": "They can have more freedom.",
    "ko": "그들은 더 자유로울 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "20",
      "They can have more freedom. 그들은 더 자유로울 수 있다"
    ],
    "combined": false,
    "originalEn": "They can have more freedom.",
    "originalKo": "그들은 더 자유로울 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-21",
    "part": "5",
    "number": "21",
    "title": "21번",
    "en": "They feel more comfortable.",
    "ko": "그들은 더 편안함을 느낀다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "21",
      "They feel more comfortable. 그들은 더 편안함을 느낀다. "
    ],
    "combined": false,
    "originalEn": "They feel more comfortable.",
    "originalKo": "그들은 더 편안함을 느낀다.",
    "reviewed": true
  },
  {
    "id": "original-p5-22",
    "part": "5",
    "number": "22",
    "title": "22번",
    "en": "It’s fun and entertaining.",
    "ko": "이것은 재밌고 즐거움을 준다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "22",
      "It’s fun and entertaining. 이 것은 재밌고 즐거움을 준다."
    ],
    "combined": false,
    "originalEn": "It’s fun and entertaining.",
    "originalKo": "이 것은 재밌고 즐거움을 준다.",
    "reviewed": true
  },
  {
    "id": "original-p5-23",
    "part": "5",
    "number": "23",
    "title": "23번",
    "en": "They can get information and share it with other people.",
    "ko": "그들은 정보를 얻고 다른 사람들과 공유할 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "23",
      "They can get information and share it with other people \n그들은 정보를 얻고 다른 사람 과 공유할 수 있다"
    ],
    "combined": false,
    "originalEn": "They can get information and share it with other people",
    "originalKo": "그들은 정보를 얻고 다른 사람 과 공유할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-24",
    "part": "5",
    "number": "24",
    "title": "24번",
    "en": "It feels more like a family.",
    "ko": "더 가족처럼 느껴진다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "24",
      "It feels more like a family. 더 가족 처럼 느껴진다"
    ],
    "combined": false,
    "originalEn": "It feels more like a family.",
    "originalKo": "더 가족 처럼 느껴진다",
    "reviewed": true
  },
  {
    "id": "original-p5-25",
    "part": "5",
    "number": "25",
    "title": "25번",
    "en": "They can get a lot of useful, up-to-date information on the Internet.",
    "ko": "그들은 인터넷에서 유용한 최신 정보를 많이 얻을 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "25",
      "They can get a lot of useful information/ latest information on the Internet \n그들은 많은 유용한 정보/최신정보를 얻을 수 있다"
    ],
    "combined": false,
    "originalEn": "They can get a lot of useful information/ latest information on the Internet",
    "originalKo": "그들은 많은 유용한 정보/최신정보를 얻을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-26",
    "part": "5",
    "number": "26",
    "title": "26번",
    "en": "They can [verb phrase] anytime, anywhere on their smartphones.",
    "ko": "그들은 스마트폰으로 언제 어디서나 [동사구에 해당하는 행동]을 할 수 있다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "26",
      "They can 동사 anytime anywhere on their smartphones.\n그들은 언제 어디서나 그들의 스마트 폰으로 동사 할 수 있다"
    ],
    "combined": false,
    "originalEn": "They can 동사 anytime anywhere on their smartphones.",
    "originalKo": "그들은 언제 어디서나 그들의 스마트 폰으로 동사 할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-27",
    "part": "5",
    "number": "27",
    "title": "27번",
    "en": "It’s faster and more convenient.",
    "ko": "이것은 더 빠르고 편리하다.",
    "page": 2,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "27",
      "It’s faster and convenient.\n이 것은 더 빠르고 편리하다"
    ],
    "combined": false,
    "originalEn": "It’s faster and convenient.",
    "originalKo": "이 것은 더 빠르고 편리하다",
    "reviewed": true
  },
  {
    "id": "original-p5-28",
    "part": "5",
    "number": "28",
    "title": "28번",
    "en": "There is a lot of inaccurate information on the Internet, so not all of it is reliable.",
    "ko": "인터넷에는 부정확한 정보가 많아서 모든 정보를 믿을 수 있는 것은 아니다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "28",
      "There is a lot of inaccurate information on the Internet so it’s not reliable 인터넷에는 많은 부정확한 정보가 있어서 \n믿을 만 하지가 않다"
    ],
    "combined": false,
    "originalEn": "There is a lot of inaccurate information on the Internet so it’s not reliable",
    "originalKo": "인터넷에는 많은 부정확한 정보가 있어서 \n믿을 만 하지가 않다",
    "reviewed": true
  },
  {
    "id": "original-p5-29",
    "part": "5",
    "number": "29",
    "title": "29번",
    "en": "It distracts [a group of people], so they can’t focus on their studies or work.",
    "ko": "이것은 [사람들]의 집중을 방해해서 그들이 공부나 업무에 집중할 수 없게 한다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "29",
      " It is very distracting for S so S can’t focus on their studies/ work.\n이 것은 학생들에게 매우 집중을 분산 시키는 것이라 학생들은 공부에 집중 할 수 없다"
    ],
    "combined": false,
    "originalEn": "It is very distracting for S so S can’t focus on their studies/ work.",
    "originalKo": "이 것은 학생들에게 매우 집중을 분산 시키는 것이라 학생들은 공부에 집중 할 수 없다",
    "reviewed": true
  },
  {
    "id": "original-p5-30",
    "part": "5",
    "number": "30",
    "title": "30번",
    "en": "It’s a waste of money.",
    "ko": "돈 낭비다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "30",
      "It’s a waste of money\n돈 낭비다"
    ],
    "combined": false,
    "originalEn": "It’s a waste of money",
    "originalKo": "돈 낭비다",
    "reviewed": true
  },
  {
    "id": "original-p5-31",
    "part": "5",
    "number": "31",
    "title": "31번",
    "en": "It’s too expensive.",
    "ko": "너무 지나치게 비싸다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "31",
      "It’s too expensive\n너무 지나치게 비싸다"
    ],
    "combined": false,
    "originalEn": "It’s too expensive",
    "originalKo": "너무 지나치게 비싸다",
    "reviewed": true
  },
  {
    "id": "original-p5-32",
    "part": "5",
    "number": "32",
    "title": "32번",
    "en": "I can get responses right away.",
    "ko": "나는 즉각적인 답변을 받을 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "32",
      "I can get responses right away 나는 즉각적인 답변을 받을 수 있다"
    ],
    "combined": false,
    "originalEn": "I can get responses right away",
    "originalKo": "나는 즉각적인 답변을 받을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-33",
    "part": "5",
    "number": "33",
    "title": "33번",
    "en": "I can understand the speaker’s feelings more accurately.",
    "ko": "나는 화자의 감정을 더 정확하게 이해할 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "33",
      " I can understand the feeling of the speaker more accurately\n나는 화자의 감정을 더 정확하게 이해할 수 있다"
    ],
    "combined": false,
    "originalEn": "I can understand the feeling of the speaker more accurately",
    "originalKo": "나는 화자의 감정을 더 정확하게 이해할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-34",
    "part": "5",
    "number": "34",
    "title": "34번",
    "en": "They can create a friendly work atmosphere.",
    "ko": "그들은 우호적인 업무 분위기를 만들 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "34",
      "They can make a friendly (work) atmosphere 그들은 좋은 (업무) 분위기를 만들 수 있다"
    ],
    "combined": false,
    "originalEn": "They can make a friendly (work) atmosphere",
    "originalKo": "그들은 좋은 (업무) 분위기를 만들 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-35",
    "part": "5",
    "number": "35",
    "title": "35번",
    "en": "They can communicate better with others.",
    "ko": "그들은 다른 사람들과 더 잘 소통할 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "35",
      "They can communicate with others better 그들은 다른 사람들과 더 잘 소통 할 수 있다"
    ],
    "combined": false,
    "originalEn": "They can communicate with others better",
    "originalKo": "그들은 다른 사람들과 더 잘 소통 할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-36",
    "part": "5",
    "number": "36",
    "title": "36번",
    "en": "They can be good team players and build good relationships with others.",
    "ko": "그들은 좋은 팀플레이어가 될 수 있고, 다른 사람들과 좋은 관계를 맺을 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "36",
      "They can be good team players and make good relationships with others \n그들은 좋은 팀플레이어가 될 수 있고, 다른 사람들과 좋은 관계를 맺을 수 있다"
    ],
    "combined": false,
    "originalEn": "They can be good team players and make good relationships with others",
    "originalKo": "그들은 좋은 팀플레이어가 될 수 있고, 다른 사람들과 좋은 관계를 맺을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-37",
    "part": "5",
    "number": "37",
    "title": "37번",
    "en": "They can build a good reputation.",
    "ko": "그들은 좋은 평판을 쌓을 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "37",
      "They can have a good reputation 그들은 좋은 평판을 가질 수 있다 "
    ],
    "combined": false,
    "originalEn": "They can have a good reputation",
    "originalKo": "그들은 좋은 평판을 가질 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-38",
    "part": "5",
    "number": "38",
    "title": "38번",
    "en": "They can be very influential.",
    "ko": "그들은 큰 영향력을 가질 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "38",
      "They can be very influential 그들은 매우 영향력 있을 수 있다"
    ],
    "combined": false,
    "originalEn": "They can be very influential",
    "originalKo": "그들은 매우 영향력 있을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-39",
    "part": "5",
    "number": "39",
    "title": "39번",
    "en": "They can motivate others.",
    "ko": "그들은 다른 사람들에게 동기를 부여할 수 있다.",
    "page": 3,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "39",
      "They can motivate others. 그들은 다른 사람들을 동기 부여 해줄 수 있다 "
    ],
    "combined": false,
    "originalEn": "They can motivate others.",
    "originalKo": "그들은 다른 사람들을 동기 부여 해줄 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-40",
    "part": "5",
    "number": "40",
    "title": "40번",
    "en": "Everything is constantly changing, and there is a lot of competition.",
    "ko": "모든 것이 급변하고 경쟁이 치열하다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "40",
      "Everything is always changing and there is a lot of competition 모든 것이 급변하고 경쟁이 치열하다"
    ],
    "combined": false,
    "originalEn": "Everything is always changing and there is a lot of competition",
    "originalKo": "모든 것이 급변하고 경쟁이 치열하다",
    "reviewed": true
  },
  {
    "id": "original-p5-41",
    "part": "5",
    "number": "41",
    "title": "41번",
    "en": "They face a lot of challenges and difficulties.",
    "ko": "그들은 많은 도전과 어려움에 직면하게 된다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "41",
      "They face a lot of challenges and difficulties 그들은 많은 도전과 어려움을 직면하게 된다"
    ],
    "combined": false,
    "originalEn": "They face a lot of challenges and difficulties",
    "originalKo": "그들은 많은 도전과 어려움을 직면하게 된다",
    "reviewed": true
  },
  {
    "id": "original-p5-42",
    "part": "5",
    "number": "42",
    "title": "42번",
    "en": "He can handle a variety of situations thanks to his creativity.",
    "ko": "그는 창의력 덕분에 다양한 상황을 잘 처리할 수 있다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "42",
      "He is able to handle a variety of situation due to his N \n그는 그의 창의력 덕택에 다양한 상황을 잘 처리 할 수 있다"
    ],
    "combined": false,
    "originalEn": "He is able to handle a variety of situation due to his N",
    "originalKo": "그는 그의 창의력 덕택에 다양한 상황을 잘 처리 할 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-43",
    "part": "5",
    "number": "43",
    "title": "43번",
    "en": "They have a lot of experience and knowledge.",
    "ko": "그들은 경험과 지식이 풍부하다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "43",
      "They have a lot of experience/ knowledge 그들은 많은 경험/지식을 가지고 있다"
    ],
    "combined": false,
    "originalEn": "They have a lot of experience/ knowledge",
    "originalKo": "그들은 많은 경험/지식을 가지고 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-추가 1",
    "part": "5",
    "number": "추가 1",
    "title": "추가로 알아 두면 좋은 문장",
    "en": "They can give me some good advice.",
    "ko": "그들은 나에게 좋은 조언을 해 줄 수 있다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "※",
      "추가로 알아두면 좋은 문장: They can give me some good advice 그들은 좋은 조언을 해 줄 수 있다."
    ],
    "combined": false,
    "originalEn": "They can give me some good advice",
    "originalKo": "그들은 좋은 조언을 해 줄 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p5-44",
    "part": "5",
    "number": "44",
    "title": "44번",
    "en": "Employees can work more efficiently and productively.",
    "ko": "직원들은 더 효율적이고 생산적으로 일할 수 있다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "44",
      "Employees can work more efficiently and productively.\n직원들은 더 효율적 생산적으로 일할 수 있다."
    ],
    "combined": false,
    "originalEn": "Employees can work more efficiently and productively.",
    "originalKo": "직원들은 더 효율적 생산적으로 일할 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p5-45",
    "part": "5",
    "number": "45",
    "title": "45번",
    "en": "Employees can be more satisfied with their jobs.",
    "ko": "직원들은 자신의 직무에 더 만족할 수 있다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "45",
      "Employees can be more satisfied with their jobs.\n직원들은 그들의 직장에 더 만족 할 수 있다."
    ],
    "combined": false,
    "originalEn": "Employees can be more satisfied with their jobs.",
    "originalKo": "직원들은 그들의 직장에 더 만족 할 수 있다.",
    "reviewed": true
  },
  {
    "id": "original-p5-46",
    "part": "5",
    "number": "46",
    "title": "46번",
    "en": "It can create a better work environment.",
    "ko": "이것은 더 나은 업무 환경을 만들 수 있다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "46",
      "It can make a better work environment.\n이 것은 더 나은 업무 환경을 만든다."
    ],
    "combined": false,
    "originalEn": "It can make a better work environment.",
    "originalKo": "이 것은 더 나은 업무 환경을 만든다.",
    "reviewed": true
  },
  {
    "id": "original-p5-47",
    "part": "5",
    "number": "47",
    "title": "47번",
    "en": "They might appear less professional.",
    "ko": "그들은 덜 전문적으로 보일 수 있다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "47",
      "They might appear less professional. 프로페셔널하게 보이지 않을 수 있다"
    ],
    "combined": false,
    "originalEn": "They might appear less professional.",
    "originalKo": "프로페셔널하게 보이지 않을 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-48",
    "part": "5",
    "number": "48",
    "title": "48번",
    "en": "Customers will feel satisfied and remain loyal.",
    "ko": "고객들은 만족감을 느끼고 계속 충성 고객으로 남을 것이다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "48",
      "Customers will feel satisfied and remain loyal.\n고객들은 만족 할 것이고 고객충성도를 유지 할 것이다."
    ],
    "combined": false,
    "originalEn": "Customers will feel satisfied and remain loyal.",
    "originalKo": "고객들은 만족 할 것이고 고객충성도를 유지 할 것이다.",
    "reviewed": true
  },
  {
    "id": "original-p5-49",
    "part": "5",
    "number": "49",
    "title": "49번",
    "en": "It will attract more customers.",
    "ko": "이것은 더 많은 고객을 끌어들일 것이다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "49",
      "It will attract more customers.\n이 것은 더 많은 고객을 끌어 들 일 것이다."
    ],
    "combined": false,
    "originalEn": "It will attract more customers.",
    "originalKo": "이 것은 더 많은 고객을 끌어 들 일 것이다.",
    "reviewed": true
  },
  {
    "id": "original-p5-50",
    "part": "5",
    "number": "50",
    "title": "50번",
    "en": "The business will be more successful.",
    "ko": "업체가 더 성공할 것이다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "50",
      "The business will be more successful. \n업체가 더 성공할 것이다."
    ],
    "combined": false,
    "originalEn": "The business will be more successful.",
    "originalKo": "업체가 더 성공할 것이다.",
    "reviewed": true
  },
  {
    "id": "original-p5-51",
    "part": "5",
    "number": "51",
    "title": "51번",
    "en": "People frequently use [a platform or medium], so advertising there will be very effective.",
    "ko": "사람들이 [플랫폼이나 매체]를 자주 이용하므로 그곳에 광고하면 매우 효과적일 것이다.",
    "page": 4,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "51",
      "People frequently use N so it will be very effective.\n사람들은 N를 자주 이용해서 더 효과적일 것이다."
    ],
    "combined": false,
    "originalEn": "People frequently use N so it will be very effective.",
    "originalKo": "사람들은 N를 자주 이용해서 더 효과적일 것이다.",
    "reviewed": true
  },
  {
    "id": "original-p5-52",
    "part": "5",
    "number": "52",
    "title": "52번",
    "en": "It relieves their stress and helps them relax.",
    "ko": "이것은 그들의 스트레스를 풀어주고 그들은 쉴 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "52",
      " It relieves their stress and they can relax.이것은 그들의 스트레스를  풀어주고 그들은 쉴수있다"
    ],
    "combined": false,
    "originalEn": "It relieves their stress and they can relax.",
    "originalKo": "이것은 그들의 스트레스를  풀어주고 그들은 쉴수있다",
    "reviewed": true
  },
  {
    "id": "original-p5-53",
    "part": "5",
    "number": "53",
    "title": "53번",
    "en": "It is good for their physical and mental health.",
    "ko": "이것은 그들의 신체 건강과 정신 건강에 좋다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "53",
      " It is good for their (physical 신체적/ mental 정신적) health. 이 것은 그들의 건강에 좋다"
    ],
    "combined": false,
    "originalEn": "It is good for their (physical 신체적/ mental 정신적) health.",
    "originalKo": "이 것은 그들의 건강에 좋다",
    "reviewed": true
  },
  {
    "id": "original-p5-54",
    "part": "5",
    "number": "54",
    "title": "54번",
    "en": "It is bad for their health.",
    "ko": "이것은 그들의 건강에 좋지 않다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "54",
      " It is not good for their health\n이것은 그들의 건강에 좋지 않다"
    ],
    "combined": false,
    "originalEn": "It is not good for their health",
    "originalKo": "이것은 그들의 건강에 좋지 않다",
    "reviewed": true
  },
  {
    "id": "original-p5-추가 2",
    "part": "5",
    "number": "추가 2",
    "title": "추가로 알아 두면 좋은 문장",
    "en": "It can help them develop healthy habits. / It can lead to unhealthy habits.",
    "ko": "이것은 그들이 건강한 습관을 기르는 데 도움이 될 수 있다. / 이것은 건강하지 않은 습관으로 이어질 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "※",
      " 추가로 알아 두면 좋은 문장 It can develop healthy habits/ unhealthy habits.\n이것은 건강한/건강하지 않은 습관을 만들 수 있다"
    ],
    "combined": false,
    "originalEn": "It can develop healthy habits/ unhealthy habits.",
    "originalKo": "이것은 건강한/건강하지 않은 습관을 만들 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-55",
    "part": "5",
    "number": "55",
    "title": "55번",
    "en": "It is good for the environment.",
    "ko": "이것은 환경에 좋다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "55",
      "It is good for the environment. 이것은 환경에 좋다"
    ],
    "combined": false,
    "originalEn": "It is good for the environment.",
    "originalKo": "이것은 환경에 좋다",
    "reviewed": true
  },
  {
    "id": "original-p5-56",
    "part": "5",
    "number": "56",
    "title": "56번",
    "en": "Pollution is a serious issue these days.",
    "ko": "환경오염은 요즘 매우 심각한 문제다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "56",
      "Pollution is a serious issue these days. 환경오염은 요즘 매우 심각한 문제다"
    ],
    "combined": false,
    "originalEn": "Pollution is a serious issue these days.",
    "originalKo": "환경오염은 요즘 매우 심각한 문제다",
    "reviewed": true
  },
  {
    "id": "original-p5-57",
    "part": "5",
    "number": "57",
    "title": "57번",
    "en": "It can help create a cleaner environment.",
    "ko": "이것은 더 깨끗한 환경을 만들 수 있다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "57",
      "It can make a cleaner environment. 이 것은 더 깨끗한 환경을 만들 수 있다"
    ],
    "combined": false,
    "originalEn": "It can make a cleaner environment.",
    "originalKo": "이 것은 더 깨끗한 환경을 만들 수 있다",
    "reviewed": true
  },
  {
    "id": "original-p5-58",
    "part": "5",
    "number": "58",
    "title": "58번",
    "en": "We will be able to protect the environment.",
    "ko": "우리는 환경을 보호할 수 있을 것이다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "58",
      "We will be able to protect the environment. 우리는 환경을 보호할 수 있을 것이다"
    ],
    "combined": false,
    "originalEn": "We will be able to protect the environment.",
    "originalKo": "우리는 환경을 보호할 수 있을 것이다",
    "reviewed": true
  },
  {
    "id": "original-p5-59–60",
    "part": "5",
    "number": "59–60",
    "title": "과거 현재 비교 · 공통 틀",
    "en": "Today, people can [present-day activity]. This helps them [present-day benefit]. However, in the past, people had to [past activity], so they [past disadvantage].",
    "ko": "오늘날 사람들은 [현재의 행동]을 할 수 있다. 이것은 그들이 [현재의 이점]을 얻는 데 도움이 된다. 하지만 과거에는 사람들이 [과거의 행동]을 해야 해서 [과거의 불편함]을 겪었다.",
    "page": 5,
    "file": "materials/toeic-original/part5.pdf",
    "rawCells": [
      "59\n60",
      "1) Most of all, 이유 문장  \n2) So, 문제 참고해서 현재 상황 말하기\n3) However in the past, 위의 이유 반대 상황.   \n4)So, 문제 참고해서 과거 상황 말하기 \n참고 할 수 있는 표현 : Thanks to technology / They didn’t have N"
    ],
    "combined": true,
    "originalEn": "1) Most of all, 이유 문장  \n2) So, 문제 참고해서 현재 상황 말하기\n3) However in the past, 위의 이유 반대 상황.   \n4)So, 문제 참고해서 과거 상황 말하기 \n참고 할 수 있는 표현 : Thanks to technology / They didn’t have N",
    "originalKo": "",
    "reviewed": true
  }
];
const TOEIC_SENTENCE_SOURCES = [
  {
    "part": "2",
    "name": "Part_2_만능문장.pdf",
    "file": "materials/toeic-original/part2.pdf",
    "sha256": "f797549b94db90f1f3904c9d986cefb57e96504f20531d28ab44597ffae0ef42"
  },
  {
    "part": "3",
    "name": "Part_3_만능문장_50.pdf",
    "file": "materials/toeic-original/part3.pdf",
    "sha256": "5b0dd582bb79c4aaafc636279075f6bdde2c02fd533374bb42e2bb9d5548e778"
  },
  {
    "part": "5",
    "name": "Part_5_만능문장 (1).pdf",
    "file": "materials/toeic-original/part5.pdf",
    "sha256": "d276954ab96a72ff3fa275a14167d418a90296d6912df92fbdc7f90ff782f65e"
  }
];
const TOEIC_ORIGINAL_PAGES = {
  "2": [
    {
      "page": 1,
      "text": "@mangosuccess\n[시계토끼 제니쌤 Part 2 만능문장]\n1. 이 사진은 공원에서 찍힌 사진이다 This is a picture taken at a park\n2. 이 사진은 사무실에서 찍힌 사진이다 This is a picture taken at an office\n3. 이 사진은 레스토랑에서 찍힌 사진이다 This is a picture taken at a restaurant\n4. 이 사진은 도서관에서 찍힌 사진이다 This is a picture taken at a library\n5. 이 사진은 실내에서 찍힌 사진이다 This is a picture taken indoors\n6. 이 사진은 실외에서 찍힌 사진이다 This is a picture taken outdoors\n7. 이 사진은 실험실에서 찍힌 사진이다 This is a picture taken at a laboratory\n8. 이 사진은 옷 가게에서 찍힌 사진이다 This is a picture taken at a clothing store\n9. 이 사진은 창고에서 찍힌 사진이다 This is a picture taken at a warehouse\n10. 이 사진은 카페에서 찍힌 사진이다 This is a picture taken at a café\n11. 이 사진은 구내 식당에서 찍힌 사진이\nThis is a picture taken at a cafeteria\n다\n12. 이 사진은 길 위에서 찍힌 사진이다 This is a picture taken on a street\nThis is a picture taken at a construction\n13. 이 사진은 공사장에서 찍힌 사진이다\nsite\n14. 이 사진에서 가장 먼저 볼 수 있는 것 The first thing I can see from this picture is\n은 두 명의 여자이다 two women\n15. 이 사진에서 가장 먼저 볼 수 있는 것 The first thing I can see from this picture is\n은 세명의 남자이다 three men\nIn the foreground of the picture,\n16. 사진의 전면에서 나는 책상 위에 올려\nI can see a lot of office supplies on the\n진 많은 사무용품들을 볼 수 있다\ndesk\nIn the middle of the picture, there is a\n17. 사진의 중심에 분수대가 있다\nfountain\nOn the left side of the picture, there is a\n18. 사진의 왼쪽에 인도가 있다\nsidewalk\nOn the right side of the picture, there is a\n19. 사진의 오른쪽에 큰 창문이 있다\nlarge window\n20. 사진의 배경에서 나는 많은 건물들과 In the background of the picture, I can see\n나무들을 볼 수 있다 many buildings and trees\n21. 그녀의 옆에 또 다른 여자가 있다 Next to her, there is another woman.\n22. 그녀의 뒤에 나는 서 있는 두명의 남\nBehind her, I can see two men standing\n성을 볼 수 있다\n23. 그들 중 대부분은 정장을 입고 있다 Most of them are wearing formal clothes\n24. 그들 중 일부는 캐주얼을 입고 있다 Some of them are wearing casual clothes.\n25. 사진을 찍고 있는 남자가 있다 There is a man taking a picture."
    },
    {
      "page": 2,
      "text": "@mangosuccess\n26. 그녀는 가방 안을 들여다 보고 있다 She is looking into a bag\n27. 그는 고객들을 도우고 있다 He is helping customers\n28. 그녀는 강아지를 산책 시키고 있다 She is walking a dog\n29. 그는 무언가를 들고 있다 He is holding something\n30. 그녀는 메뉴판을 보고 있다 She is looking at a menu\n31. 그는 무언가를 쓰고 있다 He is writing something down\n32. 그녀는 서류를 들고 있다 She is holding a document\n33. 그는 무언가를 찾고 있다 He is looking for something\n34. 그녀는 쇼핑백을 들고 있다 She is holding a shopping bag\n35. 그는 물건을 집으려고 손을 뻗고 있다 He is reaching for an item.\n36. 그녀는 스마트폰을 보고있다 She is looking at a smartphone\n37. 그는 물을 마시고 있다 He is drinking some water\n38. 그녀는 요리를 하고 있다 She is cooking\n39. 그는 바닥에 누워있다 He is lying on the ground\n40. 그녀는 유모차를 밀고 있다 She is pushing a baby stroller\n41. 그는 발표를 하고 있다 He is making a presentation.\n42. 그녀는 음식을 고객들에게 서빙 하고\nShe is serving food to customers\n있다\n43. 그는 비닐봉지를 들고 있다 He is holding a plastic bag\n44. 그녀는 종이 한 장을 줍고 있다 She is picking up a piece of paper\n45. 그는 신용카드를 건네 주고 있다 He is handing over a credit card\n46. PC 그는 태블릿 를 사용 하고 있다 He is using a tablet PC.\n47. 그는 옷걸이에 옷을 걸고 있다 He is hanging his clothes on a rack.\n48. 그녀는 컵을 들고 있다 She is holding a cup\n49. 그녀는 핸드백을 들고 있다 She is holding a purse\nHe is putting some food into a\n50. 그는 음식을 전자레인지에 넣고 있다\nmicrowave\n51. 그녀는 음식을 먹고 있다 She is eating some food\n52. 그는 자전거를 타고 있다 He is riding a bicycle.\n53. 그녀는 전화통화를 하고 있다 She is talking on the phone\n54. 그는 자켓을 입고 있다 He is wearing a jacket\n55. 그녀는 핸드백을 어깨위에 매고 있다 She has her purse on her shoulder"
    },
    {
      "page": 3,
      "text": "@mangosuccess\n56. 그는 주문을 받고 있다 He is taking an order\n57. 그녀는 컴퓨터로 일하고 있다 She is working on a computer\n58. 그는 노트북으로 일 하고 있다 He is working on a laptop\nHe is putting something on the bulletin\n59. 그는 게시판에 무언가를 붙이고 있다\nboard\n60. 그는 백팩을 메고 있다 They are wearing backpacks\n61. 그는 보트를 타고 있다 He is riding a boat\n62. 그는 트럭에 박스를 싣고 있다 He is loading a box into a truck\n63. 그는 남색 티셔츠를 입고있다 He is wearing a navy t-shirt\n64. 그는 패딩을 입고 있다 He is weairng a padded jumper\n65. 그는 한 손을 들고 있다 He is raising his hand\n66. 그는 청소기로 청소를 하고 있다 He is cleaning with a vacuum.\n67. 그는 카트를 밀고 있다 He is pushing a cart / carrying a cart\n68. 그는 갈색 코트를 입고 있다 He is wearing a brown coat\n69. 그는 제품을 보고 있다 He is looking at a product\n70. 그는 해변에서 쓰는 의자 위에서 쉬고\nHe is relaxing on a beach chair\n있다\n71. 그들은 계단을 내려오고 있다 They are walking down the stairs\n72. 그들은 계산대에 서있다 They are standing at the cashier\n73. 그들은 공연 하고 있다 They are performing.\n74. 그들은 공연을 관람하고 있다 They are watching the performance.\n75. 그들은 기다리고 있다 They are waiting in line\n76. 그들은 길을 건너고 있다 They are crossing the street\n77. 그들은 길을 걸어가고 있다 They are walking on the street\n78. 그들은 대화를 하고 있다 They are having a conversation\n79. 그들은 문서를 읽고있다 They are reading a document\n80. 그들은 물건을 정리하고 있다\n81. 그들은 발표자의 발표를 듣고있다 They are listening to the presenter\n82. 그들은 벤치에 앉아있다 They are sitting on a bench\n83. 그들은 복사기를 이용하고 있다 They are using a copy machine\n84. 그들은 서로 얘기 하고 있다 They are talking to each other\n85. 그들은 쉬고 있다 They are relaxing\n86. 그들은 악기를 연주하고 있다 They are playing musical instruments"
    },
    {
      "page": 4,
      "text": "@mangosuccess\n87. 그들은 오토바이를 타고 있다 They are riding a motorcycle.\n88. 그들은 유니폼을 입고 있다 They are wearing uniforms\n89. 그들은 일하고 있다 They are working\n90. 그들은 잔디 위에 앉아있다 They are sitting on the grass\n91. 그들은 지하철에 타고 있다 They are getting on the subway\n92. 그들은 카운터에 서있다 They are standing at the counter\n93. 그들은 컴퓨터를 이용하고 있다 They are using computers\n94. 그들은 테이블에 앉아있다 They are sitting at a table\n95. 그들은 해변에서 수영하고 있다 They are swimming at the beach\n96. 그들은 헬멧을 쓰고 있다 They are wearing helmets\n97. 그들은 화상회의를 하고 있다 They are having a video conference.\n98. 그들은 회의를 하고 있다 They are having a meeting\n99. 나는 미소 짓는 여자를 볼 수 있다 There is a woman smiling\n100. 그녀는 화면을 가리키는 중이다 She is pointing at the screen\n101. 그는 박스를 운반 중이다 He is carrying a box\n102. 그녀는 물건을 받고 있다 She is receiving an item\n103. 그들은 파라솔 밑에 앉아있다 They are sitting under the parasol\n104. 그들은 소풍을 하고 있다 They are having a picnic\n105. 그는 노를 젓고 있다 He is paddling a boat\n106. 그녀는 낚시를 하고 있다 She is fishing\n107. 그는 책을 스캔 하고 있다 He is scanning a book\n108. 그들은 책상에 앉아있다 They are sitting at a desk\n109. 그는 벽에 기대고 있다 He is leaning against the wall\n110. 그녀는 곱슬머리를 가지고 있다 She has curly hair.\n111. 그녀는 흰색 바지를 입고 있다 She is wearing white pants\n112. 그녀는 빨간색 스커트를 입고 있다 She is wearing a red skirt\n113. 그녀는 선글라스를 쓰고 있다 She is wearing sunglasses\n114. 그녀는 원피스를 입고 있다 She is wearing a dress\n115. 그녀는 전통의상을 입고 있다 She is wearing traditional clothes\n116. 그녀는 체크무늬 셔츠를 입고 있다 She is wearing a checkered shirt"
    },
    {
      "page": 5,
      "text": "@mangosuccess\n117. 그는 검은색 야구모자를 쓰고 있다 He is wearing a black cap\n118. 그는 금발 머리를 가지고 있다 He has blond hair.\n119. 그는 반바지를 입고 있다 He is wearing shorts\n120. 그는 백발을 가지고있다 He has gray hair.\n121. 그는 손짓, 제스쳐를 취하고 있다 He is gesturing\n122. 그는 스웨터를 입고 있다 He is wearing a sweater\n123. 그는 안경을 쓰고 있다 He is wearing glasses\n124. 그는 작업복을 입고 있다 He is wearing working clothes\n125. 그는 조끼를 입고 있다 He is wearing a vest\n126. 그는 줄무늬 셔츠를 입고 있다 He is wearing a striped shirt\n127. 그는 짧은 머리를 가지고 있다 He has short hair\n128. 그는 청바지를 입고 있다 He is wearing jeans\n129. 제품들이 진열대위에 진열 되어있다 Products are displayed on the shelves\n130. 나는 간판을 볼 수 있다 I can see a signboard\n131. 나는 교통 표지판들과 신호등을 볼 수 I can see a traffic sign and a traffic\n있다 light\n132. 나는 많은 쌓여있는 박스들을 볼 수\nI can see many boxes stacked\n있다\n133. 나는 많은 주차되어진 차들을 볼 수\nI can see a lot of cars parked\n있다\n134. 나는 및몇 보트들을 볼 수 있다 I can see some boats\n135. 나는 벽에 걸려 있는 그림 몇 개를 볼\nI can see some pictures on the wall\n수 있다.\n136. 나는 옷걸이에 걸려있는 옷들을 볼 수 I can see some clothes hanging on a\n있다 rack\n137. 나는 조명들을 볼 수 있다 I can see some lights\n138. 나는 진열 되어진 많은 옷을 볼 수 있\nI can see a lot of clothes on display\n다\n139. 나는 진열되어진 식료품들을 볼 수 있\nI can see groceries on display\n다\nI can see many books on the\n140. 나는 책장에 많은 책들을 볼 수 있다\nbookshelves\n141. 컴퓨터 모니터가 있다 There is a computer monitor\n142. 화이트 보드가 있다 There is a whiteboard\n143. 노점상이 있다 There is a street vendor\n144. 가로등이 있다 There is a street light\n145. 물품들이 선반위에 정리되어있다 Items are arranged on the shelves\n146. 전반적으로 그들은 바쁜 것 같다 Overall, it seems like they are busy\nOverall, it seems like a busy day in a\n147. 전반적으로 도시의 분주한 날 같다\ncity\n148. 전반적으로 아름다운 화창한 날씨 인 Overall, it seems like a beautiful sunny\n것 같다 day\n149. 전반적으로 평화로운 날 같다 Overall, it seems like a peaceful day"
    }
  ],
  "3": [
    {
      "page": 1,
      "text": "시계토끼 제니쌤 파트3 만능문장 50\n참고 영상\n토익스피킹 템플릿 만능문장 50개 \n영어회화까지 15분만에 끝내자 \n[PART3편]\nhttps://youtu.be/tdGCKI48Sjk\nIt relieves my stress. I’m stressed out these days. So, I need this.\n1. 스트레스 이 것은 나의 스트레스를 풀어 준다. 나는 요즘 스트레스를 많이 받았다 \n그래서 이것이 필요하다\nIt’s cheaper, so I can save money.\n2. 돈 절약\n이 것은 더 싸서 돈을 절약 할 수 있다\nThe price is reasonable.\n3. 가격\n가격이 저렴하다.\nIt’s faster, so I can save time.\n4. 시간 절약\n이 것은 더 빨라서 시간을 절약 할 수 있다.\nI can get a lot of useful information from my friends\n5. 유용한 정보1\n나는 친구들에게 많은 유용한 정보를 얻을 수 있다\nI can get a lot of useful information from books\n6. 유용한 정보 2\n나는 친구들에게 많은 유용한 정보를 얻을 수 있다\nI can get a lot of useful information on the Internet.\n7. 유용한 정보 3\n나는 인터넷에서 많은 유용한 정보를 얻을 수 있다.\nIt’s more reliable, so the information is more trustworthy.\n8. 믿을 만한 정보\n이 것은 더 믿을 만 해서 정보가 더 신뢰가 간다 \nI can get information anytime anywhere on my smartphone.\n9. 언제 어디서나\n나는 정보를 언제 어디서나 내 스마트 폰으로 얻을 수 있다\nIt is more personal, and builds a closer relationship.\n10. 대면 장점1\n이 것은 더 개인적이고 더 밀접한 인간관계를 쌓을 수 있다.\nIt causes less misunderstanding.\n11. 대면장점 2\n이 것은 오해를 덜 불러 일으킨다.\nIt’s my favorite thing to do.\n12. 좋아하는 일\n이 것은 내가 가장 좋아하는 일이다.\n   시계토끼 제니쌤‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n  Copyright 2021. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다. 무단복제, 재사용을 \n금합니다 "
    },
    {
      "page": 2,
      "text": "It makes me happy, and I can forget about my worries. \n13. 행복\n이 것은 나를 행복하게 해주고, 나는 걱정 근심을 잊을 수 있다.\nIt has great facilities. \n14. 좋은 시설\n이 것은 좋은 시설을 가지고 있다.\nIt’s a well-liked place so people love it.\n15. 핫플레이스\n이 곳은 인기 있는 곳이라, 사람들이 좋아한다.\nI’m a student so my budget is tight.\n16. 예산 부족1\n나는 학생이라 예산이 빠듯하다.\nI can’t afford to buy expensive things.\n17. 예산 부족2\n나는 비싼 것을 살 여유가 없다. \nI don’t want to waste too much money on that.\n18. 돈 낭비1\n나는 그것에 지나치게 많은 돈을 쓰고 싶지 않다.\nIt’s a waste of money.\n19. 돈 낭비2\n이 것은 돈 낭비다.\nI’m a student and I’m so busy with my school work. \n20. 시간 부족 1\n나는 학생이다 그래서 학업에 바쁘다.\nI don’t have much time\n21. 시간부족 2\n나는 시간이 많이 없다.\nI don’t want to waste too much time on that.\n22. 시간 부족3\n나는 그것에 지나치게 많은 시간을 낭비하기 싫다\nIt’s a waste of time.\n23. 시간낭비\n이 것은 시간 낭비다\nIt’s more fun and entertaining, so I don’t get bored\n24. 재미\n이 것은 더 재밌고 즐거움을 주는 일이다. 그래서 나는 지루해지지 않는다\nI think it’s more fun to do things in a group\n25. 같이 1\n나는 같이 하는 것이 더 재미있다고 생각한다\nI can meet new people and make friends. \n26. 같이 2\n나는 새로운 사람을 만날 수 있고 친구를 만들 수 있다.\nI feel more comfortable and I can focus better.\n27. 혼자 1\n나는 더 편안함을 느끼고 더 잘 집중 할 수 있다.\n   시계토끼 제니쌤‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n  Copyright 2021. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다. 무단복제, 재사용을 \n금합니다 "
    },
    {
      "page": 3,
      "text": "I don’t have to waste time waiting for other people.\n28. 혼자 2\n나는 다른 사람들을 기다리느라 시간을 낭비 할 필요가 없다\nI feel more comfortable at home.\n29. 집 1\n나는 집에서 더 편안함을 느낀다\nI can save time because I don’t have to waste time going out. \n30.  집 2 나는 시간을 절약 할 수 있다 왜냐하면 나는 밖에 나가느라 시간을 낭비 할 \n필요가 없기 때문이다.\nThey are too old so I think it’s good to have new ones.\n31. 새로운 것1\n그 것들은 너무 오래 되어서 새로운 것이 생기면 좋을 것 같다\nThey are too outdated so I think it’s good to have new ones.\n32. 새로운 것 2\n그 것들은 너무 구식이어서 새로운 것이 있으면 더 나을 것 같다 \nIf we have more stores here, it would be more convenient. \n33. 새로운 것 3\n여기에 더 많은 가게가 있다면, 더 편리할 것이다\nIt’s very necessary for me \n34. 필요1\n이 것은 나에게 매우 필요 한 것이다.\nI frequently use it. \n35. 필요 2\n나는 그 것을 자주 이용한다\nIt makes me happy and I can have a great experience. \n36. 좋은 경험1\n이 것은 나를 행복하게 해주고, 나는 좋은 경험을 할 수 있다\nThey provide a happy environment and a pleasant experience.\n37. 좋은 경험 2\n그들은 행복한 분위기와 기분 좋은 경험을 제공한다\nIt’s more reliable and I can trust the product \n38. 믿을 만한 제품\n이 것은 더 믿을 만 해서 나는 그 제품을 신뢰 할 수 있다 \nIt’s a popular item so people will love it. \n39. 인기있는 것\n이 것은 인기있는 아이템인지라 사람들이 좋아 할 것이다\nIt has sentimental value. \n40. 선물1\n이 것은 의미가 깊다\nI like to try new things\n41. 도전\n나는 새로운 것을 시도 해 보는 것을 좋아한다\nIt’s a good gift\n42. 선물2\n이 것은 좋은 선물이다\n   시계토끼 제니쌤‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n  Copyright 2021. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다. 무단복제, 재사용을 \n금합니다 "
    },
    {
      "page": 4,
      "text": "It’s part of my routine. \n43. 루틴 1\n이 것은 내 일상의 일부이다\nIt’s my habit \n44. 루틴2\n이 것은 내 습관이다\nI really liked it\n45. 좋아한다1\n난 그 것이 정말 좋았었다\nIt was great \n46. 좋아한다2\n그 것은 훌륭했다\nIt was awesome\n47. 좋아한다 3\n그 것은 매우 근사했다\nIt’s cheaper and faster \n48. 장점1\n이 것은 더 싸고 빠르다\nIt’s very convenient and useful\n49. 장점2\n이 것은 매우 편리하고 유용하다\nIt’s very helpful for me\n50. 장점3\n이 것은 나에게 매우 도움이 된다.\n   시계토끼 제니쌤‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n  Copyright 2021. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다. 무단복제, 재사용을 \n금합니다 "
    }
  ],
  "5": [
    {
      "page": 1,
      "text": "시계토끼 제니쌤 파트5 만능문장\n(개정 전 파트6)\n참고 영상\n토익스피킹  Part6  만능답변  템플릿  문장  반복재생 \n[2021년 최신 버전]\nhttps://youtu.be/P43wDlScjIs\n*  영상  제목은  ‘토익스피킹  파트5  만능  문장’으로  제\n목과  썸네일이추후  변경될  수  있습니다.  QR코드와  링\n크는 그대로 유지 됩니다.\n① 경험 & 교육\n1 They can learn new things. 그들은 새로운 것들을 배울 수 있다\nThey can meet new people and expand their network. \n2\n그들은 새로운 사람을 만나고 인맥을 넓힐 수 있다\nThey can have a lot of (new) experience and broaden their perspective.\n3\n그들은 많은 것을 경험하고 그들의 견문을 넓힐 수 있다\nThey can’t make good decisions because they are not mature enough \n4\n그들은 좋은 결정을 하지 못하는데 왜냐하면 그들은 아직 충분히 성숙하지 못했기 때문이다.\n어휘 Expand: 넓히다 network: 인맥 Perspective: 견문, 시야 Mature 성숙하다\n② 집중\n5 They will be distracted. 그들은 집중을 못하게 될 것이다 \n6 They can’t focus on their studies/ work. 그들은 그들의 학업/업무에 집중 할 수 없다 \n7 They can’t get good grades at school 그들은 학교에서 좋은 성적을 받을 수 없다 \n8 They will fall behind in class 그들은 학업이 뒤쳐질 것이다 \n9 They can’t work efficiently 그들은 효율적으로 일 할 수 없다 \n어휘 Distracted: 집중이 분산된  Focus 집중하다 Grades: 성적 Fall behind : 뒤쳐지다 Efficiently : 효율적으로\n③ 돈\n1. 절약/ 돈의 중요성\n10 They can save money 그들은 돈을 절약 할 수 있다\n11 The cost of living is too high. 생활비가 너무 비싸다\n12 They can’t make a living. 그들은 먹고 살기가 힘들다\n13 I can get a high(er) salary 나는 (더) 높은 급여를 받을 수 있다\n    시계토끼 제니쌤 ‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n       Copyright 2022. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다 무단복제, 재사용을 금합니다 "
    },
    {
      "page": 2,
      "text": "2. 돈의 쓰임\n14 The cost of N is too expensive. 명사의 가격이 너무 비싸다\n15 It’s a waste of money 이 것은 돈 낭비다\nThat’s a good investment because it makes lives better. \n16\n그것은 좋은 투자인데 왜냐하면 삶을 더 낫게 만들어준다\n어휘  Make a living: 먹고 살다, 생계를 꾸려나가다  the cost of living: 생활비  Salary 급여 Investment: 투자 \n lives: life(삶)의 복수형\n④ 혼자 vs 같이 (사람 적은 곳 vs 많은 곳) \n17 They can focus better. 그들은 더 잘 집중 할 수 있다\n18 They will not be distracted by others. 그들은 다른 사람들에게 방해 받지 않을 것이다.\n19 They can set their own schedule. 그들은 그들의 스케쥴을 정할 수 있다.\n20 They can have more freedom. 그들은 더 자유로울 수 있다\n21 They feel more comfortable. 그들은 더 편안함을 느낀다. \n22 It’s fun and entertaining. 이 것은 재밌고 즐거움을 준다.\nThey can get information and share it with other people \n23\n그들은 정보를 얻고 다른 사람 과 공유할 수 있다\n24 It feels more like a family. 더 가족 처럼 느껴진다\n어휘 focus: 집중하다 distract: 집중을 분산 시키다 own: ~ 만의 share: 공유하다 set: 정하\n⑤ 기술\n1. 기술 장점\nThey can get a lot of useful information/ latest information on the Internet \n25\n그들은 많은 유용한 정보/최신정보를 얻을 수 있다\nThey can 동사 anytime anywhere on their smartphones.\n그들은 언제 어디서나 그들의 스마트 폰으로 동사 할 수 있다\n26 동사 자리에는 무엇이든 들어 갈 수 있다 \nex) They can communicate with their friends anytime anywhere on their smartphones.\n그들은 스마트 폰으로 언제 어디서나 친구들과 소통 할 수 있다.\nIt’s faster and convenient.\n27\n이 것은 더 빠르고 편리하다\n어휘 latest information: 최신정보  anytime anywhere: 언제 어디서나 (anywhere anytime도 가능하다)\n    시계토끼 제니쌤 ‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n       Copyright 2022. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다 무단복제, 재사용을 금합니다 "
    },
    {
      "page": 3,
      "text": "2. 기술 단점\nThere is a lot of inaccurate information on the Internet so it’s not reliable 인터넷에는 많은 부정확한 정보가 있어서 \n28\n믿을 만 하지가 않다\n It is very distracting for S so S can’t focus on their studies/ work.\n29\n이 것은 학생들에게 매우 집중을 분산 시키는 것이라 학생들은 공부에 집중 할 수 없다\nIt’s a waste of money\n30\n돈 낭비다\nIt’s too expensive\n31\n너무 지나치게 비싸다\n어휘 inaccurate: 부정확한 reliable: 믿을만한\n3. 아날로그 장점\n32 I can get responses right away 나는 즉각적인 답변을 받을 수 있다\n I can understand the feeling of the speaker more accurately\n33\n나는 화자의 감정을 더 정확하게 이해할 수 있다\nResponses: 답변 right away: 즉시 Speaker: 말하는 사람, 화자 accurately: 정확하게\n⑥ 특징 \n1. 타인과 잘 지내는 능력\n1) 타인과 잘 지내는 능력의 예시: social skills (사회성)/ communication skills (소통능력)/ a good sense of humor (유머 감각) / \nability to solve conflicts (갈등 해결 능력)/ being friendly (친근함)등\n2) 타인과 잘 지내는 능력 공식을 적용할 수 있는 문제 예시:\n 동의/비동의 Business leaders should have social skills 비지니스 리더는 사회성이 있어야 한다.\n34 They can make a friendly (work) atmosphere 그들은 좋은 (업무) 분위기를 만들 수 있다\n35 They can communicate with others better 그들은 다른 사람들과 더 잘 소통 할 수 있다\nThey can be good team players and make good relationships with others \n36\n그들은 좋은 팀플레이어가 될 수 있고, 다른 사람들과 좋은 관계를 맺을 수 있다\n어휘 Friendly: 우호적인, 좋은, 친근한 atmosphere: 분위기 Communicate with: ~와 소통하다 relationship: 관계 \n2. 좋은 성품과 성격\n1) 좋은 성품과 성격의 예시 patience (인내심)/ confidence (자신감)/ positive (긍정적인) /passion (열정)/\n                         hardworking (근면함) /honesty(정직함)/ perseverance(끈기)\n2) 좋은 성품과 성격 공식을 적용할 수 있는 문제 예시: \n   좋은 선생님은 열정이 있어야 한다.\n   유명인사들(celebrities)은 10대의 좋은 롤모델 (role model)이 될 수 있다\n37 They can have a good reputation 그들은 좋은 평판을 가질 수 있다 \n38 They can be very influential 그들은 매우 영향력 있을 수 있다\n39 They can motivate others. 그들은 다른 사람들을 동기 부여 해줄 수 있다 \n어휘: friendly: 우호적인, 좋은 reputation: 평판 influential: 영향력있는 motivate: 동기 부여 하다\n    시계토끼 제니쌤 ‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n       Copyright 2022. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다 무단복제, 재사용을 금합니다 "
    },
    {
      "page": 4,
      "text": "3. 지식 / 능력 / 재능 \n 1) 지식/ 능력/ 재능의 예시: smart (똑똑한)/ knowledge (지식) /experience (경험) /math skills(수학 능력) \nproblem-solving skills (문제 해결 능력)/ creativity (창의성)/ talent (재능)/ organizational skills(정리, 계획하는능력)\n 2) 적용할 수 있는 문제 예시: 학생들은 creativity(창의성)을 갖추어야 한다\n40 Everything is always changing and there is a lot of competition 모든 것이 급변하고 경쟁이 치열하다\n41 They face a lot of challenges and difficulties 그들은 많은 도전과 어려움을 직면하게 된다\nHe is able to handle a variety of situation due to his N \n42\n그는 그의 창의력 덕택에 다양한 상황을 잘 처리 할 수 있다\n어휘: competition: 경쟁 face: 직면하다 challenge: 도전 handle: 다루다, 처리하다 challenges: 도전, 어려운일 due to N: N 때문에\n     a variety of: 다양한 \n4. 조언 구하기 \n43 They have a lot of experience/ knowledge 그들은 많은 경험/지식을 가지고 있다\n※ 추가로 알아두면 좋은 문장: They can give me some good advice 그들은 좋은 조언을 해 줄 수 있다.\n⑦ 업무 환경 & 기업 성공 \n1. 업무환경\nEmployees can work more efficiently and productively.\n44\n직원들은 더 효율적 생산적으로 일할 수 있다.\nEmployees can be more satisfied with their jobs.\n45\n직원들은 그들의 직장에 더 만족 할 수 있다.\nIt can make a better work environment.\n46\n이 것은 더 나은 업무 환경을 만든다.\n47 They might appear less professional. 프로페셔널하게 보이지 않을 수 있다\n어휘  employee:  직원  efficiently:  효율적으로  productively:  생산적으로  satisfied:  만족한  environment:  환경  appear:  보이다 \nprofessional: 프로페셔널한\n2. 기업 성공\nCustomers will feel satisfied and remain loyal.\n48\n고객들은 만족 할 것이고 고객충성도를 유지 할 것이다.\nIt will attract more customers.\n49\n이 것은 더 많은 고객을 끌어 들 일 것이다.\nThe business will be more successful. \n50\n업체가 더 성공할 것이다.\n어휘 Remain: 남다 loyal: 충성도 있는 Attract: 끌어들이다 Business: 업체, 사업체\n3. 효과적인 광고\nPeople frequently use N so it will be very effective.\n51\n사람들은 N를 자주 이용해서 더 효과적일 것이다.\n    시계토끼 제니쌤 ‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n       Copyright 2022. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다 무단복제, 재사용을 금합니다 "
    },
    {
      "page": 5,
      "text": "⑧ 스트레스& 건강\n52  It relieves their stress and they can relax.이것은 그들의 스트레스를  풀어주고 그들은 쉴수있다\n53  It is good for their (physical 신체적/ mental 정신적) health. 이 것은 그들의 건강에 좋다\n It is not good for their health\n54\n이것은 그들의 건강에 좋지 않다\n 추가로 알아 두면 좋은 문장 It can develop healthy habits/ unhealthy habits.\n※\n이것은 건강한/건강하지 않은 습관을 만들 수 있다\n어휘 Relieve: 완화하다 relax: 쉬다 Develop: 발전 시키다 healthy 건강한 <-> unhealthy: 건강하지 않은\n⑨ 환경\n55 It is good for the environment. 이것은 환경에 좋다\n56 Pollution is a serious issue these days. 환경오염은 요즘 매우 심각한 문제다\n57 It can make a cleaner environment. 이 것은 더 깨끗한 환경을 만들 수 있다\n58 We will be able to protect the environment. 우리는 환경을 보호할 수 있을 것이다\n어휘 environment: 환경 pollution: 오염 issue: 문제 will be able to: can의 미래형 protect: 보호하다\n⑩ 과거 현재 비교\n1) Most of all, 이유 문장  \n2) So, 문제 참고해서 현재 상황 말하기\n59\n3) However in the past, 위의 이유 반대 상황.   \n60\n4)So, 문제 참고해서 과거 상황 말하기 \n참고 할 수 있는 표현 : Thanks to technology / They didn’t have N\n    시계토끼 제니쌤 ‘7일만에 한권으로 끝내는 토익스피킹’  구매처 : https://linktr.ee/jennycha_english\n       Copyright 2022. (Youtube 시계토끼제니쌤) all rights reserved. 이 자료의 모든 저작권은 Youtube 시계토끼제니쌤에게 있습니다 무단복제, 재사용을 금합니다 "
    }
  ]
};
