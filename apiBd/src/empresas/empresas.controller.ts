import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {EmpresaService} from "./services/empresa/empresa.service";
import {EmpresaDto} from "./dto/empresa.dto/empresa.dto";

@Controller('api')
export class EmpresasController {
    constructor(private readonly empresaService: EmpresaService) {}
    @Post('empresa/register')
    async register(@Body() createEmpresaDTO: EmpresaDto) {
        const empresa = await this.empresaService.create(
            createEmpresaDTO,
        );
        return empresa;
    }
    @Get('empresa')
    async getEmpresa() {
        const empresa = await this.empresaService.getEmpresa();
        return empresa;
    }
}
