import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function forbiddenUsernamesValidator(control: AbstractControl) {
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? { forbiddenName : { value: control.value } } : null;
// }

export function forbiddenUsernamesValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl) => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? { forbiddenName : { value: control.value } } : null;
    };
}
