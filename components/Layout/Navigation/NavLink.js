import React from 'react';
import s from './NavLink.css';

class NavLink extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>
          <i className='fa fa-check fa-lg'></i>
          <div className={s.text}>
            Diabetic Hyperinflation
          </div>
        </div>
      </div>
    );
  }

}

export default NavLink;
