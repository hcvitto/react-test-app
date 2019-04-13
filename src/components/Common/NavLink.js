import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './style/header.css';

function NavLinkComponent(props) {
	return <li>
		<NavLink exact activeClassName="active" to={props.route.link}>
			<div onClick={props.onClick}>{props.route.label}</div>
		</NavLink>
	</li>;
}

export default NavLinkComponent;