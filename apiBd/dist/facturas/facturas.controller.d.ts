import { FacturaService } from "./services/factura/factura.service";
import { FacturaDto } from "./dto/factura.dto/factura.dto";
export declare class FacturasController {
    private readonly facturaService;
    constructor(facturaService: FacturaService);
    register(createFacturaDTO: FacturaDto): Promise<import("./interfaces/factura/factura.interface").Factura>;
    getFacturas(): Promise<import("./interfaces/factura/factura.interface").Factura[]>;
    getFactura(idFactura: string): Promise<import("./interfaces/factura/factura.interface").Factura>;
    getFacturasPorMes(mes: string): Promise<import("./interfaces/factura/factura.interface").Factura[]>;
    getFacturasPorUser(user: string): Promise<import("./interfaces/factura/factura.interface").Factura[]>;
    getFacturasPorAnyo(anyo: number): Promise<import("./interfaces/factura/factura.interface").Factura[]>;
}
