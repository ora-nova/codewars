function queueTime(customers, n) {
    let time=0;
    let till= new Array(n).fill(0);
    if(customers.length===0){
        return 0;
    }
    if(n>customers.length){
       time=Math.max(...customers)
    }

        for(let j=0;j<customers.length;j++){
let i=till.indexOf(Math.min(...till));
till[i]+= customers[j];

}
time=Math.max(...till);
return time;
        }
    

  console.log(queueTime([2,2,3,3,4,4], 2));