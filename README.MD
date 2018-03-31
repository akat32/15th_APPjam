# Team : 고졸 미필 백수 트수
2018 15th Appjam

## API Document

* POST /auth/group : Make New Group

> Params

    D_day : 시험 종료일 (yyyy-mm-dd-hh-mm)[String]

> Response

    HTTP 200 : { id : group_id};

* POST /auth/solo : Make New solo

> Params

    D_day : 시험 종료일 (yyyy-mm-dd-hh-mm)[String]

> Response

    HTTP 200 : { id : group_id};


* POST /input/groupM : 그룹에 객관식 문제를 추가

> Params

    group_id : group's id

    subject : 문제의 분야

    question : 문제 그 자체

    anwser : 정답

    name : 출제자

    example1 ~ example5 : 1번보기 ~ 5번보기

> Response

    HTTP 200 : "success"

* POST /input/groupS : 그룹에 주관식 문제를 추가

> Params

    group_id : group's id

    subject : 문제의 분야

    question : 문제 그 자체

    anwser : 정답

    name : 출제자

> Response

    HTTP 200 : "success"

* POST /input/soloM : 솔로에 객관식 문제를 추가

> Params

    group_id : group's id

    subject : 문제의 분야

    question : 문제 그 자체

    anwser : 정답

    example1 ~ example5 : 1번보기 ~ 5번보기

> Response

    HTTP 200 : "success"

* POST /input/soloS : 솔로에 주관식 문제를 추가

> Params

    group_id : group's id

    subject : 문제의 분야

    question : 문제 그 자체

    anwser : 정답

> Response

    HTTP 200 : "success"
