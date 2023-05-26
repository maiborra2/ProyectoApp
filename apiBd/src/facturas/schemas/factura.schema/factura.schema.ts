import { Schema } from 'mongoose';

export const FacturaSchema = new Schema({
    mes_factura: String,
    anyo_factura: Number,
    consumoKw_mes: Number,
    coste_mes: Number,
    fecha_inicio_mes: Number,
    fecha_fin_mes: Number,
    pagada: Boolean,
    semanas: [
        {
            numero_semana: Number,
            consumoKw_semana: Number,
            coste_semana: Number,
        },
    ],
});

