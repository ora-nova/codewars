function deepCount(a){
    let count=0;
  for (let element of a){
    if(Array.isArray(element)){ 
count++;
    count +=deepCount(element);
}
else{
    count++
}
  }
  return count;
}
console.log(deepCount([1, 2, [3, 4, [5]],78]))