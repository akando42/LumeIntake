import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import { Col, Row, Form, Container} from 'react-bootstrap';
import { 
	PageContainer, 
	Logo,
	Title, 
	Subtitle, 
	LumeForm,
	LumeRow, 
	LumeLabel,
	LumeControl,
	LumeControlBox,
	AdminLink,
} from './styles'

const InputType = ({questions, title, subtitle, previous, next, updateState}) => {
	function onChange(e) {
		updateState(e.target.getAttribute('data-id'), e.target.value)
	}

	return (
		<PageContainer fluid="true">	
			<Logo>LUME</Logo>
        	
			<Row>
				<Title md={{span: '6', offset: '3'}} xs={12}>
					{title}
				</Title>
			</Row>

			<Row>
				<Subtitle md={{offset:'3', span:'6'}}> {subtitle} </Subtitle>
			</Row>

			<LumeForm>
				<Form.Group controlId="formHorizontalEmail">
					{
						questions.map(
							(item, idx) => (
								<LumeRow key={"question-"+idx}>
									<LumeLabel> {item.label} </LumeLabel>
									<LumeControlBox>
										<LumeControl
											data-id={idx}
											placeholder={item.placeholder}
											value={item.value}
											onChange={onChange}
											as="textarea" 
											rows="6"
										/>
									</LumeControlBox>
								</LumeRow>
							)
						)
					}
				</Form.Group>
			</LumeForm>
			<Menu previous={previous} next={next} />
		</PageContainer>
	)
};

export default InputType; 