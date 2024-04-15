
'use strict' ;

class UserStorage {
    loginUser(id,password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                resolve(id);
            } else {
                reject(new Error ('not found'));
0            }
        }, 2000);
        });
    }
        
    getRoles(user){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error ( 'no access'));
                }
            },2000 )
        });
        
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id'); //prompt는 browser API
const password = prompt('enter your password');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user =>alert(`Hi ${user.name}, you have a ${user.role} role.`))
    .catch(console.log);
    
    