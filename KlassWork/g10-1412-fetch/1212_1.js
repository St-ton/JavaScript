// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   //1я часть - resolve 2я часть - reject
//   .then(
//     resp => console.log(resp),
//     err => console.log(err)
//   )

//   .then(
//     data => console.log(data),
//     () => {}
//   );

//fetch('https://fakestoreapi.com/products/10000')
//* 1я часть - resolve 2я часть - reject
//* Если в первом then реализовался положительный resolve,  то переходим ко 2му then, где также свои resolve и reject
// .then(
//   resp => {
//     console.log(resp);
//     return resp.json();
//   },
//   err => console.log(err)
// )
// .then(
//   data => console.log(data),
//   () => console.log('json parse error')
// );

const promise = new Promise((resolve, rejecte) => {
  const randValue = Math.random();
  if (randValue > 0.5) {
    resolve(randValue);
  } else {
    rejecte(randValue);
  }
});
promise.then(
  value => console.log(`Resolve: ${value}`),
  value => console.log(`Reject: ${value}`)
);

//todo  Максима код
// let newFunc = (resolve, reject) => {
//   const randValue = Math.random();
//   if (randValue > 0.5) {
//     resolve(randValue);
//   } else {
//     reject(randValue);
//   }
// };

// const promise = new Promise(newFunc);

// promise.then(
//   value => console.log(`Resolve: ${value}`),
//   value => console.log(`Reject: ${value}`)
// );
