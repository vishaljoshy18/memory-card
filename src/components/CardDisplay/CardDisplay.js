import React from 'react';
import Card from './Card';

function CardDisplay() {

	let cards = [{ cardName: 1 }, { cardName: 2 }, { cardName: 3 }, { cardName: 4 }];
	return (
		<div>
            {cards.map((card,index)=><Card cardName={card.cardName}/>)}
			
		</div>
	);
}

export default CardDisplay;
