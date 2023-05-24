import { Module } from '@nestjs/common';
import { EmpresaService } from './services/empresa/empresa.service';
import {MongooseModule} from "@nestjs/mongoose";
import {EmpresaSchema} from "./schemas/empresa.schema/empresa.schema";
import {EmpresasController} from "./empresas.controller";

@Module({
  imports: [

    MongooseModule.forFeature([{ name: 'Empresa', schema: EmpresaSchema }]),
  ],
  providers: [EmpresaService],
  controllers: [EmpresasController],
})
export class EmpresasModule {}
