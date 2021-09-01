import React, { useState, useEffect } from 'react';

function Header({ score }) {
	const [highScore, setHighScore] = useState(0);
	useEffect(() => {
		if (score > highScore) {
			setHighScore(score);
		}
		return () => {};
	}, [score]);
	return (
		<div>
			<h1>Memory Card</h1>
			<div>
				<div>Score:{score}</div>
				<div>High Score:{highScore}</div>
			</div>
		</div>
	);
}

export default Header;
