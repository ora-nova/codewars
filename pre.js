console.log(1);
setTimeout(() => {
  console.log(2);
  new Promise((resolve) => {
    console.log(3);
    setTimeout(() => {
      console.log(4);
      resolve(5);
    }, 0);
  }).then((val) => {
    console.log(val);
  });
  console.log(6);
}, 0);

Promise.resolve().then(() => {
  console.log(7);
});
console.log(8);