"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasModule = void 0;
const common_1 = require("@nestjs/common");
const factura_service_1 = require("./services/factura/factura.service");
const mongoose_1 = require("@nestjs/mongoose");
const factura_schema_1 = require("./schemas/factura.schema/factura.schema");
const facturas_controller_1 = require("./facturas.controller");
let FacturasModule = class FacturasModule {
};
FacturasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Factura', schema: factura_schema_1.FacturaSchema }]),
        ],
        providers: [factura_service_1.FacturaService],
        controllers: [facturas_controller_1.FacturasController]
    })
], FacturasModule);
exports.FacturasModule = FacturasModule;
//# sourceMappingURL=facturas.module.js.map