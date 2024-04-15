//1. String concatenation

console.log('my' + ' cat'); //my cat
console.log('1' + 2); // 12
console.log(`string literals:

''''
1+2 = ${1 + 2}
`); //백틱을 사용하면, 줄바꿈을 그냥 엔터 친 그대로 편하게 실행할 수 있다.

//원래 줄바꿈을 하려면 \n 기호를 사용해야 한다. +)tab은 \t 기호 사용

console.log("jimin's \n book");


 //2.Numeric operator

 console.log(1+1);//더하기
 console.log(1-1);//빼기
 console.log(1/1);//나누기
 console.log(1*1);//곱하기
 console.log(5%2);//나머지
 console.log(2**3);//거듭제곱

 //3.Increment and decrement operators

 let counter =2;
 const preIncrement = ++counter;
 //counter = counter +1 ;
 //preIncrement = counter; (counter 변수에 먼저 더하고 그 후 preIncrement에 값 부여)

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
//preIncrement: 3, counter: 3

const postIncrement = counter ++;
//postIncrement = counter;
//counter = counter +1 ; (postIncrement에 먼저 counter 값 부여하고 그 후에 counter 변수에 더하기)

console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//postIncrement: 3, counter: 4

//postDecrement와 preDecrement도 동일

//4. Assingment operators (할당하는 것)

let x =3;
let y =7;

x +=y; //x=x+y

//5.Comparison operators

console.log(3*4 > 12/4); // true

//6. Logical operators: || (or), && (and), !(not) 
// ||은 하나만 true여도 true
// &&은 전부다 true여야 ture
// !은 값을 반대로 바꿔준다
const value1 = true;

console.log(!value1); //false

//7. Equality

const stringFive = '5';
const numberFive = 5;

// == (loose equality): type은 no 상관 (부정은 !=)
console.log(stringFive == numberFive); //true
console.log(stringFive !=numberFive); //false

// === (strict equality): type 상관함
console.log(stringFive === numberFive);//false
console.log(stringFive !== numberFive);//ture

// object equality by reference
const jimin1 = {name: 'jimin'};
const jimin2 = {name: 'jimin'};
const jimin3 = jimin1

console.log(jimin1==jimin2); //false
console.log(jimin1 === jimin2); //false
console.log(jimin1===jimin3); //true

//equality 헷갈리는 것들

console.log( 0 == false) ; //true
console.log(0 === false);  //false
console.log('' == false); // true
console.log('' === false); // false 
console.log(null == undefined);  //true
console.log(null === undefined);  //false



// 8. conditional operators: if

const name = 'mozza';
if (name === 'jimin') {
    console.log('Welcome precious');
} else if(name === 'coder'){
    console.log('Hi! you are the best!');
} else{
    console.log('Welcome! Are you sleepy?');
}


//9. Ternary ooperator: ? (if처럼 긴 구문이 아니지만 같은 기능을 수행)
//형식 < condition ? value1 : value2 ;  >

console.log(name === 'mozza' ? 'yes': 'nope') ;

// 10.Switch statement
// if 문법이랑 똑같이 작동하지만 else elif else if 등 구별 문법이 필요 없어서 가독성이 좋다.

const browser = 'JM';

switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'jimin':
    case 'smart godgi':
        console.log('LOVE YOU');
        break;
    default:
        console.log('부질없어!');
        break;
    }

// 11. Loops
// while문 : 조건 확인 후 루프 작동
let i =3;
while(i>0){
    console.log(`while : ${i}`);
    i--;
}
// do while문 : 루프 작동 후 조건 확인
do{
    console.log(`do while: ${i}`);
    i--;
} while(i>0);

// for문
//for(begin; condition; step) 
//begin 자리에 let으로 지역변수 선언도 가능

for (i = 3; i>0 ; i--){
    console.log(`for: ${i}`);
}

// nested loops
//i=0 일 때, j :0~9 ,, i=1일 때, j : 0~9 등등
for(let i= 0; i<10 ; i++){
    for(let j=0; j<9 ; j++)
    console.log(`i: ${i}, j: ${j}`);
}