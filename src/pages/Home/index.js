/**
 * Module Dependencies
 */

import React, { Component } from 'react';

//Stylesheets
import styles from './styles.scss';


class Home extends Component {
	render(){
		const { items } = this.props;

		return (
			<div className={styles.emptyState}>
				<h2 className={styles.title}>Bem-vindo a maior comunidade de compra e venda online da América Latina.</h2>
				<div className={styles.text}>
					• Insira a sua busca no campo que aparece na parte superior da página. <br/>
					• Navegue pela categoria de produtos para encontrar o produto que você está buscando.
				</div>
			</div>
		)
	}
}

export default Home;
