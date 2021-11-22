import React, { Component } from "react";
import { connect } from "react-redux";
import { Content, RouteContent } from "../../components";
import { Header, Sidebar, ErrorBoundary, Footer } from "../index";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Routes from "./routes";

import '../../styles/styles.scss';
import '../../styles/theme.less';
import 'react-toastify/dist/ReactToastify.css';

let theme: any;

export class App extends Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			sidebarOpen: false,
			sidebarHidden: false,
		};

		theme = createTheme({
			palette: {
				primary: {
					main: '#000',
				},
			},
		});
	}

	render() {
		const { openSidebar } = this.state;

		return (
			<div className="App">
				<MuiThemeProvider theme={theme}>
					<Content>
						<RouteContent>
							<ErrorBoundary>
								<Header
									openSidebar={openSidebar}
									onToggleSidebar={() => {
										this.setState((state: any) => ({
											sidebarOpen: !state.sidebarOpen,
										}));
									}} />
								<Routes />
								<Footer />
							</ErrorBoundary>
						</RouteContent>
					</Content>
					<Sidebar
						open={this.state.sidebarOpen}
						onMobile={(status: any) =>
							status && this.setState({ sidebarOpen: false })
						}
						openSidebar={() => this.setState({ sidebarOpen: true })}
						closeSidebar={() => this.setState({ sidebarOpen: false })}
					/>
				</MuiThemeProvider>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	router: state.router,
	loader: state.loader,
});

export default connect(mapStateToProps)(App);
