import React from "react";
import { Link } from "react-router";

import NavigationBar from "../components/layout/NavigationBar";
import Background from "../components/layout/Background";
import LoginCard from "../components/logincard/LoginCard";

export default class Layout extends React.Component {
	render() {
		const outerShellStyle = {
			position: "absolute",
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		};
		return (
		  <div style={outerShellStyle}>
			<NavigationBar location={location} />
			<Background><LoginCard/></Background>
		  </div>
		);
	}
}