/**
 * Module Dependencies
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Stylesheets
import styles from './styles.scss';


class Error404 extends Component {
	render(){
		return(
			<section className={styles.content}>
				<h2 className={styles.title}>404</h2>
				<p>Parece que esta página não existe</p>

				<Link to="/" className={styles.link}>
					Ir para a Página principal
				</Link>
			</section>
		)
	}
}

export default Error404;