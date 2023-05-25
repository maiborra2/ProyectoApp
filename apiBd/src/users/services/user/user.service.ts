import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from "../../interfaces/user/user.interface";
import {UserDto} from "../../dto/user.dto/user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async create(createUserDTO: UserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDTO);
        return await createdUser.save();
    }

    async getUsers(): Promise<User[]> {
        return this.userModel.find();
    }
    async getUser(idUser: string): Promise<User> {
        return this.userModel.findById(idUser);
    }

    async updateUser(idUser: string, userDto: UserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(idUser,
            {$set: userDto}, {new: true});
    }

    async deleteUser(idUser: string): Promise<User>{
        return this.userModel.findByIdAndDelete(idUser);
    }

    async findUserByEmailAndPassword(email: string, password: string): Promise<User> {
        return this.userModel.findOne({ email, contrasenya: password });
    }

    async updateStartSesion(idUser: string, startSesion: boolean): Promise<User> {
        return this.userModel.findByIdAndUpdate(idUser, { inicio_sesion: startSesion }, { new: true });
    }


}
