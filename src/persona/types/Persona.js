export class Persona {
    nombre;
    rol;
    dinero;
    id;
    constructor(nombre, rol, dinero, id) {
        this.nombre = nombre;
        this.rol = rol;
        this.dinero = dinero;
        this.id = id;
    }
    get getNombre() {
        return this.nombre;
    }
}
