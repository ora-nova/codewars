function perimeter(n) {
    if(n===0){
        return 4;
    }
    let arr=[1,1];
let sum;
let per
    for(let i=0; i<n-1;i++){
        let res=arr[i]+arr[i+1];
        arr.push(res)
    };

sum=arr.reduce((acc,curr)=>acc+curr,0)
per=sum*4;
return per;

}
console.log(perimeter(0));