import React from "react";
import {Button, Icon, Row} from 'react-materialize';

export default class LoginBtn extends React.Component {

  render() {
	const style = {
		textAlign: "center",
	}
	
    return (
		<Row style={style}>
		  <Button node='a' waves='light'><Icon>Login</Icon></Button>
		</Row>
    );
  }
}