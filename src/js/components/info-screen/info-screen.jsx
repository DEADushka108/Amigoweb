import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserInfo} from '../../store/user/selector';

const InfoScreen = (props) => {
  const {userInfo} = props;

  return <Fragment>
    <h1>Отправленные данные</h1>
    <div className="select__options">
      <p className="select__option">Имя: {userInfo.name}</p>
      <p className="select__option">Почта: {userInfo.email}</p>
      <p className="select__option">Телефон: {userInfo.phone}</p>
      <p className="select__option">Язык: {userInfo.language}</p>
    </div>
  </Fragment>;
};

InfoScreen.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
});

export {InfoScreen};
export default connect(mapStateToProps)(InfoScreen);
