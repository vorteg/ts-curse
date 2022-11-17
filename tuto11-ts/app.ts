function simpleDecorator(constructor: Function) {
  console.log("Decorador invocado");
}

function decoratorFactory(name: string) {
  return function (constructor: Function) {
    console.log("Decorator function with value: " + name);
  };
}

//@simpleDecorator
@decoratorFactory("test")
class ClassWithSimpleDecorator {}

let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();

console.log("instance 1: " + JSON.stringify(instance_1));
console.log("instance 2: " + JSON.stringify(instance_2));
