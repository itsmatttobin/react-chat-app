import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/index.css';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
