/**
 * Module Dependencies
 */

import Home from 'pages/Home';
import Product from 'pages/Product';
import Search from 'pages/Search';
import Error from 'pages/Error';


const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/items/',
		component: Search,
		exact: true
	},
	{
		path: '/items/:id',
		component: Product,
		exact: true
	},
	{
		path: '*',
		component: Error
	}
];

export default routes;