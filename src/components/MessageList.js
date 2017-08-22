import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MessageList extends Component {
	constructor() {
		super();

		this.renderMessage = this.renderMessage.bind(this);
		this.scrollToBottom = this.scrollToBottom.bind(this);
	}

	renderMessage(key) {
		const message = this.props.messages[key];

		return (
			<li key={key}>
				<span className="username"><strong>{ message.username }:</strong></span> { message.content }
			</li>
		)
	}

	scrollToBottom() {
		const node = ReactDOM.findDOMNode(this.messagesEnd);
		node.scrollIntoView({ behavior: "smooth" });
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	render() {
		const hasUser = this.props.curUser != null ? ' has-user' : '';

		return (
			<div className={`messages-list${hasUser}`}>
				<ul ref={(elem) => this.messageForm = elem}>
					{
						Object
							.keys(this.props.messages)
							.map(this.renderMessage)
					}
				</ul>
				<div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
			</div>
		)
	}
}

export default MessageList;