//1. Function declaration
//function name(param1, param2) {body...return;}
//function 은 object

function print(message) {
    console.log(message);

}

print('mozza');

//2. Parmeters
//premitive parameters: passed by value
//object parameters: passed by reference

function change(obj) {
    obj.name = 'jjimin';
}
const ellie = {name: 'ellie'};
change(ellie);
console.log(ellie);

//3. Default parameters
//parameter 여러개 사용가능하고, 함수 사용시 지정되지 않은 parameter는 기본 parameter값을 따르거나, 기본값도 없다면 undefined로 표시된다.

function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}

showMessage('Hello.');


//4. Rest parameters
// ...args : 배열을 한다는 뜻
//밑에 세개는 모두 같은 결과값. 근데 밑으로 갈수록 more simple

function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));

}

printAll('dream','sleeping','Thai');


// 5. Callback function
function randomQuiz(answer, pintYes, pintNo) {
    if(answer=== 'love'){
        pintYes();
    } else { 
        pintNo();
    }
}

// anonymous function
const pintYes = function(){
    console.log('yes!');
};

// named function
const pintNo = function print(){
    console.log('no!');
};

randomQuiz('love', pintYes, pintNo);
randomQuiz('jimin',pintYes,pintNo);


//6. Arrow function
//항상 anonymous function
const simplify = function (){
    console.log('simple things!');
};
// 이거랑 같은 것을 arrow function으로 훨씬 쉽게 가능!

const simple = () => console.log('simple things!');
