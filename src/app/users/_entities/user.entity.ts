import { GenericEntity } from 'src/app/main/_entities/Generic.entity';

export class User extends GenericEntity{
    userName: string;
    password: string;
    email: string;
    phoneNumber?: number;
    birthDate: Date;
}