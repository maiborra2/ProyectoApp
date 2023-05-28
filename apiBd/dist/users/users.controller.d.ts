import { UserService } from "./services/user/user.service";
import { UserDto } from "./dto/user.dto/user.dto";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    login(email: string): Promise<import("./interfaces/user/user.interface").User | {
        message: string;
    }>;
    logout(idUser: string): Promise<{
        message: string;
    }>;
    register(createUserDTO: UserDto): Promise<import("./interfaces/user/user.interface").User>;
    getUsers(): Promise<import("./interfaces/user/user.interface").User[]>;
    getUser(idUser: string): Promise<import("./interfaces/user/user.interface").User>;
    updateUser(idUser: string, userDto: UserDto): Promise<import("./interfaces/user/user.interface").User>;
    deleteSerie(idUser: string): Promise<import("./interfaces/user/user.interface").User>;
    updateUserByDNI(dni: string, cuenta_bancaria: string): Promise<import("./interfaces/user/user.interface").User>;
    isFacturaPagada(dni: string, facturaId: string): Promise<boolean>;
}
