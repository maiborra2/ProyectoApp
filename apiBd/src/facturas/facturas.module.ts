import { Module } from '@nestjs/common';
import { FacturaService } from './services/factura/factura.service';
import {MongooseModule} from "@nestjs/mongoose";
import {FacturaSchema} from "./schemas/factura.schema/factura.schema";
import {FacturasController} from "./facturas.controller";

@Module({
  imports: [

    MongooseModule.forFeature([{ name: 'Factura', schema:

      FacturaSchema }]),
  ],
  providers: [FacturaService],
  controllers: [FacturasController]
})
export class FacturasModule {}
