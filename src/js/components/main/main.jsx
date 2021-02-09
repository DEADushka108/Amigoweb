import React, {Fragment, useState} from 'react';
import {Langs} from '../../utils/const';


const Main = () => {
  const [isValid, setValid] = useState(false);
  const [isHide, setHide] = useState(true);
  const [language, setLang] = useState(`Язык`);

  return <Fragment>
    <h1 className="visually-hidden">Форма регистрации</h1>
    <form className="login-form">
      <fieldset className="login-form__fieldset">
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
            <span className="login-form__label">Язык</span>
            <div className="login-form__input select" id="lang" onClick={() => {
              setHide(!isHide);
            }}>
              <p className={language !== `Язык` ? `select__current-option select__current-option--active` : `select__current-option`}>{language}</p>
            </div>
            <div className={isHide ? `select__options select__options--hide` : `select__options`}>
              {Langs.map((lang) => {
                return <p key={lang.id} className={language === lang.lang ? `select__option select__option--active` : `select__option`} onClick={() => {
                  setLang(lang.lang);
                  setHide(!isHide);
                }}>{lang.lang}</p>;
              })}
            </div>
          </li>
          <li className="login-form__item">
            <label className="login-form__checkbox-label" htmlFor="agreement">Принимаю <a href="#" className="login-form__link">условия</a> использования</label>
            <input className="login-form__checkbox" id="agreement" type="checkbox" required/>
            <svg className="login-form__check-icon" width="22" height="16">
              <use xlinkHref="#check"></use>
            </svg>
          </li>
        </ul>
        <button className="login-form__button" disabled={!isValid}>Зарегистрироваться</button>
      </fieldset>
    </form>
  </Fragment>;
};

export default Main;
