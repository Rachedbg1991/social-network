import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isValidConfirmation(dataToCompare: string): ValidatorFn{
    return (control: AbstractControl): { [ key: string]: boolean } | null => {
        return (control.value !== dataToCompare)? { isInValid: true }: null;
    }
}