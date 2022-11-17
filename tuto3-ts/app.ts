class Rectangulo {
    // baseRectangulo:number = 2;
    // alturaRectangulo:number = 3;
    // color:string = "Rojo";

    constructor(public baseRectangulo:number = 2, public alturaRectangulo:number = 3, public color:string = "rojo"){
        // this.baseRectangulo = baseRect;
        // this.alturaRectangulo = alturaRect;
        // this.color = color;

    }

    calcularArea():number{
        // A= h*b
        const A = this.alturaRectangulo * this.baseRectangulo;
        this.printResult(A);
        return A;
    }
    calcularPerimetro():number{
        // P = 2*h +2*a
        const P = this.alturaRectangulo*2 + this.baseRectangulo*2
        this.printResult(P)
        return P;
    }
    private printResult(result:number):void{
        console.log(result);
    }

}


let box:Rectangulo = new Rectangulo(5,10,"white");
let box2:Rectangulo = new Rectangulo(20,30,"black");
let box3:Rectangulo = new Rectangulo();

box.calcularArea();
box.calcularPerimetro();
box2.calcularArea();
box2.calcularPerimetro();
box3.calcularArea();
box3.calcularPerimetro();
