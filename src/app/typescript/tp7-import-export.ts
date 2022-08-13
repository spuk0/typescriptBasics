import { calcularIVA, Producto } from './tp5';

const carritoDeCompras: Producto [] = [
  {
    nombre: "telefono",
    precio: 100
  },

  {
    nombre: "tablet",
    precio: 200
  }
];

const [total, descuento] = calcularIVA(carritoDeCompras);
console.log("Total: ", total);
console.log("Y con descuento: ", descuento);
