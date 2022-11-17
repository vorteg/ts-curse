//herencia entre interfaces
interface Figura extends Calculador {
  Dibujar(): void;
}

interface Calculador {
  CalcularArea(): void;
}

class FiguraBase {
  protected colorFigura: string = "black";
}

//herencia e interfaz al mismo tiempo

class Ciculo extends FiguraBase implements Figura {
  CalcularArea(): void {
    console.log("Calculando area circulo");
  }
  Dibujar(): void {
    console.log(this.colorFigura);
    console.log("Dibujando circulo");
  }
}

class Linea implements Figura {
  CalcularArea(): void {
    console.log("sin area");
  }
  Dibujar(): void {
    console.log("Dibujando linea");
  }
}

//const f: Figura = new Figura();
const c: Figura = new Ciculo();
const l: Figura = new Linea();

//f.Dibujar();
c.Dibujar();
l.Dibujar();
c.CalcularArea();
l.CalcularArea();
