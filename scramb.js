function scramble(str1, str2) {
    let count={};
    for(let char of str1){
        count[char]=(count[char]|| 0)+1;
    }

    for(let char of str2){
        if(!count[char]){
            return false;
        }else{
            count[char]--;
        }
    }
return true;
  }
console.log(scramble('rkqodlw', 'world'));
  
  