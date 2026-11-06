function incrementString (string) {
let regN=/\d+$/;

let match=string.match(regN);
    if(!match){
return string+ "1";
}
let digit= match[0];
let res= string.slice(0,-digit.length);
let final=String(Number(digit)+1);
let result= final.padStart(digit.length,"0");

return res+result;
  }
  console.log(incrementString("name1"))