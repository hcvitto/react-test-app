import React, { Component } from 'react';

class AboutUsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  	email: ''
		};
	}
	render() {
		return (
			<div>
				<h1>Subscribe to our newsletter</h1>
				<form>
					<div>
						<label htmlFor="email">Email <span>(mandatory)</span></label>
						<input type="email" name="email" id="email" onChange={(event) => this.validateEmail(event)} />
					</div>
					<div>
						<label htmlFor="submit" className="hidden">Submit form</label>
						<input type="submit" name="submit" id="submit" value="Send" disabled={!this.state.email} />
					</div>
				</form>
			</div>
		);
	}
	validateEmail(e) {
		const value = e.target.value;
  		this.setState({email: value});
	}
}

export default AboutUsComponent;