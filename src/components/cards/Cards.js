import React from 'react';
import styles from './cards.module.scss';
import Tilt from 'react-vanilla-tilt';

const Cards = () => {
	return (
		<section className={styles.cardsWrapper}>
			<Tilt options={{ scale: 2, max: 25 }}>
				<div className={`${styles.card} ${styles.image1}`}></div>
			</Tilt>
			<Tilt options={{ scale: 2, max: 25 }}>
				<div className={`${styles.card} ${styles.image2}`}></div>
			</Tilt>
			<Tilt options={{ scale: 2, max: 25 }}>
				<div className={`${styles.card} ${styles.image3}`}></div>
			</Tilt>
		</section>
	);
};

export default Cards;
