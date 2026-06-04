import { MenuItem } from "../../restaurante/models/MenuItem.js";
import { Sucursal } from "../../restaurante/models/Sucursal.js";
import { Persona } from "../types/Persona.js";
import { Rol } from "../types/Rol.enum.js";
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Gerente.js";


export class Empleado extends Persona {
  constructor(
    nombre: string,
    dinero: number,
    id: number,
  ) {
    super(nombre, Rol.EMPLEADO, dinero, id);
  }

  public get getId(): number {
    return this.id;
  }

}
