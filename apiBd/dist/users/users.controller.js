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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./services/user/user.service");
const user_dto_1 = require("./dto/user.dto/user.dto");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async login(loginData) {
        const { email, password } = loginData;
        const user = await this.userService.findUserByEmailAndPassword(email, password);
        if (user) {
            user.inicio_sesion = true;
            await user.save();
            return { message: 'Inicio de sesión exitoso' };
        }
        return { message: 'Credenciales inválidas' };
    }
    async logout(idUser) {
        const user = await this.userService.getUser(idUser);
        if (user) {
            user.inicio_sesion = false;
            await this.userService.updateStartSesion(idUser, false);
            return { message: 'Cierre de sesión exitoso' };
        }
        return { message: 'Usuario no encontrado' };
    }
    async register(createUserDTO) {
        return await this.userService.create(createUserDTO);
    }
    async getUsers() {
        return await this.userService.getUsers();
    }
    async getUser(idUser) {
        return await this.userService.getUser(idUser);
    }
    async updateUser(idUser, userDto) {
        return this.userService.updateUser(idUser, userDto);
    }
    async deleteSerie(idUser) {
        return await this.userService.deleteUser(idUser);
    }
};
__decorate([
    (0, common_1.Post)('user/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Put)('user/logout/:idUser'),
    __param(0, (0, common_1.Param)('idUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('users/:idUser'),
    __param(0, (0, common_1.Param)('idUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)('users/modificar/:idUser'),
    __param(0, (0, common_1.Param)('idUser')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('users/borrar/:idUser'),
    __param(0, (0, common_1.Param)('idUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteSerie", null);
UsersController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map