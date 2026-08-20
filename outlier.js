function findOutlier(integers){
 let odd= integers.filter(integer=> integer%2!==0);
 let even= integers.filter(integer=> integer%2===0);
 return odd.length===1 ? odd[0]
: even[0];
}
console.log(findOutlier([8, 12, 9]));