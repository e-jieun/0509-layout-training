// 1. let a = 0;
// 변수 a는 숫자값 0이 되어있다.
// 일정 시간이 지나면 숫자가 1씩 증가한다. => setInterval();을 쓰면 될 것 같은데가 정상, 시도 한번 해보자, 한번에 안 써져
// 2. 숫자가 10이 되면 증가하는 것이 멈춘다.

let a = 0;
// a++;

console.log(a);

// 증가시키는 거, 주기적으로 실행하는 것 쪼개서 생각하기

/* 프로그래밍 잘하는 방법
1. 한번에 하나만 생각
1-1. 증가시키는 것
1-2. 반복주기 -> 기능
1-3. 짧게 써서 잘 되나 확인하기 */
// 주기적으로 실행하는 방법 = setInterval();
let test = setInterval(function(){
  a++;  //breakpoint
  console.log(a);
  if(a === 10){
    console.log('hello');
    a = 0;
    // 옮겨가면서 체크
    // clearInterval(test);
    console.log(a);
  }
}, 100);

/* 디버깅할 때는 에디터의 정식 디버깅 기능을 사용할 때 .json이라는 확장자의 파일이 생성됨
=> 실행방식을 데이터에 담아놓은 무언가
1. 지워도 상관없음 -> 다시 만들래가 뜬다
json => !js object notation: 자바스크립트의 객체 방식으로 표기하겠습니다
백엔드 + API를 다룰 때 많이 사용 -> 데이터 통신방식의 확장자 중 하나 */