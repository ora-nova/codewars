export function camelCase(str: string): string {
    let res=str.trim().toLowerCase();
    let result:string="";
    let arr: string[]=[];
    if(res.length===0){
        return "";
    }
        arr.push(res[0].toUpperCase());
    for(let i=1;i<res.length;i++){
        if(res[i]===' '){
            if(res[i+1]!==undefined){
arr.push(res[i+1].toUpperCase());
i++;
            }
        }
        else{
            arr.push(res[i]);
        }
    }
    result=arr.join('')
  return result; 
}
console.log(camelCase("hello case"));