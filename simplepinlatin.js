function pigIt(str){
 let arr=str.split(' ');
 let s;
 let array=[];
 let t;
 let result;
 let regx=/[!]/;
 for(let i=0;i<arr.length;i++){
     s=arr[i].slice(1);
     t=arr[i][0];
     if(regx.test(arr[i])){
        result=s+t;
     }else{
        result=s+t+"ay";
     }

     array.push(result)
 }
 let final=array.join(' ');
 return final;
};
console.log(pigIt('Pig latin is cool'));