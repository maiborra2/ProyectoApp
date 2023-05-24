"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FacturaSchema = new mongoose_1.Schema({
    mes_factura: String,
    anyo_factura: Number,
    consumoKw_mes: Number,
    coste_mes: Number,
    fecha_inicio_mes: Number, fecha_fin_mes: Number,
    semanas: [
        {
            numero_semana: Number,
            consumoKw_semana: Number,
            coste_semana: Number
        }
    ]
});
//# sourceMappingURL=factura.schema.js.map