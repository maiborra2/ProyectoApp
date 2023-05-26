import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {FacturaService} from "./services/factura/factura.service";
import {FacturaDto} from "./dto/factura.dto/factura.dto";


@Controller('api')
export class FacturasController {
    constructor(private readonly facturaService: FacturaService) {}

    @Post('factura/register')
    async register(@Body() createFacturaDTO: FacturaDto) {
        const factura = await this.facturaService.create(
            createFacturaDTO,
        );
        return factura;
    }
    @Get('facturas')
    async getFacturas() {
        const facturas = await this.facturaService.getFacturas();
        return facturas;
    }
    @Get('facturas/:idFactura')
    async getFactura(@Param('idFactura') idFactura: string) {
        return await this.facturaService.getFactura(idFactura);
    }


    //por mes de factura "Mayo"
    @Get('facturas/mes/:mes')
    async getFacturasPorMes(@Param('mes') mes: string) {
        return await this.facturaService.getFacturasPorMes(mes);
    }

    @Get('facturas/user/:user')
    async getFacturasPorUser(@Param('user') user: string) {
        return await this.facturaService.getFacturasPorUser(user);
    }

    @Get('facturas/anyo/:anyo')
    async getFacturasPorAnyo(@Param('anyo') anyo: number) {
        return await this.facturaService.getFacturasPorAnyo(anyo);
    }

}
