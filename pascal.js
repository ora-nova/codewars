function pascalsTriangle(n) {
   let arr=[];
   for(i=0;i<n;i++){
let row=[1];
for(j=1;j<i;j++){
    row.push(arr[i-1][j-1]+arr[i-1][j])
}
if(i>0){
    row.push(1)
}
arr.push(row)
   }
   return arr.flat()
  }
  
  console.log(pascalsTriangle(5));