function findUniq(arr) {
    let unique="";
 for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        if(i!==j&& arr[i].toLowerCase()!==arr[j].toLowerCase()){
unique=arr[j];
}
    }

 }
 return unique;
}
console.log(findUniq(["abc","Abc","abC","hello","aBc"]))