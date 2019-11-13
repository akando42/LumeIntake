import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Row, Form, Col, Container} from 'react-bootstrap';

export const PageContainer = styled(Container)`
	background-color: #E7DDD2;
	height: 100vh;
	text-align: center;
`

export const Title = styled(Col)`
 	padding: 50px 0px;
 	color: #35454F;
	text-align: center;
	font-size: 50px;
	font-family: Sailec-Bold;
	width: 100vw;
`


export const Subtitle = styled(Col)`
	padding: 0px 0px 50px 0px;
	text-align: center;
	color: #35454F;
	font-size: 30px;
	font-family: Sailec-Regular;
`


export const LumeForm = styled(Form)`
	width: 100% !important;
`

export const LumeRow = styled(Form.Row)`
	padding: 10px 50px;
	margin: 0px auto;
	width: auto;
`

export const LumeLabel = styled(Form.Label)`
	width: auto;
	height: 49px;
	padding: 0px 50px;
	font-size: 21px;
	font-family: Sailec-Bold;
	text-align: left;
`

export const LumeControl = styled(Form.Control)`
	height: 49px;
	padding: 0px 20px;
	text-align: left;
`	


export const LumeOption = styled(Form.Check)`
	text-align: left
	margin: 0 auto !important;
	width: 80vw;
	padding: 20px 75px;

	.form-check-input {
		width: 30px;
		height: 30px;
		background-color: white;
		color: black;
	}

	label {
		padding: 0px 0px 0px 10px;
		font-family: Sailec-Bold;
		font-size: 30px;
	}
`

export const AdminLink = styled(Link)`
    position: absolute;
    right: 50px;
    top: 50px;
`
