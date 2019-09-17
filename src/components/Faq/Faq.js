import React, { Component } from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

export class Faq extends Component {
  render() {
    return (
      <Container>
        <Hero titleText="FAQ" imageSrc={settings.faq.image} />
        <h2>{settings.faq.title}</h2>
        <p>{settings.faq.content}</p>
      </Container>
    );
  }
}

export default Faq;
