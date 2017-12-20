/**
 * Module Dependencies
 */

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//Stylesheets
import styles from './styles.scss';


class Error extends Component {
	error404(){
		return (
			<div>
				<h2 className={`${styles.title} ${styles.isBig}`}>404</h2>
				<p>Parece que esta página não existe</p>
			</div>
		)
	}

	error500(){
		return (
			<div>
				<h2 className={styles.title}>Erro inesperado</h2>
				<p>Não foi possível realizar sua solicitação. Tente novamente.</p>
			</div>
		)
	}

	render(){
		const { match } = this.props;
		const { url } = match;

		const errorCode = url.slice(1);
		const errorMessage = this[`error${errorCode}`] || this.error404;

		return(
			<section className={styles.content}>
				{errorMessage()}

				<Link to="/" className={styles.link}>
					Ir para a Página principal
				</Link>
			</section>
		)
	}
}

export default withRouter(Error);