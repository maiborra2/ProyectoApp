/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from 'mongoose';
export declare const FacturaSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    semanas: {
        numero_semana?: number;
        consumoKw_semana?: number;
        coste_semana?: number;
    }[];
    mes_factura?: string;
    anyo_factura?: number;
    consumoKw_mes?: number;
    coste_mes?: number;
    fecha_inicio_mes?: number;
    fecha_fin_mes?: number;
    pagada?: boolean;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    semanas: {
        numero_semana?: number;
        consumoKw_semana?: number;
        coste_semana?: number;
    }[];
    mes_factura?: string;
    anyo_factura?: number;
    consumoKw_mes?: number;
    coste_mes?: number;
    fecha_inicio_mes?: number;
    fecha_fin_mes?: number;
    pagada?: boolean;
}>> & Omit<import("mongoose").FlatRecord<{
    semanas: {
        numero_semana?: number;
        consumoKw_semana?: number;
        coste_semana?: number;
    }[];
    mes_factura?: string;
    anyo_factura?: number;
    consumoKw_mes?: number;
    coste_mes?: number;
    fecha_inicio_mes?: number;
    fecha_fin_mes?: number;
    pagada?: boolean;
}> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
