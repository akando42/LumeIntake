import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import { Col, Row, Form, Container} from 'react-bootstrap';
import { 
	PageContainer, 
	Title, 
	Subtitle, 
	LumeForm,
	LumeRow, 
	LumeLabel,
	LumeControl,
	LumeControlBox,
	AdminLink,
} from './styles'

const InputType = ({questions, title, subtitle, previous, next}) => (
	<PageContainer fluid="true">
		<Row>
			<AdminLink to="/admin">Admin</AdminLink>
		</Row>
		
		<Row>
			<Title md={{span: '6', offset: '3'}} xs={12}>
				LUME
			</Title>
		</Row>

		<Row>
			<Subtitle> Welcome! Let's confirm it's you... </Subtitle>
		</Row>

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