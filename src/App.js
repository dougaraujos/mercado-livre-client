import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThroughProvider } from 'react-through';

import LayoutDefault from 'pages/LayoutDefault';

import routes from 'routes';


// Import default styles
import stylesheets from 'stylesheets';


class App extends Component {
	render(){
		return(
			<ThroughProvider>
				<BrowserRouter>
					<LayoutDefault>
						<Switch>
							{
								routes.map(route => <Route key={route.path} {...route} />)
							}
						</Switch>
					</LayoutDefault>
				</BrowserRouter>
			</ThroughProvider>
		)
	}
}

export default App;