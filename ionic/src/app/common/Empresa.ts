export interface Empresa{
  nombre: string;
  img_logo:string;
  direccion: [
    {
      tipoVia: string;
      calle: string;
      numero: string;
      ciudad: string;
      provincia: string;
      cp: number;
      pais: string;
      telefono_oficina: string;
    },
  ];
  telefono_at_cliente: string;
  horario: [
    {
      dia: number;
      apertura: number;
      cierre: number;
    },];
  comentarios: [
    {
      email: string;
      comentario: string;
      puntuacion: number;
    },];
  preguntas_frecuentes: [
    {
      pregunta: string;
      respuesta: string;
    },]
}
