import './App.css';
import CardDisplay from './components/CardDisplay/CardDisplay';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
	const [score, setScore] = useState(0);

	const incrementScore = () => {
		setScore((prev) => prev + 1);
		console.log(score);
	};
	const resetScore = () => {
		setScore(0);
	};
	return (
		<div className="App">
			<header>
				<Header score={score} />
			</header>
			<main>
				<CardDisplay incrementScore={incrementScore} resetScore={resetScore} />
			</main>
		</div>
	);
}

export default App;
