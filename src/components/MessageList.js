import React, { Component } from 'react';

class MessageList extends Component {
	constructor() {
		super();

		this.renderMessage = this.renderMessage.bind(this);
	}

	renderMessage(key) {
		const message = this.props.messages[key];

		return (
			<li key={key}>
				<span className="username"><strong>{ message.username }:</strong></span> { message.content }
			</li>
		)
	}

	render() {
		return (
			<div className="messages-list">
				<h3>Messages</h3>
				<ul>
					{
						Object
							.keys(this.props.messages)
							.map(this.renderMessage)
					}
				</ul>
			</div>
		)
	}
}

export default MessageList;