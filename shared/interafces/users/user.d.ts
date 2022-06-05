import { email, IEmail } from './email';

export interface IUser 
    extends IEmail
{
    id: string;
    name: string;
    email: email
}