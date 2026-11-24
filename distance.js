function shortesttoChar(s, c) {
    let arr=[];
    let array=[]
    let num=0;
    let t;
  if(s===""){
    return [];
  }else if(c===""){
    return [];
  }
  if(!s.includes(c)){
    return [];
  }
  for(let i=0;i<s.length;i++){
  if(s[i]===c){
    array.push(i)
}
  }
for (let i = 0; i < s.length; i++) {
  t= array.map((itm)=>Math.abs(i-itm));
 let mini= Math.min(...t);
   arr.push(mini)
}

return arr;
  }
  console.log(shortesttoChar("lovecodewars", "e"))