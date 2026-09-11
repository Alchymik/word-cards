import React from 'react';
import { CardData } from '../types';
import { Card } from './Card';

type CardListProps = {
  cards: CardData[];
};

export const CardList: React.FC<CardListProps> = ({ cards }) => (
  <div className="card-list">
    {cards.map(card => (
      <Card key={card.id} card={card} />
    ))}
  </div>
);
