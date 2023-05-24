import {FacturaDto} from "../../../facturas/dto/factura.dto/factura.dto";

export class UserDto {
    _id: string;
    dni: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    email: string;
    telefono: string;
    cuenta_bancaria: string;
    fecha_registro: number;
    info_problemas: [string];
    contrasenya: string;
    direccion_usuario:[{
        tipoVia:string;
        calle: string;
        numero: string;
        puerta: string;
        ciudad: string;
        provincia: string;
        cp: number;
        pais: string;
    },];
    facturas: FacturaDto[];
}
