import React, { useEffect } from 'react';
import Typed from 'react-typed';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin.js';
import styles from './hero.module.scss';

const Hero = () => {
	useEffect(() => {
		introAnimation();
	}, []);

	const introAnimation = () => {
		var rule = CSSRulePlugin.getRule('._2x-hYoMDVC0XQ4O863Jr-Q:after'); //get the rule
		gsap.fromTo(
			'#contactBanner',
			{
				opacity: 0,
				duration: 1,
				x: -50,
			},
			{
				opacity: 1,
				duration: 2,
				delay: 5.5,
				x: 0,
			}
		);

		gsap.fromTo(
			'#menuBanner',
			{
				opacity: 0,
				duration: 1,
				x: 50,
			},
			{
				opacity: 1,
				duration: 2,
				delay: 5.5,
				x: 0,
			}
		);

		gsap.fromTo(
			rule,
			{
				opacity: 1,
				duration: 1,
			},
			{
				opacity: 0.4,
				duration: 2,
				delay: 5.5,
			}
		);
	};

	return (
		<div className={styles.heroImage}>
			<div className={styles.headerWrapper}>
				<h2 id='contactBanner' className={styles.contact}>
					Contact
				</h2>
				<h2 id='menuBanner' className={styles.menu}>
					Menu
				</h2>
			</div>
			<div>
				<h1 id='mainTitle' className={styles.heroTitle}>
					<Typed
						strings={['Motoring']}
						typeSpeed={50}
						showCursor={false}
						startDelay={1500}
					/>
					<p className={styles.heroSubtitle}>
						{' '}
						<Typed
							strings={['Where motorcycles &#38; art unite.']}
							typeSpeed={50}
							showCursor={false}
							startDelay={3000}
						/>
					</p>
				</h1>
			</div>
		</div>
	);
};

export default Hero;
