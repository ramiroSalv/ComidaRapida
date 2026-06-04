export class Sucursal {
    sucursalNro;
    direccion;
    stock;
    gerente;
    ingreso;
    empleados;
    menu = [];
    fila = [];
    impuestos;
    constructor(sucursalNro, direccion, stock, gerente, ingreso, empleados, menu = [], fila = [], impuestos) {
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
    cierreDeMes() {
        let total = 0;
        if (this.impuestos) {
            total = this.ingreso - this.impuestos;
        }
        else {
            total = this.ingreso;
        }
        console.log("El total es de: " + total);
    }
    contratarEmpleado(empleado) {
        this.empleados.push(empleado);
    }
    despedirEmpleado(empleadoId) {
        this.empleados = this.empleados.filter((emp) => emp.getId !== empleadoId);
        console.log("el id del empleado despedido es:  " + empleadoId);
    }
    nuevoCliente(cliente) {
        this.fila.push(cliente);
    }
    avanzarFila() {
        if (this.fila.length) {
            const cliente = this.fila[0];
            const pedidosNombres = this.menu.reduce((acc, el) => acc + el.getNombre + " ", "");
            console.log("Avanza la fila.");
            this.atender(cliente);
            console.log("El pedido es:", pedidosNombres);
            console.log();
            this.prepararPedido(cliente.getPedido);
        }
        else {
            console.log("No hay clientes");
        }
    }
    atender(cliente) {
        this.fila.shift();
        console.log();
        cliente.pagar();
    }
    prepararPedido(pedido) {
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
