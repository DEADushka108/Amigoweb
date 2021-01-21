import React, {Fragment} from 'react';


const Main = () => {
  return <Fragment>
    <h1 className="visually-hidden">Форма регистрации</h1>
    <form className="login-form">
      <fieldset>
        <legend className="login-form__title">Регистрация</legend>
        <p className="login-form__text">
          <span>Уже есть аккаунт?</span>
          <a href="#" className="login-form__link">Войти</a>
        </p>
        <ul className="login-form__list">
          <li className="login-form__item">
            <label className="login-form__label" htmlFor="user-name">Имя</label>
            <input className="login-form__input" id="user-name" type="text" name="name" placeholder="Введите Ваше имя" required/>
          </li>
          <li className="login-form__item">
            <label className="login-form__label" htmlFor="user-email">Email</label>
            <input className="login-form__input" id="user-email" type="email" name="email" placeholder="Введите ваш email" required/>
          </li>
          <li className="login-form__item">
            <label className="login-form__label" htmlFor="user-phone">Номер телефона</label>
            <input className="login-form__input" id="user-phone" type="tel" name="phone" placeholder="Введите номер телефона" required/>
          </li>
          <li className="login-form__item">
            <label className="login-form__label" htmlFor="lang">Язык</label>
            <select className="login-form__input" id="lang" placeholder="Язык">
              <option value="ru">Русский</option>
              <option value="en">Английский</option>
              <option value="cn">Китайский</option>
              <option value="es">Испанский</option>
            </select>
          </li>
          <li className="login-form__item">
            <label className="login-form__label" htmlFor="agreement">Принимаю <a href="#" className="login-form__link">условия</a> использования</label>
            <input className="login-form__checkbox" id="agreement" type="checkbox" required/>
          </li>
        </ul>
        <button className="login-form__button">Зарегистрироваться</button>
      </fieldset>
    </form>
  </Fragment>;
};

export default Main;
