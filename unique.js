let uniqueInOrder=function(iterable){
    let array=[];
  
    let alpha=/^[a-zA-Z]+$/;
  for(let i=0;i<iterable.length;i++){
if(iterable[i]!== iterable[i+1]){
  array.push(iterable[i]);
}
  }
  return array;
}
console.log(uniqueInOrder('AABCD'));