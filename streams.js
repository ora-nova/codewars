function promisify(callbackCaller) {
 callbackCaller((data) => {
  console.log(data)
})
}

function readStream(callback) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => callback(i), i * 100)
  }
  setTimeout(() => callback(null), 1100)
}

let dataPromise = promisify(readStream)
async function final(){
while (true) {
  let [data, nextPromise] = await dataPromise
  if (data === null) {
    break
  } else {
    console.log('received data:', data) 
    dataPromise = nextPromise
  }
}
  }
final();