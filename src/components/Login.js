import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from './useForm';
import auth from '../utils/auth';

function Login({ onLogin }) {

    const navigate = useNavigate();
    const defaultInputs = {
        email: '',
        password: ''
    };
    const { values, handleChange } = useForm(defaultInputs);

    function handleSubmit(event) {
        event.preventDefault();

        auth
            .authorize(values)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    onLogin(values.email);
                    navigate("/");
                }
            })
            .catch((err) => {
                console.error(`Ошибка: ${err}`);
            });
    }

    return (
        <main className="content">
            <section className="login">
                <h2 className="login__title">Вход</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <fieldset className="login__inputs">
                        <input type="email" name="email" value={values.email} onChange={handleChange} className="login__input" placeholder="E-mail" required />
                        <input type="password" name="password" value={values.password} onChange={handleChange} className="login__input" placeholder="Пароль" required />
                    </fieldset>
                    <button type="submit" aria-label="Войти" className="login__button">Войти</button>
                </form>
            </section>
        </main>
    );
}

export default Login;