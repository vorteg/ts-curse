"use strict";
class Pila {
    constructor(_tamanio) {
        this.tamanioDefault = 100;
        this.indiceActual = 0;
        this.numElementos = 0;
        if (_tamanio) {
            if (_tamanio > 0) {
                this.arreglo = new Array(_tamanio);
            }
            else {
                throw Error("Bad size");
            }
        }
        else {
            this.arreglo = new Array(this.tamanioDefault);
        }
    }
    apilar(element) {
        if (this.numElementos === this.arreglo.length) {
            throw Error("Array is full");
        }
        else {
            this.arreglo[this.indiceActual] = element;
            this.indiceActual++;
            this.numElementos++;
        }
    }
    desapilar() {
        if (this.numElementos === 0) {
            throw Error("Array is empty");
        }
        else {
            this.indiceActual--;
            const elemento = this.arreglo[this.indiceActual];
            this.numElementos--;
            return elemento;
        }
    }
}
class ClaseGenerica {
    constructor(_dato, _dato2) {
        this.dato = _dato;
        this.dato2 = _dato2;
        console.log(this.dato2);
    }
    DoSOmthing(parameter) {
        const dato = parameter;
        return dato;
    }
}
const generic = new ClaseGenerica(3, "probando");
const generic2 = new ClaseGenerica("hola");
const prueba = generic.DoSOmthing(3);
console.log(prueba);
const prueba2 = generic2.DoSOmthing("holli");
console.log(prueba2);
// const pila: Pila = new Pila();
// // const pila2: Pila = new Pila(2);
// // console.log(pila.arreglo.length);
// // console.log(pila2.arreglo.length);
// pila.apilar(25);
// pila.apilar(11);
// pila.apilar(87);
// console.log(pila.desapilar());
