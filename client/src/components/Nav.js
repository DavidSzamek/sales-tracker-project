import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { color, shape } from '../styles';

import styled from 'styled-components';

import Img from '../assets/logo2.png';

const Header = styled.header`
	// padding: 20px;
	background-color: ${color.primary};
	font-family: 'Raleway', sans-serif;
	font-weight: 500;
`;

const StyledNav = styled.nav`
	display: flex;
`;

const NavigationList = styled.ul`
	display: flex;
	vertical-align: top;
	width: 100%;

	${props => props.float && `
		justify-content: end;
	`}
`;

const NavigationItem = styled.li`
	margin: 1rem;
	padding: 1rem;
	border-radius: ${shape.borderRadius};
	a {
		color: ${color.textDark};
		text-decoration: none;
		font-size: 1.8rem;
	}

	&:hover {

	}
`;

const StyledImage = styled.img`
	height: 30px;
`;

function AuthNav() {
	if (Auth.loggedIn()) {
		return (
			<NavigationList float="right">
				<NavigationItem>
				<Link to="/dashboard">
						Dashboard
					</Link>
				</NavigationItem>
				<NavigationItem>
					{/* this is not using the Link component to logout or user and then refresh the application to the start */}
					<a href="/" onClick={() => Auth.logout()}>
						Logout
					</a>
				</NavigationItem>
			</NavigationList>
		);
	} else {
		return (
			<NavigationList float="right">
				<NavigationItem>
					<Link to="/signup">
						Signup
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/login">
						Login
					</Link>
				</NavigationItem>
			</NavigationList>
		);
	}
}

function Nav() {
  return (
    <Header>
		<StyledNav>
			<NavigationList>
				<NavigationItem>
					<Link to="/">
						<StyledImage src={ Img } />
					</Link>
				</NavigationItem>
			</NavigationList>
			<AuthNav />
		</StyledNav>
    </Header>
  );
}

export default Nav;
