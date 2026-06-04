export class MenuItem {
    nombre;
    ingredientes;
    precio;
    constructor(nombre, ingredientes, precio) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
    get getIngredientes() {
        return this.ingredientes;
    }
    get getNombre() {
        return this.nombre;
    }
    get getPrecio() {
        return this.precio;
    }
}
