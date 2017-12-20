/**
 * Module Dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Locale } from 'config';

// Stylesheets
import styles from './styles.scss';


class ListItems extends Component {
	static propTypes = {
		items: PropTypes.array
	};

	static defaultProps = {
		items: []
	};

	renderItem(item){
		const { id, title, picture, price, condition } = item;
		const itemUrl = `/items/${id}`;

		return (			
			<li key={id} className={styles.item}>
				<Link to={itemUrl} className={styles.link}>
					<img src={picture} alt={`${title} image`} />
					
					<div className={styles.info}>
						<span className={styles.price}>
							{Locale.currency(price.amount)}
						</span>
						
						<h2 className={styles.title}>
							{title}
						</h2>
					</div>
					
					<div className={styles.condition}>
						{Locale.translate(condition)}
					</div>
				</Link>
			</li>
		)
	}

	renderEmptyState(){
		return (
			<div className={styles.emptyState}>
				<h2 className={styles.title}>Nenhum item encontrado</h2>
				<div className={styles.text}>
					• Insira a sua busca no campo que aparece na parte superior da página. <br/>
					• Navegue pela categoria de produtos para encontrar o produto que você está buscando.
				</div>
			</div>
		)
	}

	render(){
		const { items } = this.props;

		return (
			items.length ?
				<ol>
					{items.map((item) => this.renderItem(item))}
				</ol>
			:
				this.renderEmptyState()
		)
	}
}

export default ListItems;
