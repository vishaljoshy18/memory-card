import _ from 'lodash';
import React, { useState } from 'react';
import Card from './Card';
import './CardDisplay.css';

function CardDisplay() {
	const [cards, setCards] = useState([
		{ cardName: 1, isCardSelected: false, cardIndex: 1 },
		{ cardName: 2, isCardSelected: false, cardIndex: 2 },
		{ cardName: 3, isCardSelected: false, cardIndex: 3 },
		{ cardName: 4, isCardSelected: false, cardIndex: 4 },
	]);

	const shuffleCards = () => {
		const shuffledCards = _.shuffle(cards);
		setCards(shuffledCards);
	};

	const handleCardClick = (e, index) => {
		shuffleCards();
	};

	return (
		<div className="card-display">
			{cards.map((card, index) => (
				<div
					key={index}
					className="card"
					onClick={(e) => {
						handleCardClick(e, index);
					}}
				>
					<Card cardName={card.cardName} />
				</div>
			))}
		</div>
	);
}

export default CardDisplay;
