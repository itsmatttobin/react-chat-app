import React, { Component } from 'react';

class UserList extends Component {
	constructor() {
		super();

		this.renderUser = this.renderUser.bind(this);
	}

	renderUser(key) {
		return (
			<li key={key}>{this.props.users[key].username}</li>
		)
	}

	render() {
		return (
			<div className="user-list">
				<h3>All Users</h3>
				{Object.keys(this.props.users).length === 0 ? (
					<p>No Users</p>
				) : (				
					<ul>
						{Object.keys(this.props.users).map(this.renderUser)}
					</ul>
				)}
			</div>
		)
	}
}

export default UserList;