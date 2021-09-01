import _ from 'lodash';
import React, { useState } from 'react';
import './CardDisplay.css';

function CardDisplay({ incrementScore, resetScore }) {
	const [cards, setCards] = useState([
		{ cardName: 'A', isCardSelected: false, cardIndex: 1 },
		{ cardName: 'B', isCardSelected: false, cardIndex: 2 },
		{ cardName: 'C', isCardSelected: false, cardIndex: 3 },
		{ cardName: 'D', isCardSelected: false, cardIndex: 4 },
	]);

	const shuffleCards = () => {
		const shuffledCards = _.shuffle([...cards]);
		setCards(shuffledCards);
	};

	const selectCard = (index) => {
		console.log(cards[index]);
		const newCards = [...cards];
		newCards[index].isCardSelected = true;
		setCards(newCards);
	};
	const resetCards = () => {
		const resetCards = [...cards];
		resetCards.forEach((card) => {
			card.isCardSelected = false;
		});
		setCards(resetCards);
	};

	const handleCardClick = (e, index) => {
		if (cards[index].isCardSelected) {
			console.log('selected');
			resetScore();
			resetCards();
			shuffleCards();
			console.log('reset', cards);
		} else {
			incrementScore();
			selectCard(index);
			shuffleCards();
		}
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
					<div>Card:-{card.cardName}</div>
				</div>
			))}
		</div>
	);
}

export default CardDisplay;
