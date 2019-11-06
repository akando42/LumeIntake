import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

const Menu = () => (
	<Row>
		<Col md={4}> 
		 	<Link to="/"> Home </Link> 
		</Col>

		<Col md={4}> 
		 	<Link to="/admin">  Admin </Link> 
		</Col>

		<Col md={4}> 
		 	<Link to="/contact"> Contact </Link> 
		</Col>
	</Row>
)

export default Menu;