//Example:
/*interface Config {
  host: string;
  port: number;
  timeout: number;
};
type PartialWithExceptions<T,K extends keyof T>=
   Required<Pick<T,K>> & Partial<Omit<T,K>> 

type PartialConfig = PartialWithExceptions<Config, 'host'>;
// host must be present; port and timeout are optional
interface obj{
    strings: string[],
    numbers: number[]
}
 
function separateTypes (arr: (string | number)[]): obj{
    let string: string[]=[];
    let number: number[]=[];
for (const element of arr) {
    if(typeof element==="string"){
        string.push(element)
    }
    else{
    number.push(element)
   }
}
 return {
    strings: string,
    numbers: number
}
}
console.log(separateTypes([1, "hello", 2, "world", 3]));
type Mynotification = 
   { type: 'email'; to: string; subject: string; }
  | { type: 'sms'; to: string; phone: string; }
  | { type: 'push'; to: string; deviceId: string; };

  function assertNever(x: never): never {
  throw new Error("Unexpected value: " + x);
}
function sendNotification(n: Mynotification): void{
switch(n.type){
    case "email":
        console.log(`the email to ${n.to}, the  subject ${n.subject}`);
        break;
        case "sms":console.log(`the sms to ${n.to}, the  phone ${n.phone}`);
        break;
        case "push":console.log(`the push to ${n.to}, the  subject ${n.deviceId}`)
break;
default: return assertNever(n);
}
}*/
interface obj{
    name: string,
    age: number
}
function validateUser(ob: unknown):obj{
if(typeof ob=== "object" && ob !==null && "name" in ob && "age" in ob && typeof ob.name=="string" && typeof ob.age=="number" ){
return {
    name: ob.name,
    age : ob.age
}

}
else{
    throw Error("not validated");
}

}
type PartialUser= Partial<obj>;
abstract class Shape2D{
abstract area(): number;
}
class Circle extends Shape2D{
    radius: number;
    constructor(radius:number){
        super();
        this.radius = radius;
    }
    area(): number{
        return Math.PI*this.radius**2;
    }
}
class Rectangle extends Shape2D{
    width:number;
    height:number;
constructor(width:number,height:number){
    super();
    this.width=width;
    this.height=height;
}
 area(): number{
        return this.width*this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(5,10);
console.log(circle.area());
console.log(rectangle.area());