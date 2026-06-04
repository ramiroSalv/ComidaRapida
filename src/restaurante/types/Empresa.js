export class Empresa {
    marca;
    cantSucursales;
    sucursales;
    constructor(marca, sucursales, cantSucursales) {
        this.marca = marca;
        this.sucursales = sucursales;
        this.cantSucursales = cantSucursales;
    }
    expandir(sucursales) {
        this.cantSucursales += sucursales.length;
        return this.cantSucursales;
    }
}
