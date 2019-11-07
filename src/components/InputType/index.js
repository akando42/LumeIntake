import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {
	Col,
	Row, 
	Form, 
	Container,
} from 'react-bootstrap';

const PageContainer = styled(Container)`
	width: 100vw;
	height: 100vh;
	background-color: #E7DDD2;	
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
	margin: 0px auto;
	width: 75vw;
`

const LumeLabel = styled(Form.Label)`
	height: 49px;
	padding: 0px 20px;
	font-size: 21px;
	display: inline-block;
	font-family: Sailec-Bold;
	text-align: right;
	width: 25vw;
`

const LumeControlBox = styled.div`
	display: inline-block;
	height: 49px;
	width: 45vw;
`
const LumeControl = styled(Form.Control)`
	text-align: left;
	height: 49px;
	width: 30vw;
	padding: 0px 20px;
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
									<LumeControlBox>
										<LumeControl type="email" placeholder={item.placeholder} />
									</LumeControlBox>
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