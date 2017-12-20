/**
 * Module Dependencies
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Stylesheets
import styles from './styles.scss';

// Components
import Breadcrumbs from 'components/Breadcrumbs';
import ListItems from 'components/ListItems';
import SearchBar from 'components/SearchBar';


class LayoutDefault extends Component {
	constructor(props){
		super(props);

		this.state = {
			items: [],
			isLoading: false
		}
	}

	handleSearch(search){
		const { history } = this.props;

		if(search){
			history.push(`/items?search=${search}`)

		}
	}

	render(){
		const { items, isLoading } = this.state;

		return(
			<main>
				<SearchBar onSubmit={this.handleSearch.bind(this)} />

				<Breadcrumbs />

				<section className={styles.content}>
					{
						isLoading ?
							<Loading />
						:
							this.props.children
					}
				</section>
			</main>
		)
	}
}

export default withRouter(LayoutDefault);