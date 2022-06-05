import * as mongoose from 'mongoose';
import { IUser } from "../../../../shared/interafces/users/user";

interface IUserBackend
    extends IUser, mongoose.Document {
    id: string
}

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
});

export const User: mongoose.Model<IUserBackend> = mongoose.model('User', UserSchema);