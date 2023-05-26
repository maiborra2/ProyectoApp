import { Model } from 'mongoose';
import { Factura } from "../../interfaces/factura/factura.interface";
import { FacturaDto } from "../../dto/factura.dto/factura.dto";
export declare class FacturaService {
    private facturaModel;
    constructor(facturaModel: Model<Factura>);
    create(createFacturaDTO: FacturaDto): Promise<Factura>;
    getFacturas(): Promise<Factura[]>;
    getFactura(idFactura: string): Promise<Factura>;
    getFacturasPorMes(mes: string): Promise<Factura[]>;
    getFacturasPorUser(user: string): Promise<Factura[]>;
    getFacturasPorAnyo(anyo: number): Promise<Factura[]>;
}
