function findUniq(arr) {
    let current=[];
 for(let i=0;i<arr.length;i++){
    current.push([...new Set(arr[i].toLowerCase().replace(/\s/g, ""))].sort().join(''));
   
 };

 let count={};
      for(let i=0;i<current.length;i++){
       let sign=current[i];
 f
if(count[sign]){
count[sign]++;
}else{
    count[sign]=1;
}
}
for (let i = 0; i < current.length; i++) {
    if (counts[current[i]] === 1) {
        return arr[i];
    }
}
}
console.log(findUniq(['silvia', 'vasili', 'victor']))

// function findUniq(arr) {
//     let unique="";
//     let regex=/\p{L}/u;
//     let current=[];
//  for(let i=0;i<arr.length;i++){
//     current=[...new Set(arr[i].toLowerCase().replace(/\s/g, ""))].sort().join('');
//     let count=0;
//     if(arr[i]===" "){
//         continue;
//       }
      
//     for(let j=0;j<arr.length;j++){
//         let othr=[...new Set(arr[j].toLowerCase().replace(/\s/g, ""))].sort().join('');
//         if(othr===current){
// count++;
// }
//     }
// if(count===1){
//     unique=arr[i];
//     break;
// }
//  }
//  return unique;
// }
// console.log(findUniq(['silvia', 'vasili', 'victor']))