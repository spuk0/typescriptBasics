
function classDecorator<T extends {new (...args:any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class miSuperClase {
  constructor(public miPropiedad: string){
    this.miPropiedad = miPropiedad;
  }

  imprimir(){
    console.log(this.miPropiedad);
  }
}

console.log(miSuperClase);
