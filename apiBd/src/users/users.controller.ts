
// @ts-ignore
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./services/user/user.service";
import {UserDto} from "./dto/user.dto/user.dto";


@Controller('api')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Post('user/login')
    async login(@Body() loginData: { email: string; password: string }) {
        const { email, password } = loginData;
        const user = await this.userService.findUserByEmailAndPassword(email, password);
        if (user) {
            user.inicio_sesion = true;
            await user.save();
            return { message: 'Inicio de sesión exitoso' };
        }
        return { message: 'Credenciales inválidas' };
    }

    @Put('user/logout/:idUser')
    async logout(@Param('idUser') idUser: string) {
        const user = await this.userService.getUser(idUser);
        if (user) {
            user.inicio_sesion = false;
            await this.userService.updateStartSesion(idUser, false);
            return { message: 'Cierre de sesión exitoso' };
        }
        return { message: 'Usuario no encontrado' };
    }


    @Post('user')
    async register(@Body() createUserDTO: UserDto) {
        return await this.userService.create(createUserDTO);
    }
    @Get('users')
    async getUsers() {
        return await this.userService.getUsers();
    }
    @Get('users/:idUser')
    async getUser(@Param('idUser') idUser: string) {
        return await this.userService.getUser(idUser);
    }
    @Put('users/modificar/:idUser')
    async updateUser(@Param('idUser')idUser: string, @Body() userDto: UserDto){
        return this.userService.updateUser(idUser, userDto);
    }
    @Delete('users/borrar/:idUser')
    async deleteSerie(@Param('idUser')idUser: string){
        return await this.userService.deleteUser(idUser);
    }

    @Put('users/modificar/cuenta/:dni')
    async updateUserByDNI(@Param('dni') dni: string, @Body('cuentaBancaria') cuenta_bancaria: string) {
        return this.userService.updateUserByDNI(dni, cuenta_bancaria);
    }

    @Get('users/:dni/facturas/:facturaId/pagada')
    async isFacturaPagada(
        @Param('dni') dni: string,
        @Param('facturaId') facturaId: string,
    ): Promise<boolean> {
        return await this.userService.isFacturaPagada(dni, facturaId);
    }

}
