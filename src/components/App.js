import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import SendMessageForm from './SendMessageForm';

class App extends Component {
	constructor() {
		super();

		this.addUser = this.addUser.bind(this);
		this.addMessage = this.addMessage.bind(this);

		this.state = {
			users: {},
			messages: {},
			curUser: null
		}
	}

	addUser(user) {
		const users = {...this.state.users};
		const uid = `${user.username}-${Date.now()}`;
		users[uid] = user;
		this.setState({ 
			users,
			curUser: uid
		});
	}

	addMessage(message) {
		const messages = {...this.state.messages};
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = {
			content: message,
			user: this.state.curUser
		}
		this.setState({ messages });
	}

	render() {
		return (
			<div className="app">
				<header>
					<h1>Chat</h1>
				</header>
				
				<UserForm addUser={this.addUser} />
				<UserList users={this.state.users} />

				<div className="messages-list">
					<h3>Messages</h3>
					<ul>
						{
							Object
								.keys(this.state.messages)
								.map(key => <li key={key}>{this.state.messages[key].content}</li>)
						}
					</ul>
				</div>

				<SendMessageForm addMessage={this.addMessage} curUser={this.state.curUser} />
			</div>
		);
	}
}

export default App;
