/**
 *
 * Sidebar
 *
 */

import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { NAVBAR_PAGES } from "../../utils/utils";

import "./styles.scss";

export class Sidebar extends React.PureComponent<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
		activeTab: "/dashboard",
		};

		this.selectTab = this.selectTab.bind(this);
		this.goTo = this.goTo.bind(this);
	}

	selectTab(url: String) {
		const { activeTab } = this.state;

		this.setState({ activeTab: activeTab === url ? "" : url });
	}

	goTo(url: String) {
		const clientWidth = document.body.clientWidth;
		this.setState({ activeTab: url });
		this.props.onMobile(clientWidth < 992);
		this.props.dispatch(push(`/${url}`));
	}

	render() {
		const { open, dispatch } = this.props;

		const { pathname } = window.location;

		return (
			<div className="SidebarWrapper">
				<div className={`SidebarContainer${open ? " open" : " closed"}`}>
					<div className="SidebarContent">
						{NAVBAR_PAGES.map(elem => (
							<a
								className={`SidebarMenuObject ${pathname === elem.link && "__active"}`}
								onClick={(e) => {
									e.preventDefault();
									dispatch(push(elem.link));
									this.props.closeSidebar();
								}}
								href={elem.link}
								>
								<span>{elem.label}</span>
							</a>
						))}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
  settings: state.settings,
  user: state.user,
  language: state.language || "pt",
});

export default connect(mapStateToProps)(Sidebar);
