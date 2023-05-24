import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./services/user/user.service";
import {UserDto} from "./dto/user.dto/user.dto";

@Controller('api')
export class UsersController {
    constructor(private readonly userService: UserService) {}
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

    //ashdiuashd
}
