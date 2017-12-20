/**
 * Module Dependencies
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { Api, Locale, Url } from 'config';
import numeral from 'numeral';
import 'whatwg-fetch';

// Stylesheets
import styles from './styles.scss';

// Components
import Loading from 'components/Loading';


class Product extends Component {
	constructor(props){
		super(props);

		this.state = {
			item: {},
			isLoading: false
		}
	}

	componentWillMount(){
		const { match } = this.props;
		const { id } = match.params;

		this.fetchItem(id);
	}

	fetchItem(id){
		this.setState({
			isLoading: true
		})

		fetch(`${Api.item}${id}`)
		.then(data => {
			const { history } = this.props;

			if(data.status < 200 || data.status > 299){
				history.push('/404')
			}

			return data.json();
		})
		.then((responseData, r) => {
			const { item } = responseData;

			if(item){
				this.setState({
					item,
					isLoading: false
				})
			}
		})
	}

	renderProduct(item){
		const { id, title, picture, price, condition, sold_quantity, description } = item;

		return (
			<div className={styles.product}>
				<BreadcrumbsItem to='/'>Home</BreadcrumbsItem>
				<BreadcrumbsItem to={`/items/${id}`}>{title}</BreadcrumbsItem>

				<div className={styles.details}>
					<div className={styles.picture}>
						<img src={picture} alt=""/>
					</div>

					<div className={styles.info}>
						<div>{Locale.translate(condition)} - {sold_quantity} vendidos</div>

						<h2>
							{title}
						</h2>

						<div className={styles.price}>
							<span className={styles.amount}>
								{Locale.currency(price.amount)}
							</span>
							<small className={styles.decimals}>
								{price.decimals == 0 ? '00' : price.decimals}
							</small>
						</div>

						<button className={styles.buy}>Comprar</button>
					</div>
				</div>

				<div className={styles.description}>
					<h3 className={styles.title}>Descrição do Produto</h3>
					<p className={styles.text} dangerouslySetInnerHTML={{__html: description}}>
					</p>
				</div>
			</div>
		)
	}

	render(){
		const { item, isLoading } = this.state;

		return (
			isLoading ?
				<Loading />
			:
				this.renderProduct(item)
		)
	}
}

export default withRouter(Product);