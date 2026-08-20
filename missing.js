function findMissingNumbers(arr){
   let array=[];
   let reg=/^-\d+$/;
   for (let i=0;i<arr.length-1;i++){
  for(let num=arr[i]+1;num< arr[i+1]; num++){
      array.push(num);
  }   
   }
   return array;
};
console.log(findMissingNumbers([-3,-2,1,5]));
 
