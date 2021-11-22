/**
 *
 * Header
 *
 */

import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { NAVBAR_PAGES } from "../../utils/utils";

import logo from "../../assets/logos/logo.png"

import "./styles.scss";

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			isMobile: window.innerWidth <= 360,
		};

		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize = () => {
		this.setState({ isMobile: window.innerWidth <= 360 });
	}

	renderHamburger() {
		const { openSidebar, onToggleSidebar } = this.props;

		return <React.Fragment>
			<div className="HeaderSection">
				{openSidebar ?
					<div className="HamgurgerMenu __open" onClick={() => onToggleSidebar()}>
						<div className="CrossLeft" />
						<div className="CrossRight" />
					</div> :
					<div className="HamgurgerMenu" onClick={() => onToggleSidebar()}>
						<div />
						<div />
						<div />
					</div>
				}
			</div>
		</React.Fragment>;
	}

	renderLogo() {
		const { dispatch } = this.props;

		return (
			<React.Fragment>
				<div className="HeaderSection">
					<a
						href="/"
						className="HeaderLogo"
						onClick={(e: any) => {
							e.preventDefault();
							dispatch(push('/'));
						}}
					>
						<img src={logo} alt="App Logo" />
					</a>
				</div>
			</React.Fragment>
		);
	}

	renderLinks() {
		const { isMobile } = this.state;
		const { dispatch } = this.props;

		const { pathname } = window.location;

		if (isMobile) return this.renderHamburger();

		return (
			<React.Fragment>
				<div className="HeaderSection">
					<nav className="Header_Nav">
						{NAVBAR_PAGES.map(elem => (
							<a
								key={`navbar_elem_${elem.label}`}
								href={elem.link}
								className={`HeaderLink ${
									pathname === elem.link && "__active"
								}`}
								onClick={(e: any) => {
									e.preventDefault();
									dispatch(push(elem.link));
								}}
							>
								{elem.label}
							</a>
						))}
					</nav>
				</div>
			</React.Fragment>
		);
	}

	render() {
		return (
			<div className="HeaderContainer">
				<div id="AppHeader" className="Header">
					{this.renderLogo()}
					{/* Right Section */}
					{this.renderLinks()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps)(Header);
