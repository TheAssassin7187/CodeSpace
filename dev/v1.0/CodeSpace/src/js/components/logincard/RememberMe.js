import React from "react";
import {Input, Row} from 'react-materialize';

export default class RememberMe extends React.Component {

  render() {
	var backgroundImgPath = "../img/night-sky-3840x2400-night-city-earth-sky-stars-clouds-light-height-421.jpg";
	const style = {
		display: "inherit",
		textAlign: "center",
	}
	const textStyle = {
		color : "#9e9e9e",
		fontSize: "10px",
		fontWeight: "bold",
	}
	
    return (
		<Row style={style}>
			<div style={textStyle}>Remember Me</div>
			<Input name='on' type='switch' value='1' />
		</Row>
    );
  }
}