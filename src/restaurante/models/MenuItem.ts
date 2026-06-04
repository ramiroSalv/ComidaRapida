import { Producto } from "./Producto";

export class MenuItem {
  private nombre: string;
  private ingredientes: Producto[];
  private precio: number;

  constructor(nombre: string, ingredientes: Producto[], precio: number) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }

 public get getIngredientes(): Producto[]{
  return this.ingredientes
 }
  public get getNombre(): string{
    return this.nombre
  }
  
  public get getPrecio(): number{
    return this.precio
  }
}
