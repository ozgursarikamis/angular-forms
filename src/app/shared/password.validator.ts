import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password.pristine || confirmPassword.pristine) {
        return null; // null: there is no error!
    }

    return password
        && confirmPassword
        && password.value !== confirmPassword.value ? { mismatchedPasswords: true } : null;
}
