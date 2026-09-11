import React from 'react';
import { CardList } from '../components/CardList';
import { cards } from '../data/cards';

export const CardsPage: React.FC = () => (
  <div className="page-body">
    <h1>Карточки для изучения слов</h1>
    <CardList cards={cards} />
  </div>
);
