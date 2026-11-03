function toCamelCase(str){
    let res=str.split('');
    let alt=[];
    let  result="";
for (let i = 0;i < res.length;i++) {
 if(res[i]==="-"||res[i]==="_"){
    alt.push(res[i+1].toUpperCase());
    i++;
 }
  else{
    alt.push(res[i]);
  }  
}
result=alt.join('');
return result;
}
console.log(toCamelCase("the-steal-warrior"))