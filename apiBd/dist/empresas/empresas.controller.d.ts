import { EmpresaService } from "./services/empresa/empresa.service";
import { EmpresaDto } from "./dto/empresa.dto/empresa.dto";
export declare class EmpresasController {
    private readonly empresaService;
    constructor(empresaService: EmpresaService);
    register(createEmpresaDTO: EmpresaDto): Promise<import("./interfaces/empresa/empresa.interface").Empresa>;
    getEmpresa(): Promise<import("./interfaces/empresa/empresa.interface").Empresa>;
}
