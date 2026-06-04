export class Producto {
  private nombre: string;
  private cantidad: number;
  
  constructor(nombre: string,  cantidad: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  public consumo(cantidad: number): void {
    this.cantidad -= cantidad; 
  }
  
  public get getCantidad(): number{
    return this.cantidad
  }
}
