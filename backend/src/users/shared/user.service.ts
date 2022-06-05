import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly UserModel: Model<User> ) {  }

    async getAll() {
        return await this.UserModel.find().exec();
    }

    async getById(id: string) {
        return await this.UserModel.findById(id).exec();
    }

    async getByEmail(email: string) {
        return await this.UserModel.findOne({ email }).exec();
    }

    async create(User: User) {
        const createdUser = new this.UserModel(User);
        return await createdUser.save();
    }

    async update(id: string, User: User) {
        return await this.UserModel.findOneAndUpdate({ _id: id }, User).exec();
    }

    async delete(id: string) {
        return await this.UserModel.deleteOne({ _id: id }).exec();
    }

    async deleteMany() {
        return await this.UserModel.deleteMany({ name: undefined }).exec();
    }

}