"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasController = void 0;
const common_1 = require("@nestjs/common");
const factura_service_1 = require("./services/factura/factura.service");
const factura_dto_1 = require("./dto/factura.dto/factura.dto");
let FacturasController = class FacturasController {
    constructor(facturaService) {
        this.facturaService = facturaService;
    }
    async register(createFacturaDTO) {
        const factura = await this.facturaService.create(createFacturaDTO);
        return factura;
    }
    async getFacturas() {
        const facturas = await this.facturaService.getFacturas();
        return facturas;
    }
    async getFactura(idFactura) {
        return await this.facturaService.getFactura(idFactura);
    }
    async getFacturasPorMes(mes) {
        return await this.facturaService.getFacturasPorMes(mes);
    }
    async getFacturasPorUser(user) {
        return await this.facturaService.getFacturasPorUser(user);
    }
    async getFacturasPorAnyo(anyo) {
        return await this.facturaService.getFacturasPorAnyo(anyo);
    }
};
__decorate([
    (0, common_1.Post)('factura/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [factura_dto_1.FacturaDto]),
    __metadata("design:returntype", Promise)
], FacturasController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('facturas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FacturasController.prototype, "getFacturas", null);
__decorate([
    (0, common_1.Get)('facturas/:idFactura'),
    __param(0, (0, common_1.Param)('idFactura')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacturasController.prototype, "getFactura", null);
__decorate([
    (0, common_1.Get)('facturas/mes/:mes'),
    __param(0, (0, common_1.Param)('mes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacturasController.prototype, "getFacturasPorMes", null);
__decorate([
    (0, common_1.Get)('facturas/user/:user'),
    __param(0, (0, common_1.Param)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacturasController.prototype, "getFacturasPorUser", null);
__decorate([
    (0, common_1.Get)('facturas/anyo/:anyo'),
    __param(0, (0, common_1.Param)('anyo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FacturasController.prototype, "getFacturasPorAnyo", null);
FacturasController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [factura_service_1.FacturaService])
], FacturasController);
exports.FacturasController = FacturasController;
//# sourceMappingURL=facturas.controller.js.map