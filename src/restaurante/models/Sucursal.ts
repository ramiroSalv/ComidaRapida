import { Direccion } from "./Direccion";
import { Producto } from "./Producto";
import { Gerente } from "../../persona/models/Gerente";
import { Empleado } from "../../persona/models/Empleado";
import { Cliente } from "../../persona/models/Cliente";
import { MenuItem } from "./MenuItem";

export class Sucursal {
  private sucursalNro: number;
  private direccion: Direccion;
  private stock: Producto[];
  private gerente: Gerente;
  private ingreso: number;
  private empleados: Empleado[];
  private menu: MenuItem[] = [];
  private fila: Cliente[] = [];
  private impuestos?: number;

  constructor(
    sucursalNro: number,
    direccion: Direccion,
    stock: Producto[],
    gerente: Gerente,
    ingreso: number,
    empleados: Empleado[],
    menu: MenuItem[] = [],
    fila: Cliente[] = [],
    impuestos?: number,
  ) {
    this.sucursalNro = sucursalNro;
    this.direccion = direccion;
    this.stock = stock;
    this.gerente = gerente;
    this.ingreso = ingreso;
    this.empleados = empleados;
    this.impuestos = impuestos;
    this.fila = fila;
    this.menu = menu;
  }

  public cierreDeMes(): void {
    let total = 0;

    if (this.impuestos) {
      total = this.ingreso - this.impuestos;
    } else {
      total = this.ingreso;
    }

    console.log("El total es de: "+total);
  }

  public contratarEmpleado(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  public despedirEmpleado(empleadoId: number): void {
    this.empleados = this.empleados.filter((emp) => emp.getId !== empleadoId);
    console.log("el id del empleado despedido es:  "+empleadoId);
  }

  public nuevoCliente(cliente: Cliente): void {
    this.fila.push(cliente);
  }

  public avanzarFila(): void {
    if (this.fila.length) {
      const cliente: Cliente = this.fila[0];
      const pedidosNombres: string = this.menu.reduce((acc, el) => acc + el.getNombre + " ", "");

      console.log("Avanza la fila.");

      this.atender(cliente);

      console.log("El pedido es:", pedidosNombres);
      console.log();
      
      this.prepararPedido(cliente.getPedido);
    } else {
      console.log("No hay clientes");
    }
  }

  public atender(cliente: Cliente): void {
    
    this.fila.shift();
    console.log();
    cliente.pagar()
  }

  public prepararPedido(pedido: MenuItem[]): void {
    for (let i = 0; i < pedido.length; i++) {
      for (let x = 0; x < pedido[i].getIngredientes.length; x++) {
        for (let j = 0; j < this.stock.length; j++) {
          if (this.stock[j] === pedido[i].getIngredientes[x]) {
            this.stock[j].consumo(1);
            console.log(pedido[i].getIngredientes[x], pedido[i].getNombre);
        
          }
        }
      }
    }
  }
}
