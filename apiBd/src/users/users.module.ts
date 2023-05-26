import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./schemas/user.schema/user.schema";
import {UsersController} from "./users.controller";

@Module({
  imports: [

    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UsersController],
})
export class UsersModule {}
