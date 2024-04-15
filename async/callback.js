'use strict';

//1. Callback 함수
// 함수 안에서 함수를 parameter로 갖는데, 그때 parameter처럼 작동하는 함수를 콜백함수라고 함.

console.log('1');
setTimeout(()=> console.log('2'), 1000);//1000ms는 1초 // setTimeout 함수는 browser API이다.
console.log('3');

//1
//3
//2

//Synchronous callback
function printImmediately(print){
    print();

}
printImmediately(() => console.log('Hi'));

//Asynchronous callback
function printLater(print,timeout){
    setTimeout(print,timeout);
}
printLater(() => console.log( 'async callback' , 2000));
 

//2. 콜백지옥
//bad example

class UserStorage {
    loginUser(id,password,onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error ('not found'));
0            }
        }, 2000);
    }

    getRoles(user, onSuccess,onError){
        setTimeout(() => {
            if (user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error ( 'no access'));
            }
        })
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id'); //prompt는 browser API
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hi ${userWithRole.name}, you have a ${userWithRole.role} role.`);

            },
            error => {
                console.log(error)

            }
        );
    },
    error => {
        console.log(error)
    }
);

