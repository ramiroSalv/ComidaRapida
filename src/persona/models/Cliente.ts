import { MenuItem } from "../../restaurante/models/MenuItem";
import { Sucursal } from "../../restaurante/models/Sucursal";
import { Persona } from "../types/Persona.js";
import { Rol } from "../types/Rol.enum";
import { Empleado } from "./Empleado.js";


export class Cliente extends Persona {
  private pedido: MenuItem[] = [];

  constructor(
    nombre: string,
    rol: Rol.CLIENTE,
    dinero: number,
    id: number,
    pedido: MenuItem[] = [],
  ) {
    super(nombre, rol, dinero, id);
    this.pedido = pedido;
  }
  
  public entrar(sucursal: Sucursal) {
    sucursal.nuevoCliente(this);
  }

  public ordenar(pedido: MenuItem): void {
    this.pedido.push(pedido);
  }
 

  public pagar(): void {
    if (this.dinero > this.pedido[0].getPrecio) {
      const totalApagar = this.pedido.reduce((acc, el)=> acc + el.getPrecio, 0);
      this.dinero = this.dinero - totalApagar;
      console.log("El cliente", this.getNombre, 'está pagando. ', 'Su saldo actual es de: ',this.dinero);
    } else {
      console.log("Dinero insuficiente");
    }
  }

  public get getPedido(): MenuItem[]{
    return this.pedido;
  }
  
  
}
