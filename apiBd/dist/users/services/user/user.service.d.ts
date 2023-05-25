import { Model } from 'mongoose';
import { User } from "../../interfaces/user/user.interface";
import { UserDto } from "../../dto/user.dto/user.dto";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDTO: UserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(idUser: string): Promise<User>;
    updateUser(idUser: string, userDto: UserDto): Promise<User>;
    deleteUser(idUser: string): Promise<User>;
    findUserByEmailAndPassword(email: string, password: string): Promise<User>;
    updateStartSesion(idUser: string, startSesion: boolean): Promise<User>;
}
