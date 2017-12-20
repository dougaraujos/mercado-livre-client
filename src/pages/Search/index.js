/**
 * Module Dependencies
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { Api } from 'config';
import 'whatwg-fetch';

// Components
import ListItems from 'components/ListItems';
import Loading from 'components/Loading';


class Search extends Component {
	constructor(props){
		super(props);

		this.state = {
			items: [],
			isLoading: false
		}
	}

	componentWillMount(){
		const { search } = this.props.location;

		this.fetchItems(search);
	}

	componentWillUpdate(nextProps){
		const lastSearch = this.props.location.search;
		const nextSearch = nextProps.location.search;

		if(lastSearch != nextSearch){
			this.fetchItems(nextSearch);
		}
	}

	fetchItems(search){
		this.setState({
			isLoading: true
		})

		fetch(`${Api.items}${search}`)
		.then(data => data.json())
		.then((responseData) => {
			const { items } = responseData;

			this.setState({
				items,
				isLoading: false
			})
		})
	}

	render(){
		const { items, isLoading } = this.state;
		const { search } = this.props.location;
		const searchText = search.split('=')[1];

		return (
			isLoading ?
				<Loading />
			:
				<div>
					<BreadcrumbsItem to='/'>Home</BreadcrumbsItem>
					<BreadcrumbsItem to={`/items${search}`}>Busca por "{searchText}"</BreadcrumbsItem>

					<ListItems items={items} />
				</div>
		)
	}
}

export default withRouter(Search);
