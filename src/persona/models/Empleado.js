import { Persona } from "../types/Persona.js";
import { Rol } from "../types/Rol.enum.js";
export class Empleado extends Persona {
    constructor(nombre, dinero, id) {
        super(nombre, Rol.EMPLEADO, dinero, id);
    }
    get getId() {
        return this.id;
    }
}
