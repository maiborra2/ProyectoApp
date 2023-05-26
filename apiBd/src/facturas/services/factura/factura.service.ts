import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Factura} from "../../interfaces/factura/factura.interface";
import {FacturaDto} from "../../dto/factura.dto/factura.dto";
@Injectable()
export class FacturaService {
    constructor(

        @InjectModel('Factura') private facturaModel:

            Model<Factura>,
    ) {}
    async create(createFacturaDTO: FacturaDto):
        Promise<Factura> {

        const createdFactura = new

        this.facturaModel(createFacturaDTO);
        return await createdFactura.save();
    }
    async getFacturas(): Promise<Factura[]> {
        const facturas = await this.facturaModel.find();
        return facturas;
    }
    async getFactura(idFactura: string): Promise<Factura> {
        const factura = this.facturaModel.findOne({ _id:
            idFactura });
        return factura;
    }

    //buscamos por mes "Mayo"
    async getFacturasPorMes(mes: string): Promise<Factura[]> {
        const facturas = await this.facturaModel.find({ mes_factura: mes });
        return facturas;
    }

    //buscamos por id de usuario dentro de facturas
    async getFacturasPorUser(user: string): Promise<Factura[]> {
        const facturas = await this.facturaModel.find({ user: user });
        return facturas;
    }

    //buccamos por año de factura
    async getFacturasPorAnyo(anyo: number): Promise<Factura[]> {
        const facturas = await this.facturaModel.find({anyo_factura: anyo});
        return facturas;
    }

}
