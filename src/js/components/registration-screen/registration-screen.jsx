import React, {Fragment, useState, useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {AppRoute, DEFAULT_LANG, Langs} from '../../utils/const';
import {validateEmail, validateName, validatePhone} from '../../utils/utils';
import {ActionCreator as UserCreator} from '../../store/user/user';
import {redirectToRoute} from '../../store/redirect/redirect';
import {connect} from 'react-redux';

const RegisrationScreen = (props) => {
  const {onFormSubmit, onSuccessFormSubmit} = props;
  const firstRender = useRef(true);
  const form = useRef();
  const checkbox = useRef();
  const [isValid, setValid] = useState(false);
  const [isHide, setHide] = useState(true);
  const [language, setLang] = useState(DEFAULT_LANG);
  const [isValidLang, setValidLang] = useState(true);
  const [name, setName] = useState(``);
  const [isValidName, setValidName] = useState(true);
  const [email, setEmail] = useState(``);
  const [isValidEmail, setValidEmail] = useState(true);
  const [phone, setPhone] = useState(``);
  const [isValidPhone, setValidPhone] = useState(true);
  const [check, setCheck] = useState(true);

  const handleNameChange = useCallback((evt) => {
    setHide(true);
    setName(evt.target.value);
    setValid(isValidEmail && isValidName && isValidPhone);
  }, [name, email, phone]);

  const handleEmailChange = useCallback((evt) => {
    setHide(true);
    setEmail(evt.target.value);
    setValid(isValidEmail && isValidName && isValidPhone);
  }, [email, name, phone]);

  const handlePhoneChange = useCallback((evt) => {
    setHide(true);
    setPhone(evt.target.value);
    setValid(isValidEmail && isValidName && isValidPhone);
  }, [phone, name, email]);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (language !== DEFAULT_LANG && checkbox.current.checked) {
      if (isValid) {
        onFormSubmit({
          name,
          phone,
          email,
          language
        });
        onSuccessFormSubmit(AppRoute.INFO);
      }
    } else if (language === DEFAULT_LANG) {
      setValidLang(false);
      return;
    } else if (!checkbox.checked) {
      setCheck(false);
      return;
    }
  }, [name, phone, email, language, check, isValid]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setHide(true);
    setValidName(validateName(name));
    setValidEmail(validateEmail(email));
    setValidPhone(validatePhone(phone));
    setValid(isValidEmail && isValidName && isValidPhone);
  }, [name, email, phone, isValidEmail, isValidName, isValidPhone]);

  return <Fragment>
    <h1 className="visually-hidden">Форма регистрации</h1>
    <form className="login-form" ref={form} onSubmit={handleFormSubmit}>
      <fieldset className="login-form__fieldset">
        <legend className="login-form__title">Регистрация</legend>
        <p className="login-form__text">
          <span>Уже есть аккаунт?</span>
          <a href="#" className="login-form__link">Войти</a>
        </p>
        <ul className="login-form__list">
          <li className="login-form__item">
            <label className="login-form__label" htmlFor="user-name">Имя</label>
            <input className="login-form__input" id="user-name" type="text" name="name" placeholder="Введите Ваше имя" required tabIndex="1"
              onChange={handleNameChange}
            />
            {!isValidName && <p className="login-form__text-warning">Введено некореектное значение</p>}
          </li>
          <li className="login-form__item">
            <label className="login-form__label" htmlFor="user-email">Email</label>
            <input className="login-form__input" id="user-email" type="email" name="email" placeholder="Введите ваш email" required tabIndex="2"
              onChange={handleEmailChange}
            />
            {!isValidEmail && <p className="login-form__text-warning">Введено некореектное значение</p>}
          </li>
          <li className="login-form__item">
            <label className="login-form__label" htmlFor="user-phone">Номер телефона</label>
            <input className="login-form__input" id="user-phone" type="tel" name="phone" placeholder="Введите номер телефона" required tabIndex="3"
              onChange={handlePhoneChange}
            />
            {!isValidPhone && <p className="login-form__text-warning">Введено некореектное значение</p>}
          </li>
          <li className="login-form__item">
            <span className="login-form__label">Язык</span>
            <div className="login-form__select select" id="lang" tabIndex="4"
              onClick={() => {
                setHide(!isHide);
              }}
            >
              <p className={language !== `Язык` ? `select__current-option select__current-option--active` : `select__current-option`}>{language}</p>
              <svg className="login-form__dropdown-icon" width="16" height="9">
                <use xlinkHref="#dropdown"></use>
              </svg>
            </div>
            {!isValidLang && <p className="login-form__text-warning">Выберите из списка</p>}
            <div className={isHide ? `select__options select__options--hide` : `select__options`}>
              {Langs.map((lang) => {
                return <p key={lang.id}
                  className={language === lang.lang ? `select__option select__option--active` : `select__option`}
                  onClick={() => {
                    setLang(lang.lang);
                    setValidLang(true);
                    setHide(true);
                  }}>
                  {lang.lang}
                </p>;
              })}
            </div>
          </li>
          <li className="login-form__item">
            <input className="login-form__checkbox" ref={checkbox} id="agreement" type="checkbox" onClick={(evt) => setCheck(evt.target.checked)}/>
            <label className="login-form__checkbox-label" htmlFor="agreement">Принимаю <a href="#" className="login-form__link">условия</a> использования</label>
            {/* <input className="login-form__checkbox" ref={checkbox} id="agreement" type="checkbox" onClick={(evt) => setCheck(evt.target.checked)}/> */}
            <svg className="login-form__check-icon" width="22" height="16">
              <use xlinkHref="#check"></use>
            </svg>
            {!check && <p className="login-form__text-warning login-form__text-warning--checkbox">Необходимо подтверждение</p>}
          </li>
        </ul>
        <button className="login-form__button" disabled={!isValid}>Зарегистрироваться</button>
      </fieldset>
    </form>
  </Fragment>;
};

RegisrationScreen.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onSuccessFormSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(userInfo) {
    dispatch(UserCreator.setUserInfo(userInfo));
  },
  onSuccessFormSubmit(route) {
    dispatch(redirectToRoute(route));
  },
});

export {RegisrationScreen};
export default connect(null, mapDispatchToProps)(RegisrationScreen);
