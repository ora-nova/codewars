function firstNonRepeatingLetter(s) {
    let character="";
 let t=s.toLowerCase();
   let obj={};
    for (let char of t){
   if(obj[char]){
       obj[char]+=1;
   }else{
       obj[char]=1;
   }
    }
 
  
   
    for(let i=0;i<t.length;i++){
       if(obj[t[i]]===1){
          character= s[i];
          return character;
       }
    }
    return '';
   }
   console.log(firstNonRepeatingLetter("stressa"));