import { Rol } from "./Rol.enum";

export abstract class Persona {
  protected nombre: string;
  protected rol: Rol;
  protected dinero: number;
  protected id: number;

  constructor(nombre: string, rol: Rol, dinero: number, id: number) {
    this.nombre = nombre;
    this.rol = rol;
    this.dinero = dinero;
    this.id = id;
  }
  
  public get getNombre(): string {
    return this.nombre
  }
}
 