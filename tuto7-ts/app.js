"use strict";
class FiguraBase {
    constructor() {
        this.colorFigura = "black";
    }
}
//herencia e interfaz al mismo tiempo
class Ciculo extends FiguraBase {
    CalcularArea() {
        console.log("Calculando area circulo");
    }
    Dibujar() {
        console.log(this.colorFigura);
        console.log("Dibujando circulo");
    }
}
class Linea {
    CalcularArea() {
        console.log("sin area");
    }
    Dibujar() {
        console.log("Dibujando linea");
    }
}
//const f: Figura = new Figura();
const c = new Ciculo();
const l = new Linea();
//f.Dibujar();
c.Dibujar();
l.Dibujar();
c.CalcularArea();
l.CalcularArea();
