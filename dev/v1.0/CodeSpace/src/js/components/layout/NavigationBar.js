import React from "react";
import { IndexLink, Link } from "react-router";
import {Navbar, NavItem} from 'react-materialize';

export default class NavigationBar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
	const style = {
		display: "block",
		backgroundColor: "blue",
		height: "50px",
	}
    return (
		<Navbar brand='logo' left style={style}>
			<NavItem href='get-started.html'>Getting started</NavItem>
			<NavItem href='components.html'>Components</NavItem>
		</Navbar>
    );
  }
}
