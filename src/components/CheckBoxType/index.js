import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Row, Form, Col, Container} from 'react-bootstrap';

const PageContainer = styled(Container)`
	width: 100vw;
	height: 100vh;
	background-color: #E7DDD2;
	text-align: center;
`
const Title = styled(Row)`
 	padding: 50px 0px;
 	color: #35454F;
	text-align: center;
	font-size: 50px;
	font-family: Sailec-Bold;
	width: 100vw;`

const Subtitle = styled(Row)`
	padding: 0px 0px 50px 0px;
	text-align: center;
	color: #35454F;
	font-size: 30px;
	font-family: Sailec-Regular;`

const LumeForm = styled(Form)`
	width: 100% !important;
`

const LumeRow = styled(Form.Row)`
	padding: 10px 0px;
`

const LumeLabel = styled(Form.Label)`
	width: 10% !important;
	height: 49px;
	padding: 0px 20px;
	font-size: 21px;
	font-family: Sailec-Bold;
	text-align: left;
`

const LumeControl = styled(Form.Control)`
	width: 20% !important;
	height: 49px;
	padding: 0px 20px;
	text-align: left;
`	

const LumeOption = styled(Form.Check)`
	text-align: left
	margin: 0 auto;
	width: 55%;
	padding: 20px 0px;

	.form-check-input {
		margin: 0px 0px 0px 100px;
		width: 30px !important;
		height: 30px !important;
		background-color: white;
		color: black;
	}

	label {
		padding: 0px 0px 0px 50px;
		font-family: Sailec-Bold;
		font-size: 30px;
	}
`

const AdminLink = styled(Link)`
    position: absolute;
    right: 50px;
    top: 50px;
`

const CheckBoxType = ({title, subtitle, options, previous, next}) => (
	<PageContainer>
		<AdminLink to="/admin">Admin</AdminLink>

		<Title>LUME</Title>
		<Title>
			{title}
		</Title>
		<Subtitle>
			{subtitle}
		</Subtitle>
		<LumeForm>
		    <Form.Group controlId="formHorizontalEmail">
				<Col>
					{
						options.map( 
							item => (
								<LumeOption
									type="radio"
									label={item.content}
									name="formHorizontalRadios"
									id={item.id}
								/>
							)
						)
					}
					
				</Col>
		    </Form.Group>
		</LumeForm>
		<Menu previous={previous} next={next} />
	</PageContainer>
);

export default CheckBoxType;