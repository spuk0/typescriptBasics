export interface Producto {
  nombre: string;
  precio: number;
}

const telefono: Producto = {
  nombre: 'A22',
  precio: 22,
};

const tablet: Producto = {
  nombre: 'iPad',
  precio: 222,
};

const tvSmart: Producto = {
  nombre: 'noblex',
  precio: 2222,
};

export function calcularIVA(producto: Producto[]) {
  let total: number = 0;

  producto.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
}

const articulos: Producto[] = [telefono, tablet, tvSmart];
const [total, descuento] = calcularIVA(articulos);

console.log(total);
console.log(descuento);
