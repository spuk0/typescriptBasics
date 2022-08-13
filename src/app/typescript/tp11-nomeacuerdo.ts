interface miInterface {
  padre: string;
  hijos?: string[];
}

const papa1: miInterface = {
  padre: "Javier",
  hijos: ["Gabri", "Javi"]
};

const papa2: miInterface = {
  padre: "Guille",
};

function getChildrens (papa: miInterface): void {
  let cantidadHijos = papa.hijos?.length || "no tiene";
  console.log(cantidadHijos);
}

getChildrens(papa1);
getChildrens(papa2);
