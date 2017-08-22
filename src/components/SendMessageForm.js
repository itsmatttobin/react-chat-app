import React, { Component } from 'react';

class SendMessageForm extends Component {
	sendMessage(e) {
		e.preventDefault();

		if(this.message.value !== '')
			this.props.addMessage(this.message.value);

		this.messageForm.reset();
	}

	render() {
		return (	
			<div>		
				{this.props.curUser != null &&
					<div className="send-message">
						<div>
							<form ref={(input) => this.messageForm = input } onSubmit={(e) => this.sendMessage(e)}>
								<input type="text" ref={(input) => this.message = input} placeholder="New message..." />		
							</form>
						</div>
					</div>
				}			
			</div>
		)
	}
}

export default SendMessageForm;