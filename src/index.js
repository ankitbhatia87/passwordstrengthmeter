import './scss/style.scss';
import { PasswordStrength } from './app/main';

const initPwd = new PasswordStrength();

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('keyup', function () {
        initPwd.init(this.value);
    })

    let setBarWidth = () => {
        const passwordStrengthBar = document.getElementById('strengthBar');
        let width = passwordStrengthBar.parentElement.parentElement.offsetWidth;
        passwordStrengthBar.style.width = width + 'px';
    }

    setBarWidth();
})