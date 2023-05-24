import { Model } from 'mongoose';
import { Empresa } from "../../interfaces/empresa/empresa.interface";
import { EmpresaDto } from "../../dto/empresa.dto/empresa.dto";
export declare class EmpresaService {
    private empresaModel;
    constructor(empresaModel: Model<Empresa>);
    create(createEmpresaDTO: EmpresaDto): Promise<Empresa>;
    getEmpresa(): Promise<Empresa>;
}
