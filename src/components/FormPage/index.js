import React from 'react';
import Menu from "../Menu";

import {Row, Col} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const FormPage = () => (
	<div>
		<Menu />
		<Row> Home Page </Row>
	</div>
);

export default FormPage;