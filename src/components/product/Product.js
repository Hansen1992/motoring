import React from 'react';
import ReactVivus from 'react-vivus';
import styles from './product.module.scss';
import bike from './bike.svg';
import motoguzzi from './motoguzzi-v50-1977.svg';

const Production = () => {
	return (
		<>
			{/* first section */}
			<section className={styles.productWrapper}>
				<div className={styles.projectInfo} data-aos='fade-right'>
					<h1>
						from scratch / <span className={styles.textHighlight}>concept</span>
					</h1>
					<p>
						The first project was built around an engine that comes from a
						German motorcycle called NSU OSL 251. Although I did not plan this,
						the motorcycle is a design of the feline forms. It matches the
						customer's wish of having an agile, sexy and personal look that
						reflects her wild life style.
					</p>
					<button className={styles.linkToProject}>View project</button>
				</div>
				<div className={styles.projectOneImage}>
					<ReactVivus
						id='projectOneSVG'
						className={styles.bikeSVG}
						option={{
							file: bike,
							type: 'oneByOne',
							animTimingFunction: 'EASE',
							duration: 250,
						}}
						callback={null}
						reset={true}
					/>
				</div>
			</section>

			{/* second section */}

			<section className={styles.productWrapper}>
				<div className={styles.projectOneImage}>
					<ReactVivus
						id='projectSecondSVG'
						className={styles.bikeSVG}
						option={{
							file: motoguzzi,
							type: 'oneByOne',
							animTimingFunction: 'EASE',
							duration: 600,
						}}
						callback={null}
					/>
				</div>
				<div className={styles.projectInfo} data-aos='fade-left'>
					<h1>
						from scratch / <span className={styles.textHighlight}>concept</span>
					</h1>
					<p>
						The second project was built around a BSA Model V, G14 engine with a
						1000cc cylinder capacity, two V-twin cylinders. The materials used
						were steel and some bronze elements, processed from raw material.
					</p>
					<button className={styles.linkToProject}>View project</button>
				</div>
			</section>
		</>
	);
};

export default Production;
