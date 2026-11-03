function pieChart(obj){
  let num=0;
   let final;
   let sum;
   let result={};
   let json;
  let object=JSON.parse(obj);
  for(let value in object){
sum=num+=object[value];
  }
  for (const value in object) {
 final=(object[value]/sum)*360;
 result[value]=final;
  json=JSON.stringify(result);
  }
return json;
}
console.log(pieChart('{"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}'));