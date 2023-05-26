import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Empresa} from "../../interfaces/empresa/empresa.interface";
import {EmpresaDto} from "../../dto/empresa.dto/empresa.dto";
@Injectable()
export class EmpresaService {
    constructor(

        @InjectModel('Empresa') private empresaModel: Model<Empresa>,
    ) {}
    async create(createEmpresaDTO: EmpresaDto):
        Promise<Empresa> {
        const createdEmpresa = new
        this.empresaModel(createEmpresaDTO);
        return await createdEmpresa.save();
    }
    async getEmpresa(): Promise<Empresa> {
        const empresa = await this.empresaModel.findOne();
        return empresa;
    }

}
