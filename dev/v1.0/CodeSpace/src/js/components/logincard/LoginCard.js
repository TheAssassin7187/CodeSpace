import React from "react";
import UPSection from "./UPSection";
import RememberMe from "./RememberMe";
import LoginBtn from "./LoginBtn";
import {Button, Icon,Input} from 'react-materialize';

export default class LoginCard extends React.Component {

  render() {
	var backgroundImgPath = "../img/night-sky-3840x2400-night-city-earth-sky-stars-clouds-light-height-421.jpg";
	const backgroundStyle = {
		width: "300px",
		display:"table",
		padding: "10px 10px 10px 10px",
		overflow: 'auto',
		margin: 'auto',
		position: 'absolute',
		top: '0', 
		left: '0', 
		bottom: '0', 
		right: '0',
		backgroundColor: "while",
		opacity: '1'
	}
	
	const btnStyle = {
		textAlign: "center",
		padding: "0px 10px 18px 10px",
	}
	
    return (
		<div class="card" style={backgroundStyle}>
			<UPSection/>
			<RememberMe/>
			<LoginBtn/>
		</div>
    );
  }
}