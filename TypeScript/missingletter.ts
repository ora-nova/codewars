export function findMissingLetter(array: [string, string, ...string[]]): string  {
   let missing='';
    for(let i=0;i<array.length-1;i++){
        let current=array[i].charCodeAt(0);
        let next=array[i+1].charCodeAt(0);
      if(next!==current+1){
 missing=String.fromCharCode(current+1);
      }
    }
    return missing;
}
console.log(findMissingLetter(['a','b','c','d','f']));