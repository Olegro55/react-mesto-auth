import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import auth from '../utils/auth';
import success from '../images/success.png';
import error from '../images/error.png';
function Register({ onRegistration }) {

    const navigate = useNavigate();

    const emailInputRef = React.useRef();
    const passwordInputRef = React.useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const inputs = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
        };
        auth
            .register(inputs)
            .then(_ => {
                onRegistration({
                    icon: success,
                    title: 'Вы успешно зарегистрировались!'
                });
                navigate('/sign-in');
            })
            .catch((err) => {
                onRegistration({
                    icon: error,
                    title: 'Что-то пошло не так! Попробуйте ещё раз.'
                });
                console.error(`Ошибка: ${err}`);
            });
    }

    return (
        <main className="content">
            <section className="login">
                <h2 className="login__title">Регистрация</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <fieldset className="login__inputs">
                        <input type="email" name="email" ref={emailInputRef} className="login__input" placeholder="E-mail" required />
                        <input type="password" name="password" ref={passwordInputRef} className="login__input" placeholder="Пароль" required />
                    </fieldset>
                    <button type="submit" aria-label="Войти" className="login__button">Зарегистрироваться</button>
                </form>
                <Link className="login__link" to="/sign-in">Уже зарегистрированы? Войти</Link>
            </section>
        </main>
    );
}

export default Register;