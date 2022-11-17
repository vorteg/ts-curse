class Pila {
  tamanioDefault: number = 100;
  arreglo: number[];
  indiceActual: number = 0;
  numElementos: number = 0;

  constructor(_tamanio?: number) {
    if (_tamanio) {
      if (_tamanio > 0) {
        this.arreglo = new Array(_tamanio);
      } else {
        throw Error("Bad size");
      }
    } else {
      this.arreglo = new Array(this.tamanioDefault);
    }
  }

  apilar(element: number): void {
    if (this.numElementos === this.arreglo.length) {
      throw Error("Array is full");
    } else {
      this.arreglo[this.indiceActual] = element;
      this.indiceActual++;
      this.numElementos++;
    }
  }

  desapilar(): number {
    if (this.numElementos === 0) {
      throw Error("Array is empty");
    } else {
      this.indiceActual--;
      const elemento: number = this.arreglo[this.indiceActual];
      this.numElementos--;
      return elemento;
    }
  }
}
class ClaseGenerica<T, U> {
  dato?: T;
  dato2?: U;
  constructor(_dato?: T, _dato2?: U) {
    this.dato = _dato;
    this.dato2 = _dato2;
    console.log(this.dato2);
  }

  DoSOmthing(parameter: T): T {
    const dato: T = parameter;
    return dato;
  }
}

const generic: ClaseGenerica<number, string> = new ClaseGenerica(3, "probando");
const generic2: ClaseGenerica<string, number> = new ClaseGenerica("hola");

const prueba: number = generic.DoSOmthing(3);
console.log(prueba);

const prueba2: string = generic2.DoSOmthing("holli");
console.log(prueba2);

// const pila: Pila = new Pila();
// // const pila2: Pila = new Pila(2);

// // console.log(pila.arreglo.length);
// // console.log(pila2.arreglo.length);
// pila.apilar(25);
// pila.apilar(11);
// pila.apilar(87);
// console.log(pila.desapilar());
