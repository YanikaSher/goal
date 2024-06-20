export function validateEmail(email: string): boolean {
    const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    return reEmail.test(email);
}

export function validatePassport(passport: string):boolean {
    const rePassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    return rePassword.test(passport)
}