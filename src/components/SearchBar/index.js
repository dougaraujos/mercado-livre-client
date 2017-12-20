/**
 * Module Dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Url } from 'config';

// Stylesheets
import styles from './styles.scss';


class SearchBar extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	}

	componentDidUpdate(){
		this.refs.input.focus();
	}

	fetch(event){
		const { onSubmit } = this.props;
		const { input } = this.refs;
		const { value } = input;

		event.preventDefault();

		onSubmit(value);
	}

	render(){
		return(
			<header className={styles.nav}>
				<div className={styles.content}>
					<Link to="/"  title="Mercado Livre Brasil - Onde comprar e vender de Tudo">
						<img src={Url.images(`mercado-livre-logo.png`)} className={styles.logo} alt=""/>
					</Link>

					<form className={styles.search} onSubmit={this.fetch.bind(this)}>
						<input type="text" name="search" placeholder="Encontre o que você precisa" ref="input" />

						<button>
							<i className={styles.icon}></i>
						</button>
					</form>
				</div>
			</header>
		)
	}
}

export default SearchBar;