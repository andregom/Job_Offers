import { IUser } from '../../../../shared/interafces/users/user';
import { email } from '../../../../shared/interafces/users/email';

export class User 
    implements IUser
{
    id: string;
    name: string;
    email: email;
    password: string;

    constructor(
        id: string = "",
        name: string = "",
        email: email = "andre.oliveira@ufcg.edu.ufcg.br",
        password: string = "",
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
