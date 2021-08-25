import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CIDERROR } from 'src/utils/common';
import { CIDException } from '../utils/http';
import { IUser, UserDto } from './models/user.dto';
import { User, UserDocument } from './models/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async createUser(createUserDto: UserDto): Promise<IUser> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save().catch(err => {
            console.log(err);
            throw new CIDException({cidErrors: [CIDERROR.USER_CREATION_FAILED]});
        });
    }

    async updateUser(updateUserDto: UserDto): Promise<IUser> {
        return await (await this.userModel.findByIdAndUpdate(updateUserDto._id, updateUserDto).catch(err => Promise.reject(CIDERROR.USER_UPDATE_FAILED))).save();
    }

    async deleteUser(_id: string): Promise<UserDocument> {
        return await this.userModel.findByIdAndRemove(_id);
    }

    async findAll(): Promise<IUser[]> {
        return this.userModel.find().exec();
    }

    async findOne(username: string): Promise<IUser> {
        return await this.userModel.findOne({firstName: username}).exec()
    }
}
