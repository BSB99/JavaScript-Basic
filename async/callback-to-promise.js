'use strict';
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'seung' && password === 'bum') ||
                    (id === 'young' && password === 'jun')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (user === 'seung') {
                    resolve({name : 'seung', role : 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    };
};

const userStorage = new UserStorage();
const id = prompt(`id를 입력`);
const password = prompt('pw 입력');
userStorage.loginUser(id, password)
    .then(user => userStorage.getRoles(user))
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(user => console.log(user));
