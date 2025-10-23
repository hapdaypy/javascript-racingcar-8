# javascript-racingcar-precours

[] 0. 문자열로 이름 입력 받기 / 정수로 시도횟수 입력받기
NameString에 입력받은 문자열 저장

[] 1. 문자열 입력 받아 이름 별로 나누기

input : 참가자 이름의 문자열
output : 참가자 수와 이름으로 이루어진 2차원 배열, 참가자 수

2차원 배열 MemberName에 ',' 또는 for문 종료 전까지 1차원 배열의 2차원에 NameString의 문자를 하나씩 삽입한다. MemberName에서 문자를 삽입할 땐 0부터 시작하는 NameSize 변수를 이용해서 알파벳이 나올 때 마다 하나씩 증가시켜 알파벳이 5가 넘어가는지 확인한다. 
만일 NameSize가 5를 넘어간다면, ERROR 로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션을 종료한다.

해당 함수는 for 문을 사용한다.
for 문은 0부터 NameString의 크기 - 1 까지 실행하도록 범위를 설정한다.
for 문에 i 요소로 NameString 의 인덱스 값을 하나씩 확인하여 알파벳 문자와 특수한 문자(,)를 구분하여 MenberName을 설정한다.

,가 나왔을 땐, 배열의 1차원에 들어갈 인덱스 값을 하나 증가시켜주고 글자수가 5개를 넘어가는지 확인하는 변수를 다시 0으로 초기화 시켜준다.

for 문이 종료되었을 경우 MemberName의 1차원 배열의 크기를 반환한다.



[] 2. MeberRacingRankin 2차원 배열 생성
MeberRacingRankin을 이용해서 1차원에 각 member의 이름을 저장하고 2차원에는 현재 -의 길이를 저장할 공간을 마련한다.
Q. 저장공간을 마련은 어떻게 할까 ? 


[]3. 차수별 Racing 진행
이중 for 문을 이용해서 Racing 을 진행하고 결과를 저장한다. 

첫번째 for문은 i = 0 부터 시도할 횟수-1 까지 진행한다.(총 k번) k 번을 진행하는 이유는 총 시도 횟수가 k 이기 때문이다.
두번째 for문은 j = 0 부터 member 수-1 까지 진행한다.(총 인원수) MeberRacingRankin의 1차원이 0부터 n까지라고  MakeRandomVariable 값이 4이상이라면 MeberRacingRanKing의 2차원 배열에 - 를 추가해준다. 이때 j가 1의 크기가 증가되어 그 다음 2번째 사람을 호출하여 첫번째와 같이 전진 여부를 판별할 수 있다. 

[]3-1MakeRandomVariable로 무작위 값을 생성
MakeRandomVariable 함수가 호출된다면, 0에서 9사이에서 무작위 값을 반환한다. 

[] 최대 -를 찾기
input MeberRacingRanking
output MaxValue

MemberRacingRanking의 2차원 배열을 의 문자열 크기를 비교해서 최대 길이를 반환한다. 

[] 출력하기
FindMax를 통해 반환된 값과 MemberRacingRanking의 2차원과 값이 같다면 
느낀점 : 구조체를 알고 있었더라면 더 깔끔하고 간결한 코딩을 할 수 있었을 것이라는 생각을 한다.
