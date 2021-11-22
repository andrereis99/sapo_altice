/*
*
* Home
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { setColor } from "../../store/actions";
import { COLORS } from "../../utils/utils";

import SapoSymbol from '../../assets/logos/sapo_symbol.png';
import SapoMon from '../../assets/logos/sapo_mon.png';
import SapoNet from '../../assets/images/sapo_net.jpg';

import './styles.scss';

export class Home extends React.Component<any, any> {
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

	applyShapeColor() {
		const { selectedColor } = this.props;

		return { border: `4px solid ${selectedColor}` };
	}

	renderColorPickerSection() {
		const { isMobile } = this.state;
		const { selectedColor, dispatch } = this.props;

		return (
			<div className="Section ColorPickerSection">
				<div className="ColorPickers">
					{COLORS.map(color =>
						<div
							key={`color_${color}`}
							className={`ColorPicker ${
								color === selectedColor && "__active"
							}`}
							style={color === selectedColor ? { border: `2px solid ${color}` } : {}}
							onClick={() => dispatch(setColor(color))}>
							<div className="ColorPicker_color" style={{ backgroundColor: color }} />
						</div>
					)}
				</div>
				<div className="Section_Shapes">
					{!isMobile ? <div
						className="Section_Shape Circle"
						style={{
							...this.applyShapeColor(),
							top: 211,
							right: 547,
						}} /> : null}
					<div
						className="Section_Shape Circle"
						style={isMobile ? {
							...this.applyShapeColor(),
							top: 475,
							right: 220,
							height: 80,
							width: 80,
						} : {
							...this.applyShapeColor(),
							top: 490,
							right: 400,
							height: 50,
							width: 50,
						}} />
					<div
						className="Section_Shape Rectangle"
						style={isMobile ? {
							...this.applyShapeColor(),
							top: 155,
							right: 180,
						} : {
							...this.applyShapeColor(),
							top: 355,
							right: 482,
						}} />
					<div
						className="Section_Shape Rectangle"
						style={{
							...this.applyShapeColor(),
							top: 360,
							right: 190,
						}} />
					{/*<div
						className="Section_Shape Triangle"
						style={{
							// ...this.applyShapeColor(),
							top: 380,
							right: 190,
						}} />*/}
				</div>
				<img alt="sapo symbol" src={SapoSymbol} />
			</div>
		);
	}

	renderBrandSection() {
		const { isMobile } = this.state;
		const { selectedColor } = this.props;

		return (
			<div className="Section BrandSection">
				<div className="Section_Subtitle">
					marca
				</div>
				<div className="Section_Title">
					SAPO
				</div>
				<div className="BrandSection_Content">
					<img alt="sapo net" src={SapoNet} />
					<p>
						Estamos consigo desde 1995, mas
						ainda mal começamos a tocar o
						futuro.
					</p>
					<p>
						Apostamos na credibilidade, na
						criatividade, na inovação, na
						tecnologia e na proximidade.
					</p>
					<p>
						Somos o SAPO, <span style={{ backgroundColor: selectedColor }}>vamos tornar a sua
						vida mais simples, mais informada,
						mais divertida, mais prática</span>, aqui e
						em todo o mundo. Queremos estar
						na sua vida.
					</p>
					<div className="BrandSection_Content_Dots">
						<div className="BrandSection_Content_Dot" />
						<div className="BrandSection_Content_Dot" />
						<div className="BrandSection_Content_Dot" />
					</div>
					<div className="BrandSection_Tabs">
						<div className="BrandSection_Container">
							<div className="BrandSection_Tab tab1">
								<div className="BrandSection_Tab_Content">
									Manifesto
								</div>
							</div>
							<div className="BrandSection_Tab next" />
						</div>
						<div className="BrandSection_Container">
							<div className="BrandSection_Tab tab2">
								<div className="BrandSection_Tab_Content">
									O SAPO deu o salto
								</div>
							</div>
							{isMobile ?
								<div className="BrandSection_Tab next2"/> :
								null}
						</div>
					</div>
				</div>
				<div className="Section_Shapes">
					{!isMobile ? <div
						className="Section_Shape Circle"
						style={{
							...this.applyShapeColor(),
							top: 270,
							right: 233,
						}} /> : null}
					<div
						className="Section_Shape Circle"
						style={isMobile ? {
							border: `4px dashed ${selectedColor}`,
							bottom: 318,
							right: -94,
							height: 250,
							width: 250,
						} : {
							border: `4px dashed ${selectedColor}`,
							top: 575,
							left: 60,
							height: 550,
							width: 550,
						}} />
				</div>
			</div>
		);
	}
	
	renderJumpsSection() {
		const { selectedColor } = this.props;

		return (
			<div className="Section JumpsSection">
				<div className="JumpsSection_Container">
					<div className="Section_Subtitle">
						O SAPO
					</div>
					<div className="Section_Title">
						Deu 0 saltos
					</div>
					<div className="JumpsSection_Content">
						<div className="JumpsSection_Content_Board">
							<div className="JumpsSection_Content_Item">
								X
							</div>
							<div className="JumpsSection_Content_Item">
								Y
							</div>
							<div className="JumpsSection_Content_Item">
								D
							</div>
							<div className="JumpsSection_Content_Footer">
								<div className="JumpsSection_Content_Button Main">
									Dá o salto
								</div>
								<div className="JumpsSection_Content_Button next" />
							</div>
						</div>
						<div className="JumpsSection_Content_Frog">
							<img className="JumpsSection_Content_Frog_Image" alt="sapo mon" src={SapoMon} />
							<div
								className="JumpsSection_Content_Goal"
								style={{ border: `4px dashed ${selectedColor}` }} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Sapo</title>
					<meta name="Home" content="Home Page" />
				</Helmet>
				<div className="ContentContainer">
					{this.renderColorPickerSection()}
					{this.renderBrandSection()}
					{this.renderJumpsSection()}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => ({
	selectedColor: state.color
});

export default connect(mapStateToProps)(Home);