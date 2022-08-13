class personaNormal {
  constructor(
    public nombre?: string,
    public direccion?: string) {}
}

class Heroe extends personaNormal {
  constructor(
    public alias: string,
    public edad: number,
    public nombreReal?: string
    ){
      super(nombreReal, "calle wallaby 42 sidney");
    }
};

const ironman = new Heroe("Iron-Man", 42, "Tony");
console.log(ironman);
