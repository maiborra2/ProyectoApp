export declare class FacturaDto {
    mes_factura: string;
    anyo_factura: number;
    consumoKw_mes: number;
    coste_mes: number;
    fecha_inicio_mes: number;
    fecha_fin_mes: number;
    pagada: boolean;
    semanas: [
        {
            numero_semana: number;
            consumoKw_semana: number;
            coste_semana: number;
        }
    ];
}
