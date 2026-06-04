export class Direccion {
  private region: string;
  private pais: string;
  private provincia: string;
  private calle: string;
  private altura: number;
  constructor(
    region: string,
    pais: string,
    provincia: string,
    calle: string,
    altura: number,
  ) {
    this.region = region;
    this.pais = pais;
    this.provincia = provincia;
    this.calle = calle;
    this.altura = altura;
  }
}
