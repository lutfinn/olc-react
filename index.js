// Callback
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greet('Lutfi', callMe);

// Promises
// let promise = new Promise(function (resolve, reject) {
//     const x = "x";
//     const y = "y"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
//     then(function () {
//         console.log('You are a X');
//     }).
//     catch(function () {
//         console.log('Your are not a X');
//     });

// Fetch
// let list = []
// fetch('https://jsonplaceholder.typicode.com/posts').then(async response => {
//     const h = await response.json()
//     // console.log(h)
//     list = h
//     console.log(list) 
// })
// console.log('merdeka') 

// const getData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log(response)    
//     console.log('baiklah')
// }
// getData()

