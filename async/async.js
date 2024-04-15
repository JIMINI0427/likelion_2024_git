//async & await


// 1. 그냥 version

function fetchUser() {
    //do network request  in 10 secs...
    return 'jimin';
}

const user =fetchUser();
console.log(user);


// 2. promise version

function fetchUser2() {
    return new Promise((resolve,reject) => {
        // do network request  in 10 secs...
        resolve( 'ellie' );
    });
}

const user2 =fetchUser2();
user2.then(console.log);
console.log(user2);



//3. aysnc version : promise를 좀 더 간단히 만든 API !

async function fetchUser3() {
    //do network request  in 10 secs...
    return 'jibok';
}

const user3 =fetchUser3();
user3.then(console.log);
console.log(user3);


//4. await : 기다려!!!

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return 'apple'
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

async function pickFruits(){
    const apple =await getApple();
    const banana = await getBanana();
    return `${apple}+${banana}`;
}
//function pickFruits() {return getApple().then(apple=> {return getBanana().then(banana => `${apple}+ ${banana}`); });


pickFruits().then(console.log);

//5. 병렬처리 : 기다리지 않고 동시에 (useful Promise APIs)

function pickAllFruits() {
    return Promise.all([getApple(),getBanana()]).then(fruits =>
    fruits.join(' + '));//Promise.all API: 모든 함수 동시에 작동
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); //Promise.race API: 두 함수 중 더 빨리 실행되는 애만 결과값 출력

}

pickOnlyOne().then(console.log);