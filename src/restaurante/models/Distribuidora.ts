import { Producto } from "./Producto";
import { Sucursal } from "./Sucursal";
export class Distribuidora {
  private producto: Producto[];
  constructor(producto: Producto[]) {
    this.producto = producto;
  }
  public reabastecer(sucursal: Sucursal): void {
    
  }
}
