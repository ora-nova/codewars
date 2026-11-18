function findUniq(arr) {
    let unique="";
    let regex=/\p{L}/u;
    let current=[];
 for(let i=0;i<arr.length;i++){
    current=[...new Set(arr[i].toLowerCase())];
    let count=0;
    if(arr[i]===" "){
        continue;
      }
      
    for(let j=0;j<arr.length;j++){
        let othr=[...new Set(arr[j].toLowerCase())];
        if(othr[0]===current[0]){
count++;
}
    }
if(count===1){
    unique=arr[i];
    break;
}
 }
 return unique;
}
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))