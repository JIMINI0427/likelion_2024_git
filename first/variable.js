//1. Use strict

'use strict';

//2. Variable
// let함수로 변수 선언(mutable data type 선언)
//{}이런 블록 안에서 선언된 변수는 블록 밖에서 호출 불가 
//블록과 관계없이 광범위하게 적용되는 변수:globalName
//var 변수 선언은 절대 사용 금지! 자바에선 let만 기억!


let globalName = 'global name';

{
let name = 'jimin';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}

console.log(name); //실행 안됨~
console.log(globalName);

//3. Constants
//immutable(값이 변경되지 않는) data type 선언

//4. Variable types
//1) primitive/single type: number,  string, boolean, null
//2)object(symbol)
//3)function

//Number **infinity, -infinity, not A number(nAn)

const infinity =1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

console.log(infinity);


//String
// ${} 이 달러기호를 사용할 땐 따옴표''가 아닌 백틱 ``을 사용해야 작동함!!!

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; 

console.log(`value: ${helloBob}, type: ${typeof helloBob} `);

console.log(helloBob);


//Boolean
// false:0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3< 1; //false

console.log(`value: ${canRead}, type: ${typeof canRead}`);

//null(null은 변수에 값이 없이 텅텅 비어있다고 선언한 것!)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined(undefined는 일단 변수를 선언하긴 했는데 값이 무엇인지, 텅텅 비었는지 등 아무것도 할당하지 않은 것)
let x = undefined ; //혹은 그냥 let x 만 적어도 얜 undefined
console.log(`value: ${x}, type: ${typeof x}`)

//symbol : create 고유한 식별자 for objects

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2);// false(스트링이 같아도 symbol은 고유한 식별자 이기 때문에 두 심볼은 같지 않다.)

const gSymbol1 = Symbol.for('id'); //Symbol.for()은 주어진 string에 대한 심볼을 만들라고 명령하는 것이다.
const gSymbol2 = Symbol.for('id');

console.log(gSymbol1 === gSymbol2 ); true // 이전 경우와 달리 같은 string에 대하여 심볼을 제작해달라고 프로그램에 맡겼으니, 얜 자동으로 같은 문자에 대하여 하나의 식별자르 만든 것이다.

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // 심볼 출력할 땐 .description 사용

//object  : data structure ( ref에 data를 가두고 그 안에 변수를 또 생성)

const ellie = { name: 'ellie', age: '21'}; // ellie는 고정 nut name과 age는 mutable data!

console.log(ellie.age); //21

//5. Dynamic typing : dynamically typed language ==>typescript 등장

let text = 'hello'
console.log(`value : ${text}, type: ${typeof text}`); // value: hello , type: string

text=1;
console.log(`value : ${text}, type: ${typeof text}`); // value: 1 , type: number



