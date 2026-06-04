import { Persona } from "../types/Persona.js";
export class Cliente extends Persona {
    pedido = [];
    constructor(nombre, rol, dinero, id, pedido = []) {
        super(nombre, rol, dinero, id);
        this.pedido = pedido;
    }
    entrar(sucursal) {
        sucursal.nuevoCliente(this);
    }
    ordenar(pedido) {
        this.pedido.push(pedido);
    }
    pagar() {
        if (this.dinero > this.pedido[0].getPrecio) {
            const totalApagar = this.pedido.reduce((acc, el) => acc + el.getPrecio, 0);
            this.dinero = this.dinero - totalApagar;
            console.log("El cliente", this.getNombre, 'está pagando. ', 'Su saldo actual es de: ', this.dinero);
        }
        else {
            console.log("Dinero insuficiente");
        }
    }
    get getPedido() {
        return this.pedido;
    }
}
