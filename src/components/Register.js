import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from './useForm';
import auth from '../utils/auth';
import success from '../images/success.png';
import error from '../images/error.png';
function Register({ onRegistration }) {

    const navigate = useNavigate();
    const defaultInputs = {
        email: '',
        password: ''
    };
    const { values, handleChange } = useForm(defaultInputs);

    function handleSubmit(event) {
        event.preventDefault();
        auth
            .register(values)
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
                        <input type="email" name="email" value={values.email} onChange={handleChange} className="login__input" placeholder="E-mail" required />
                        <input type="password" name="password" value={values.email} onChange={handleChange} className="login__input" placeholder="Пароль" required />
                    </fieldset>
                    <button type="submit" aria-label="Войти" className="login__button">Зарегистрироваться</button>
                </form>
                <Link className="login__link" to="/sign-in">Уже зарегистрированы? Войти</Link>
            </section>
        </main>
    );
}

export default Register;