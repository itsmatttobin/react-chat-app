import React, { Component } from 'react';

class SendMessageForm extends Component {
	sendMessage(e) {
		e.preventDefault();

		this.props.addMessage(this.message.value);
		this.messageForm.reset();
	}

	render() {
		return (
			<div className="send-message">
				{this.props.curUser != null &&
					<div>
					<h3>New message</h3>
					<form ref={(input) => this.messageForm = input } onSubmit={(e) => this.sendMessage(e)}>
						<input type="text" ref={(input) => this.message = input} />		
					</form>
					</div>
				}
			</div>
		)
	}
}

export default SendMessageForm;