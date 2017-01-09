import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header/Header';
import MainText from './MainText/MainText';
import Navigation from './Navigation/Navigation';
import s from './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Header/>
        <MainText/>
        <Navigation/>
      </div>
    );
  }
}

export default Layout;
