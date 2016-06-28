import React from "react";
import { IndexLink, Link } from "react-router";

export default class Background extends React.Component {


  render() {
	var backgroundImgPath = "../img/night-sky-3840x2400-night-city-earth-sky-stars-clouds-light-height-421.jpg";
	const backgroundStyle = {
		display: "block",
		position: "absolute",
		width: "100%",
		top: "50px",
		left:'0',
		right:'0',
		bottom:'0',
		backgroundImage: "url("+ backgroundImgPath +")",
		backgroundSize : "cover",
	}
	
    return (
		<div style={backgroundStyle}>{this.props.children}</div>
    );
  }
}