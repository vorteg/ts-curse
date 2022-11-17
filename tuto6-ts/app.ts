class Shape {
  constructor(
    public ctx: CanvasRenderingContext2D,
    public originX: number,
    public originY: number
  ) {}
}

class Line extends Shape {
  constructor(
    ctx: CanvasRenderingContext2D,
    originX: number,
    originY: number,
    public x: number,
    public y: number
  ) {
    super(ctx, originX, originY);
  }
  draw(): void {
    this.ctx.moveTo(this.originX, this.originY);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
  }
}

class Circle extends Shape {
  constructor(
    ctx: CanvasRenderingContext2D,
    originX: number,
    originY: number,
    public radius: number
  ) {
    super(ctx, originX, originY);
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.originX, this.originY, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}

class TextShape extends Shape {
  constructor(
    ctx: CanvasRenderingContext2D,
    originX: number,
    originY: number,
    public text: string
  ) {
    super(ctx, originX, originY);
  }
  draw() {
    this.ctx.font = "30 px Arial";
    this.ctx.fillText(this.text, this.originX, this.originY);
  }
}

class MathHelper {
  static generateRandom() {
    return Math.random() * 500;
  }
}

const c = <HTMLCanvasElement>document.getElementById("myCanvas");
const ctx = <CanvasRenderingContext2D>c.getContext("2d");

const btnLine = document.getElementById("drawLine");
btnLine?.addEventListener("click", () => {
  const line = new Line(
    ctx,
    MathHelper.generateRandom(),
    MathHelper.generateRandom(),
    MathHelper.generateRandom(),
    MathHelper.generateRandom()
  );
  line.draw();
});

const btnCircle = document.getElementById("drawCircle");
btnCircle?.addEventListener("click", () => {
  const circle = new Circle(
    ctx,
    MathHelper.generateRandom(),
    MathHelper.generateRandom(),
    MathHelper.generateRandom()
  );
  circle.draw();
});

const btnText = document.getElementById("drawText");
btnText?.addEventListener("click", () => {
  const textShape = new TextShape(
    ctx,
    MathHelper.generateRandom(),
    MathHelper.generateRandom(),
    "HOLA"
  );
  textShape.draw();
});
