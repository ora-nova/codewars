//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count=0
    for(let i of arr){
        if(i.includes(':-)')||
         i.includes(';~D')||
          i.includes(':D')||
           i.includes(':)')||
           i.includes(';-D')||
           i.includes(';D') ||
           i.includes(':~D') ||
           i.includes(';~)') ||
           i.includes(':-D')||
           i.includes(':~)')||
         i.includes(":-D") ||
           i.includes(";)") ||
            i.includes(";-)")){
            count++;
        }
    }
  return count;
}
console.log(countSmileys([':D',':~)',';~D',':)'] ))
