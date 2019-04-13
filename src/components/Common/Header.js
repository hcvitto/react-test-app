import React, { Component } from 'react';

import NavLinkComponent from './NavLink';
import './style/header.css';

const routes = [
	{
		link: '/',
		label: 'Hello'
	},
	{
		link: '/about-us',
		label: 'About us'
	},
	{
		link: '/team',
		label: 'Team'
	},
	{
		link: '/approach',
		label: 'Approach'
	},
	{
		link: '/careers',
		label: 'Careers'
	},
];

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  	navIsVisible: false,
		};
	  }
	render() {
		return <header className={this.state.navIsVisible ? 'active' : ''}>
		 	<div className="burger" onClick={() => this.toggleNav()}>
		 		<span></span>
		 		<span></span>
		 		<span></span>
		 	</div>
			 <nav className={this.state.navIsVisible ? 'active' : ''}>
			 	<ul>
			 	{
					routes.map((route, index) => <NavLinkComponent route={route} key={index} onClick={() => this.hideNav()} />)
				}
				</ul>
			 </nav>
		</header>
	}
	toggleNav() {
		this.setState({
			navIsVisible: !this.state.navIsVisible
		});
	}
	hideNav(e) {
		this.setState({navIsVisible: false});
	}
}

export default HeaderComponent;