import React from "react";
import {Button, Icon, Row, Input} from 'react-materialize';

export default class UPSection extends React.Component {

  render() {
	var backgroundImgPath = "../img/night-sky-3840x2400-night-city-earth-sky-stars-clouds-light-height-421.jpg";
	const style = {
		display: "block",
	}
	const inputStyle = {
		paddingTop: "0px",
		paddingBottom: "0px",
		//borderTop: "0px",
		//borderBottom: "0px",
		marginTop: '0px',
		marginBottom: '0px',
	}
	
    return (
		<Row>
		  <Input type="text" label="Username" s={12} style={inputStyle}/>
		  <Input type="password" label="Password" s={12} style={inputStyle}/>
		</Row>
    );
  }
}