import { GenericEntity } from 'src/app/main/_entities/Generic.entity';
import { Sexe } from './sexe.enum';

export class User extends GenericEntity{
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber?: number;
    birthDate: Date;
    sexe: Sexe;
}