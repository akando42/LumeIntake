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
	IntakeQuestion,
	LumeRow, 
	LumeLabel,
	LumeControl,
	YesBox,
	LumeControlBox,
	AdminLink,
} from './styles'

const CustomInputType = ({questions, title, subtitle, previous, next, updateState}) => {
	function onChange(e) {
		updateState(e.target.getAttribute('data-id'), e.target.value)
	}

	return (
		<PageContainer fluid="true">			
			<Row>
				<Title md={{span: '6', offset: '3'}} xs={12}>
					{title}
				</Title>
			</Row>

			<LumeForm>
				<Form.Group controlId="formHorizontalEmail">
					{
						questions.map(
							(item, idx) => (
								<IntakeQuestion>
									<LumeRow>
										<LumeLabel>
											{item.label}
											{item.yes_no === true ?
												<YesBox key='inline-radio' className="mb-3">
													<Form.Check inline label="Y" type="radio" name="yes-no" id="yes-radio" />
			      									<Form.Check inline label="N" type="radio" name="yes-no" id="no-radio" />
			      								</YesBox> :null}
										</LumeLabel>
									</LumeRow>
									<LumeRow key={"question-"+idx}>
										<LumeControlBox>
											<LumeControl
												data-id={idx}
												type="text"
												placeholder={item.placeholder}
												value={item.value}
												onChange={onChange} 
											/>
										</LumeControlBox>
									</LumeRow>
								</IntakeQuestion>
							)
						)
					}
				</Form.Group>
			</LumeForm>
			<Menu previous={previous} next={next} />
		</PageContainer>
	)
};

export default CustomInputType; 