function toUnderscore(string) {
    let regex=/^[A-Z]$/;
    let result="";
    if(string.length===0){
        return "";
    }
    if(typeof string==="number"){
        let str=String(string);
        return str;
    }
    result+=string[0].toLowerCase()
for(let i=1;i<string.length;i++){
    if(regex.test(string[i])){
result+= "_";
result+=string[i]
    }
    else{
        result+=string[i]
    }
}
let final=result.toLowerCase();
    return final;
}
console.log(toUnderscore("TestController"))