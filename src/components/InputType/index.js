import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {
	Row, 
	Form, 
	Container,
} from 'react-bootstrap';

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
	padding: 50px 0px;
	text-align: center;
	color: #35454F;
	font-size: 30px;
	font-family: Sailec-Bold;`

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

const AdminLink = styled(Link)`
    position: absolute;
    right: 50px;
    top: 50px;
`


const InputType = ({questions, title, subtitle, previous, next}) => (
	<PageContainer>
		<AdminLink to="/admin">Admin</AdminLink>

		<Title>LUME</Title>
		<Subtitle>
			Welcome! Let's confirm it's you...
		</Subtitle>
		<LumeForm>
			<Form.Group controlId="formHorizontalEmail">
				{
					questions.map(
						item => (
							<LumeRow>
								<LumeLabel> {item.label} </LumeLabel>
								<LumeControl type="email" placeholder={item.placeholder} />
							</LumeRow>
						)
					)
				}
			</Form.Group>
		</LumeForm>
		<Menu previous={previous} next={next} />
	</PageContainer>
);

export default InputType; 