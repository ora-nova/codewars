export function longestConsec(strarr: string[], k: number): string {
    let arr: string[]=[];
    let string1: string="";
    let max: number=0;
    let long:string ="";
    if(k > strarr.length || k<= 0){
        return "";
    }
    if(k===1){
        for(let word of strarr){
            if(word.length>long.length){
                long=word;
                
            }
          }
          return long
    }
    else{
for (let i=0;i<strarr.length-1;i++) {
    let current:string="";
      
    for(let j=i;j<=i+(k-1);j++){
        if(strarr[j]===undefined){
            break;
        }else{
            current+=strarr[j];
        }
    
    }
     arr.push(current)


}
for(let j=0;j<arr.length;j++){
    if(arr[j].length > string1.length){
   string1= arr[j] 
    }
   }
}
return string1;
}
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))