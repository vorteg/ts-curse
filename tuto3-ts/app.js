"use strict";
class Rectangulo {
    // baseRectangulo:number = 2;
    // alturaRectangulo:number = 3;
    // color:string = "Rojo";
    constructor(baseRectangulo = 2, alturaRectangulo = 3, color = "rojo") {
        // this.baseRectangulo = baseRect;
        // this.alturaRectangulo = alturaRect;
        // this.color = color;
        this.baseRectangulo = baseRectangulo;
        this.alturaRectangulo = alturaRectangulo;
        this.color = color;
    }
    calcularArea() {
        // A= h*b
        const A = this.alturaRectangulo * this.baseRectangulo;
        this.printResult(A);
        return A;
    }
    calcularPerimetro() {
        // P = 2*h +2*a
        const P = this.alturaRectangulo * 2 + this.baseRectangulo * 2;
        this.printResult(P);
        return P;
    }
    printResult(result) {
        console.log(result);
    }
}
let box = new Rectangulo(5, 10, "white");
let box2 = new Rectangulo(20, 30, "black");
let box3 = new Rectangulo();
box.calcularArea();
box.calcularPerimetro();
box2.calcularArea();
box2.calcularPerimetro();
box3.calcularArea();
box3.calcularPerimetro();
