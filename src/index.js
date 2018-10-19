import './scss/style.scss';
import { PasswordStrength } from './app/main';

const initPwd = new PasswordStrength();

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('keyup', () => {
        initPwd.init();
    })
})