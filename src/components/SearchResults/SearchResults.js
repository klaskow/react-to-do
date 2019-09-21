import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };

  render() {
    const { cards } = this.props;

    return (
      <Container>
        {cards.map(card => {
          return (
            <Link key={card.id} to={`/list/${card.listId}`}>
              <Card {...card}></Card>
            </Link>
          );
        })}
      </Container>
    );
  }
}

export default SearchResults;
