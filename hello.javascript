java->데이타베이스->javascript->spring

2003090019682 

자바공부 시작

casting(형변환)----

double b2 = (double) 1;
(형) 숫자; 상태일 때 숫자를 형에 맞게 변형 시킨다.
->1을 double로 변환

String f = Integer.toString(1);
문자열 f는 숫자 1을 문자열로 변환시킨것이다.

System.out.println(f.getClass());
출력문으로 출력함

불----
int base = 180;
int height = 185;
boolean isTall = height > base;

if (isTall) {
    System.out.println("키가 큽니다.");
}

은 위와 같은 구조로 이어져있다.
boolean 변수명 = 값1 > 값2;

if(변수명) {
    System.out.println("키가 큽니다.");
}

boolean과 변수명이 어떤 형식으로 조건문을 만들고 출력을 하는지 알면 된다.
















css 정리

<style>
    a {
      color: black;
    }
</style>

<style></style>: css 스타일을 정의할 때 필요함.

a{}: a선택자라고 불리며 하이퍼링크를 나타냄

color:택스트의 색상을 변경함

text-decoration: none; : 밑줄을 없앨 수 있음.
ex) 
<style>
    a {
      color: black;
      text-decoration: none;
    }
</style>

h1 {
  
}

박스모델 전까지만 css 공부함.

자바스크립트-
자바스크립트는 함수랑 객체 위주로 공부하고
배열,반복문을 감 정도 익히면 될 듯

let name = 'egoing';
alert("ajfqidf, " + name + " adfsafdikjo, " + name);

//여기서 " + name + "은 let 함수에 있는 값을 옮겨버린다.
즉 출력값은 ajfqidf, egoing adfsafdikjo, egoing 이렇게 뜬다.

웹브라우저 제어 공부하고 
조건문부터 쭉 공부할 것

&lt는 html에서 부등호(<)다


