import React, { Component } from 'react';

class UserList extends Component {
	constructor() {
		super();

		this.renderUser = this.renderUser.bind(this);
	}

	renderUser(key) {
		return (
			<li key={key}>{this.props.onlineUsers[key].username}</li>
		)
	}

	render() {
		return (
			<div className="user-list">				
				{this.props.onlineUsers !== undefined &&
					<div>
						<h3>Online Users</h3>
						<ul>
							{Object.keys(this.props.onlineUsers).map(this.renderUser)}
						</ul>
					</div>
				}
			</div>
		)
	}
}

export default UserList;