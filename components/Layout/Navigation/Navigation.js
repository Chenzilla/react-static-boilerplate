import React from 'react';
import NavLink from './NavLink';
import Card from './Card';
import s from './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.container}>
      	<ul className={s.list}>
	    		<NavLink/>
	    		<NavLink/>
	    		<Card/>
	    	</ul>
      </div>
    );
  }
}

export default Navigation;
