import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Row, Form, Col, Container} from 'react-bootstrap';
import {
	PageContainer, 
	Title, 
	Subtitle,
	LumeForm,
	LumeRow, 
	LumeLabel, 
	LumeControl, 
	LumeOption, 
	OptionDetails,
	AdminLink,
} from './styles'

const CheckBoxType = ({title, subtitle, options, previous, next, updateState}) => {
	function onClick(e) {
		updateState(e.target.id)
	}

	return (
		<PageContainer fluid="true">
			<Row>
				<Title md={{span: '6', offset: '3'}} xs={12}>
					{title}
				</Title>
			</Row>
			<Row>
				<Subtitle>
					{subtitle}
				</Subtitle>
			</Row>
			<Row>
				<LumeForm md={{span: '8', offset: '2'}} sm={{span: '10', offset: '1'}}> 
					<Form>
					    <Form.Group controlId="formHorizontalEmail">
							<Col>
								{
									options.map( 
										(item, idx) => (
											<LumeRow key={"checbox-"+idx}>
												<LumeOption
													type="radio"
													label={item.content}
													name="formHorizontalRadios"
													id={item.id}
													onClick={onClick}
												/>
												{item.details ?
													<OptionDetails> {item.details} </OptionDetails> : null
												}
												
											</LumeRow>
										)
									)
								}
							</Col>
					    </Form.Group>
				    </Form>
				</LumeForm>
			</Row>
			<Menu previous={previous} next={next} />
		</PageContainer>
	)
};

export default CheckBoxType;