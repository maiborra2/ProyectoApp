import {Schema} from "mongoose";
export const UserSchema = new Schema({
    dni: String,
    nombre: String,
    apellido1: String,
    apellido2: String,
    email: String,
    telefono: String,
    cuenta_bancaria: String,
    fecha_registro: Number,
    info_problemas: [String],
    contrasenya: String,
    direccion_usuario:[{
        tipoVia:String,
        calle: String,
        numero: String,
        puerta: String,
        ciudad: String,
        provincia: String,
        cp: Number,
        pais: String,
    }],
    facturas: [{
        mes_factura:String,
        anyo_factura: Number,
        consumoKw_mes: Number,
        coste_mes: Number,
        fecha_inicio_mes: Number,
        fecha_fin_mes: Number,
        semanas:[
            {
                numero_semana: Number,
                consumoKw_semana: Number,
                coste_semana: Number
            }
        ]}],
});
