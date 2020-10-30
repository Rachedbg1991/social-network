import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../_services/user.service';

export class EmailValidator{

    public static isValidEmail(userService: UserService):AsyncValidatorFn{
        return (control: AbstractControl): Observable<ValidationErrors> => {
            return userService.checkEmail(control.value).pipe(
              map((result: boolean) => result ? null : {invalidAsync: true})
            );
          };
    }
}
