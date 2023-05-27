import { Document } from 'mongoose';
import {Factura} from "../../../facturas/interfaces/factura/factura.interface";
export interface User extends Document{
    save(): unknown;
    _id:string;
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
    inicio_sesion: boolean,
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
    plan: [{
        ahorro:boolean;
        estandard:boolean;
        premium:boolean;
        classic: boolean;
        oficina:boolean;
    }];
    facturas: Factura[];
}
