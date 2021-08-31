import './App.css';
import CardDisplay from './components/CardDisplay/CardDisplay';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<header>
				<Header />
			</header>
			<main>
				<CardDisplay />
			</main>
		</div>
	);
}

export default App;
