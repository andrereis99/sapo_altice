/**
 *
 * Footer
 *
 */

import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import youtubeIcon from "../../assets/images/youtube_icon.png"
import facebookIcon from "../../assets/images/facebook_icon.png"
import vimeoIcon from "../../assets/images/vimeo_icon.png"

import "./styles.scss";

/* eslint-disable react/prefer-stateless-function */
export class Footer extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<footer className="FooterContainer">
				<div className="Footer">
					<img alt="youtube_icon" src={youtubeIcon} />
					<img alt="facebook_icon" src={facebookIcon} />
					<img alt="vimeo_icon" src={vimeoIcon} />
				</div>
			</footer>
		);
	}
}

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps)(Footer);
