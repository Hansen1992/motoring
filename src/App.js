import React from 'react';
import { hot } from 'react-hot-loader/root';
import AnimatedCursor from 'react-animated-cursor';
import Hero from './components/hero/Hero';
import Production from './components/product/Product';
import Cards from './components/cards/Cards';
import './app.scss';

const App = () => {
	return (
		<>
			<div>
				<AnimatedCursor
					innerSize={16}
					outerSize={0}
					color='214, 68, 36'
					outerAlpha={0.2}
					innerScale={1}
					outerScale={0}
				/>
				<Hero />
				<Production />
				<Cards />
			</div>
		</>
	);
};

export default hot(App);
