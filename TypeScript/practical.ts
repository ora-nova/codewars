/*abstract class Shape2D{
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
console.log(rectangle.area());*/