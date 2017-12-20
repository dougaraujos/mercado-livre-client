/**
 * Module Dependencies
 */

import React, { Component } from 'react';

// Stylesheets
import styles from './styles.scss';


class Loading extends Component {
	render(){
		return (
			<div className={styles.container}>
				<svg className={styles.spinner} viewBox="25 25 50 50">
					<circle className={styles.circle} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
				</svg>
				<div>Carregando</div>
			</div>
		)
	}
}

export default Loading;
