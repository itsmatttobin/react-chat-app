import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import SendMessageForm from './SendMessageForm';
import MessageList from './MessageList';
import base from '../base';

class App extends Component {
	constructor() {
		super();

		this.addUser = this.addUser.bind(this);
		this.addMessage = this.addMessage.bind(this);
		this.leaveChat = this.leaveChat.bind(this);

		this.state = {
			users: {},
			onlineUsers: {},
			messages: {},
			curUser: null
		}
	}

	componentWillMount() {
		this.messagesRef = base.syncState('messages', {
			context: this,
			state: 'messages'
		});
		this.usersRef = base.syncState('users', {
			context: this,
			state: 'users'
		});
		this.usersRef = base.syncState('onlineUsers', {
			context: this,
			state: 'onlineUsers'
		});
	}

	componentDidMount() {
		window.addEventListener('beforeunload', this.leaveChat);
	}

	componentWillUnmount() {
		this.leaveChat();
	}

	leaveChat() {
		const onlineUsers = {...this.state.onlineUsers};
		onlineUsers[this.state.curUser] = null;
		this.setState({ onlineUsers });
	}

	addUser(user) {
		const users = {...this.state.users};
		const onlineUsers = {...this.state.onlineUsers};
		
		const uid = `${user.username}-${Date.now()}`;
		
		users[uid] = user;
		onlineUsers[uid] = user;

		this.setState({ 
			users,
			onlineUsers,
			curUser: uid
		});
	}

	addMessage(message) {
		const messages = {...this.state.messages};
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = {
			content: message,
			uid: this.state.curUser,
			username: this.state.users[this.state.curUser].username,
			timestamp: timestamp
		}
		this.setState({ messages });
	}

	render() {
		return (
			<div id="app">
				<aside id="sidebar">
					<div className="top">
						<h1>Chat</h1>
						<h4>A React App</h4>
					</div>
					<div className="bottom">
						<UserForm addUser={this.addUser} />
						<UserList onlineUsers={this.state.onlineUsers} />
					</div>
				</aside>

				<section id="main">
					<MessageList messages={this.state.messages} curUser={this.state.curUser} />
					<SendMessageForm addMessage={this.addMessage} curUser={this.state.curUser} />
				</section>
			</div>
		);
	}
}

export default App;
