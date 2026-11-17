function removeParentheses(s){
   let newString="";
   let inside=0;
 for(let i=0; i<s.length;i++){
    if(s[i]==="("  ){
        inside++;
    }else if(s[i]===")"){
if(inside>0){
    inside--;
}
    }else if(inside===0){
        newString+=s[i];
    }
 }
 return newString;
}
console.log(removeParentheses("example(unwanted (thing))example"));