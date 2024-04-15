'use strict';

//Promise는 objct
//State : pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
//promise가 만들어지는 순간 바로 실행된다.
const promise =new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie'); //resolve 는 입력값 전달해주는 내장함수?
        reject(new Error('no network'));
    }, 2000);
}); //일단 doing something 출력


//2. Consumers:  then, catch, finally

promise//
 .then(value => {
    console.log(value);
 }
 )//then은 resolve됐을 때 진행되는 것
 .catch(error => {
    console.log(error); 

 })//catch는 reject됐을 때 진행 //catch가 있어야 uncaughted error 로 뜨지 않는다.
 .finally(() => {
    console.log('finally');

 });//finally 는 무조건 실행

 //3. Promise chaining // promise 함수는 함수와 다른 함수가 통신할 수 있도록 해준다.

 const fetchNumber = new Promise((resolve,reject) => {
    setTimeout (() => resolve(2), 1000);
 });

 fetchNumber
  .then(num => num *2)
  .then(num => num *3)
  .then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    });
  })
  .then(num=> console.log(num));

  //4. Error Handling

const getPizza = () =>
  new Promise((resolve, reject)=> {
   setTimeout(() => resolve('🍕'), 1000);
  });
const eat = pizza =>
  new Promise((resolve,reject) => {
   setTimeout(() => reject(new Error(`error! ${pizza}=> 🍪`),1000));
  });

const full = eat =>
new Promise((resolve, reject) => {
   setTimeout(()=> resolve(`${eat} =>😍`),2000);
});


getPizza()
   .then(pizza => eat(pizza)) //.then(eat) 로 쓸 수 있다
   .catch(error => {
      return 'yummy';
   }) // catch를 활용하여 중간에 reject  error 처리를 깔롱하게 할 수 있다.
   .then(full)
   .then(console.log)
   