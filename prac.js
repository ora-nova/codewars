/*function stopinterval(){
    let num=1;
    let timer=setInterval(()=>
  {
    console.log(num);
    num++;
}
,2000)
setTimeout(()=>{
    clearInterval(timer);
},5000);
};
stopinterval();*/
/*function fetchToDo(url) {
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onload=function () {
        if(xhr.status>=200&& xhr.status<=299){
        console.log('the data:',JSON.parse(xhr.responseText));
        } else {
    console.log("Request failed with status:", xhr.status);
  }
    };
    xhr.onerror= function () {
        console.log("there was an error");
    }
    xhr.send();
}
fetchToDo("https://jsonplaceholder.typicode.com/todos/1");*/
/*function fetchToDoWithHeaders(url,payload) {
    let xhr=new XMLHttpRequest();
    xhr.open("POST",url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.setRequestHeader('User-Agent', 'MyCustomApp/1.0');
    xhr.onload=function () {
        if(xhr.status>=200&& xhr.status<=299){
        console.log('the data:',JSON.parse(xhr.responseText));
        } else {
    console.log("Request failed with status:", xhr.status);
  }
    };
    xhr.onerror= function () {
        console.log("there was an error");
    }
    xhr.send(JSON.stringify(payload));
}

fetchToDoWithHeaders("https://jsonplaceholder.typicode.com/todos/1",{ title: "Learn async JS", completed: false });*/
/*function myFetch(url) {
    return new Promise((resolve,reject)=>{
         let xhr=new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onload=function () {
        if(xhr.status>=200&& xhr.status<=299){
        resolve(JSON.parse(xhr.responseText));
        } else {
    reject(new Error("Request failed with status:"+ xhr.status));
  }
    };
    xhr.onerror= function () {
        reject(new Error("there was an error"));
    }
    xhr.send();
});}
myFetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(data => console.log("Got data:", data))
  .catch(error => console.log("Failed:", error.message));*/
 /* function getFastPosts(urls){
    let promise=urls.map(url=>fetch(url).then(response=>response.json()));
return Promise.race(promise);
  }
 getFastPosts([
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3"
])
  .then(data => console.log("Fastest result:", data))
  .catch(error => console.log("Fastest one failed:", error.message));

   /*function downloadAll(urls){
    let promise=urls.map(url=>fetch(url).then(response=>response.json()));
return Promise.all(promise);
  }
 downloadAll([
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3"
])
  .then(data => console.log("Fastest result:", data))
  .catch(error => console.log("Fastest one failed:", error.message));
  */
/* function debounce(fn, delay) {
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer=setTimeout(()=>{
      fn(...args);
    },delay)
  }
}

const log = debounce((msg) => console.log(msg), 300);
log("h");
log("he");
log("hel");
log("hello"); // only "hello" gets logged, once, ~300ms after the last call

async function fetchWithRetry(fn) {
try {
  let response= await fetch(url);
  let data=await response.json();
  return await fn();
} catch (error) {
  await fn();
}
}

let attempts = 0;
const flaky = async () => {
  attempts++;
  if (attempts < 2) throw new Error("fail");
  return "success";
};

fetchWithRetry(flaky); // resolves "success" (failed once, succeeded on retry)*/
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function runSequential(tasks) {
  let array=[];
for (const task of tasks) {
 let value=await task();
  array.push(value);
}
return array;
}
function runParallel(tasks) {
let promise=tasks.map(task=>task());
return Promise.all(promise);
}

const tasks = [
  () => delay(1000).then(() => "a"),
  () => delay(1000).then(() => "b"),
  () => delay(1000).then(() => "c"),
];

runSequential(tasks).then(res=>{console.log(res)}); // resolves ["a","b","c"] after ~3000ms
runParallel(tasks).then(res=>{console.log(res)});   // resolves ["a","b","c"] after ~1000ms