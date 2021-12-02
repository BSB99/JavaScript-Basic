'use strict';

/* 
JavaScript = 동기적

동기적 -> 맨위에 코드부터 하나하나씩 
차례대로 실행되는것.

hoisting = let, const 같은 변수나
함수선언들이 제일 위로 올라가는 것.
*/

// 비동기적 코드.
console.log('1'); // sync
setTimeout(() => console.log('2'), 1000); // async
console.log('3'); // sync

// 동기적인 callback
function printImmediately(print){
    print();
};

printImmediately(() => console.log('hello')); // sync

// 비동기적 callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};

printWithDelay(() => console.log('async callback'), 2000); // async


// Callback hell
class UserStorage {
    loginUser(id, password, onSucess, onError) {
        setTimeout(() => {
            if (
                (id === 'seung' && password === 'bum') ||
                (id === 'young' && password === 'jun')
            ) {
                onSucess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSucess, onError) {
        setTimeout(() => {
            if (user === 'seung') {
                onSucess({name : 'seung', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    };
};

const userStorage = new UserStorage();
const id = prompt(`id를 입력`);
const password = prompt('pw 입력');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                alert('id or pw error');
            }
        );
    },
    error => {
        console.log(error);
    }
    );
