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
export declare const EmpresaSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    direccion: {
        tipoVia?: string;
        calle?: string;
        numero?: string;
        ciudad?: string;
        provincia?: string;
        cp?: number;
        pais?: string;
        telefono_oficina?: string;
    }[];
    horario: {
        dia?: number;
        apertura?: number;
        cierre?: number;
    }[];
    comentarios: {
        email?: string;
        comentario?: string;
        puntuacion?: number;
    }[];
    preguntas_frecuentes: {
        pregunta?: string;
        respuesta?: string;
    }[];
    nombre?: string;
    img_logo?: string;
    telefono_at_cliente?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    direccion: {
        tipoVia?: string;
        calle?: string;
        numero?: string;
        ciudad?: string;
        provincia?: string;
        cp?: number;
        pais?: string;
        telefono_oficina?: string;
    }[];
    horario: {
        dia?: number;
        apertura?: number;
        cierre?: number;
    }[];
    comentarios: {
        email?: string;
        comentario?: string;
        puntuacion?: number;
    }[];
    preguntas_frecuentes: {
        pregunta?: string;
        respuesta?: string;
    }[];
    nombre?: string;
    img_logo?: string;
    telefono_at_cliente?: string;
}>> & Omit<import("mongoose").FlatRecord<{
    direccion: {
        tipoVia?: string;
        calle?: string;
        numero?: string;
        ciudad?: string;
        provincia?: string;
        cp?: number;
        pais?: string;
        telefono_oficina?: string;
    }[];
    horario: {
        dia?: number;
        apertura?: number;
        cierre?: number;
    }[];
    comentarios: {
        email?: string;
        comentario?: string;
        puntuacion?: number;
    }[];
    preguntas_frecuentes: {
        pregunta?: string;
        respuesta?: string;
    }[];
    nombre?: string;
    img_logo?: string;
    telefono_at_cliente?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
