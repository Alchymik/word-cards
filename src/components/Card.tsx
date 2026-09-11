import React, { useState } from 'react';
import { CardData } from '../types';

const titles = [
  'Word of the Day',
  'Слово дня',
  'Учись с удовольствием',
  'Расширяй словарный запас',
];

type CardProps = {
  card: CardData;
};

export const Card: React.FC<CardProps> = ({ card }) => {
  const [flipped, setFlipped] = useState(false);
  const [title] = useState(() => titles[Math.floor(Math.random() * titles.length)]);

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-header">
            <span className="card-title">{title}</span>
          </div>
          
          <div className="card-content">
            <h2 className="card-word">{card.word}</h2>
            <p className="card-pos">{card.partOfSpeech}</p>
            <p className="card-definition">{card.definition}</p>
            <p className="card-example">"{card.example}"</p>
          </div>

          <button className="card-button" onClick={() => setFlipped(true)}>
            {card.actionLabel}
          </button>
        </div>

        <div className="card-back">
          <div className="card-header">
            <span className="card-title">Перевод</span>
          </div>
          
          <div className="card-content">
            <h2 className="card-word">{card.translation}</h2>
          </div>

          <button className="card-button" onClick={() => setFlipped(false)}>
            {card.actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
};