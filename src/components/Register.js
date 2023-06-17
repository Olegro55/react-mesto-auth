import React from 'react';
import { useNavigate } from "react-router-dom";
import auth from '../utils/auth';

function Register({ }) {

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
                navigate('/sign-in');
            })
            .catch((err) => {
                console.error(`Ошибка: ${err}`);
            });
    }

    return (
        <main className="content">
            <section className="login">
                <h2 className="login__title">Регистрация</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <fieldset className="login__inputs">
                        <input type="email" name="email" ref={emailInputRef} className="login__input" placeholder="E-mail" />
                        {/* required /> */}
                        <input type="password" name="password" ref={passwordInputRef} className="login__input" placeholder="Пароль" />
                        {/* required /> */}
                        <button type="submit" aria-label="Войти" className="login__button">Зарегистрироваться</button>
                    </fieldset>
                </form>
            </section>
        </main>
    );
}

export default Register;