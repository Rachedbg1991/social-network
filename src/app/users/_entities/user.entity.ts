import { GenericEntity } from 'src/app/main/_entities/Generic.entity';

export class User extends GenericEntity{
    userName: string;
    email: string;
    phoneNumber?: number;
    birthDate: Date;
}