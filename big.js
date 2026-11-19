function narcissistic(value) {
    let num=String(value);
    let count=0;
let number=0
    for(let itm of num){
        count+=1;
    }
  for(let itm of num){
     number+=Number(itm ** count);

}

if(number===value){
    return true;
}else{
    return false;
}
    return count;
  }
  console.log(narcissistic(198));