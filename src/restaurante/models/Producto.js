export class Producto {
    nombre;
    cantidad;
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    consumo(cantidad) {
        this.cantidad -= cantidad;
    }
    get getCantidad() {
        return this.cantidad;
    }
}
