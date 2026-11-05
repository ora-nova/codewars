function alphanumeric(string){
    let regex=/^[a-zA-Z0-9]+$/;
    let boolean=true;
    if(string===""){
return false;
    }
for(let str of string){
    if(str==="_" || str===" " || !regex.test(string)){
        boolean= false;
    }
    else{
        boolean;
    }
}
return boolean;
}
console.log(alphanumeric("     "))