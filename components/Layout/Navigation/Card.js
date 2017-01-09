import React from 'react';
import s from './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.question}>
          What diagnosis best matches the highlighted term?
        </div>
        <ul className={s.answers}>
          <div className={s.answer}>Abdominal distension (gaseous)</div>
          <div className={s.answer}>Not relevant</div>
          <div className={s.search}>Search...</div>
        </ul>
      </div>
    );
  }

}

export default Card;
