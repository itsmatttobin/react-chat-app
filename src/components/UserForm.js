import React, { Component } from 'react';

class UserForm extends Component {
	constructor() {
		super();

		this.state = {
			userAdded: null
		}
	}

	handleUser(e) {
		e.preventDefault();

		const user = {
			username: this.username.value
		}

		this.props.addUser(user);
		this.setState({userAdded: 'disabled'})
	}

	render() {
		return (
			<div className="user-form">
				<h3>Enter a username to begin chatting</h3>
				<form ref={(input) => this.userForm = input} onSubmit={(e) => this.handleUser(e)} >
					<label htmlFor="username">Username:</label>
					<input type="text" name="username" ref={(input) => this.username = input} disabled={this.state.userAdded} placeholder="Username..." />
				</form>
			</div>
		)
	}
}

export default UserForm;