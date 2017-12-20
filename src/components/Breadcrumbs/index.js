/**
 * Module Dependencies
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from 'react-breadcrumbs-dynamic';

// Stylesheets
import styles from './styles.scss';


class BreadcrumbsCustom extends Component {
	render(){
		return (
			<Breadcrumbs 
				containerProps={{className: styles.container}}
				separator={<i className={styles.separator}> > </i>}
				item={Link} />
		)
	}
}

export default BreadcrumbsCustom;
