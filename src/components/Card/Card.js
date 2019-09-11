import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;

    return (
      <div className={styles.component}>
        <h4 className={styles.title}>{title}</h4>
      </div>
    );
  }
}

export default Card;
