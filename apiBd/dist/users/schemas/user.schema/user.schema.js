"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
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
    inicio_sesion: Boolean,
    direccion_usuario: [{
            tipoVia: String,
            calle: String,
            numero: String,
            puerta: String,
            ciudad: String,
            provincia: String,
            cp: Number,
            pais: String,
        }],
    plan: [{
            ahorro: Boolean,
            estandard: Boolean,
            premium: Boolean,
            classic: Boolean,
            oficina: Boolean,
        }],
    facturas: [{
            mes_factura: String,
            anyo_factura: Number,
            consumoKw_mes: Number,
            coste_mes: Number,
            fecha_inicio_mes: Number,
            fecha_fin_mes: Number,
            semanas: [
                {
                    numero_semana: Number,
                    consumoKw_semana: Number,
                    coste_semana: Number
                }
            ]
        }],
});
//# sourceMappingURL=user.schema.js.map