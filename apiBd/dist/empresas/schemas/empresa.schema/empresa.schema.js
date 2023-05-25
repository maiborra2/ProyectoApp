"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EmpresaSchema = new mongoose_1.Schema({
    nombre: String,
    img_logo: String,
    direccion: [
        {
            tipoVia: String,
            calle: String,
            numero: String, ciudad: String,
            provincia: String,
            cp: Number,
            pais: String,
            telefono_oficina: String,
        },
    ],
    telefono_at_cliente: String,
    horario: [
        {
            dia: Number,
            apertura: Number,
            cierre: Number,
        },
    ],
    comentarios: [
        {
            email: String,
            comentario: String,
            puntuacion: Number,
        },
    ],
    preguntas_frecuentes: [
        {
            pregunta: String,
            respuesta: String
        },
    ],
    info_problemas: [
        {
            problema: String,
            fecha: Date
        }
    ]
});
//# sourceMappingURL=empresa.schema.js.map