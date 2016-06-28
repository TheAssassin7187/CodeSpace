import React from "react";
import {Button, Icon, Row, Input} from 'react-materialize';

export default class UPSection extends React.Component {

  render() {
	const style = {
		display: "block",
	}
	
    return (
		<Row>
		  <Input type="text" label="Username" s={12} />
		  <Input type="password" label="Password" s={12} />
		</Row>
    );
  }
}