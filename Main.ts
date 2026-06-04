import { Cliente } from "./src/persona/models/Cliente.js";
import { Empleado } from "./src/persona/models/Empleado.js";
import { Gerente } from "./src/persona/models/Gerente.js";
import { Rol } from "./src/persona/types/Rol.enum.js";
import { Direccion } from "./src/restaurante/models/Direccion.js";
import { MenuItem } from "./src/restaurante/models/MenuItem.js";
import { Producto } from "./src/restaurante/models/Producto.js";
import { Sucursal } from "./src/restaurante/models/Sucursal.js";
import { Empresa } from "./src/restaurante/types/Empresa.js";

const producto1Stock = new Producto("Medallón de carne", 100);
const producto2Stock = new Producto("Pan", 100);
const producto1Pedido = new Producto("Medallón de carne", 1);
const producto2Pedido = new Producto("Pan", 1);

const mcdonalsGerente = new Gerente("Martín", Rol.GERENTE, 5000, 1);

const empleado1 = new Empleado("María", 5000, 2);

const empleado2 = new Empleado("Mario", 5000, 3);

const pedido = [
  new MenuItem("Hamburguesa", [producto1Pedido, producto2Pedido], 25), new MenuItem ("Hamburguesa", [producto1Pedido, producto2Pedido], 25)
];

const mcdonalsMenu = [
  new MenuItem("Hamburguesa", [producto1Stock, producto2Stock], 25),
];

const cliente1 = new Cliente("Thomas", Rol.CLIENTE, 5000, 3, pedido);
const cliente2 = new Cliente("Ramón", Rol.CLIENTE, 5000, 5, pedido);
const cliente3 = new Cliente("María", Rol.CLIENTE, 5000, 7, pedido);
const cliente4 = new Cliente("Sandra", Rol.CLIENTE, 5000, 23, pedido);
const cliente5 = new Cliente("Pedro", Rol.CLIENTE, 5000, 56, pedido);

const mcdonalsSucursal1 = new Sucursal(
  1,
  new Direccion("América", "Argentina", "Córdoba", "Pasaje España", 1235),
  [producto1Stock, producto2Stock],
  mcdonalsGerente,
  50000,
  [empleado1],
  mcdonalsMenu,
);
const mcdonals = new Empresa("McDonalds", [mcdonalsSucursal1], 1);

mcdonalsSucursal1.nuevoCliente(cliente1);

setTimeout(() => {
  mcdonalsSucursal1.nuevoCliente(cliente2);
}, 5000);


setInterval(() => {
  mcdonalsSucursal1.avanzarFila();

  // clearInterval();
}, 3000);  // 1000ms / 60fps = 16ms



setInterval(()=>{
  const aleatorio = () => 10000+(Math.random()*10000)

  setTimeout(()=>{
    const random = Math.random();
    if(random <= 0.2){
      mcdonalsSucursal1.nuevoCliente(cliente1);
    }else if(random <= 0.4 && random > 0.2){
      mcdonalsSucursal1.nuevoCliente(cliente2);
    } else if(random > 0.4 && random <= 0.6){
      mcdonalsSucursal1.nuevoCliente(cliente3);
    }else if(random > 0.6 && random <= 0.8){
      mcdonalsSucursal1.nuevoCliente(cliente4);
    }else{
      mcdonalsSucursal1.nuevoCliente(cliente5);
    }
  }, aleatorio());
}, 5000);

mcdonalsSucursal1.contratarEmpleado(empleado2);
mcdonalsSucursal1.despedirEmpleado(3);

