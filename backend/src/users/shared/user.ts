import { IUser } from '../../../../shared/interafces/users/user';
import { email } from '../../../../shared/interafces/users/email';

export class User 
    implements IUser
{
    id: string;
    name: string;
    email: email;

    constructor(
        id: string = "",
        name: string = "",
        email: email = "andre.oliveira@ufcg.edu.ufcg.br",
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
