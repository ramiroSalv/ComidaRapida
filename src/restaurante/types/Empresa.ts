import { Sucursal } from "../models/Sucursal";

export class Empresa {
  private marca: string;
  private cantSucursales: number;
  private sucursales: Sucursal[];

  constructor(marca: string, sucursales: Sucursal[], cantSucursales: number) {
    this.marca = marca;
    this.sucursales = sucursales;
    this.cantSucursales = cantSucursales;
  }

  public expandir(sucursales: Sucursal[]): number {
    this.cantSucursales += sucursales.length;

    return this.cantSucursales;
  }
}
