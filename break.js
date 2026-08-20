function solution(string) {
    let res=string.split('');
    let val=[]
    let reg=/^[A-Z]+$/;
    for(let char of string )
       if(reg.test(char)){
        val.push(" ");
        val.push(char);
       }
       else{
val.push(char)
       }

  return val.join('') ;
}
console.log(solution(""))