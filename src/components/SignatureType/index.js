import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Row, Form, Col, Container} from 'react-bootstrap';
import LumeLogo from './LUME_logo.png';

import {
	PageContainer,
	Logo,
	Title, 
	Subtitle, 
	AdminLink, 
	Document,
	Questions,
	Question,
	LumeLabel,
	LumeControl
} from './styles';

const SignatureType = ({title, subtitle, agreement, questions, previous, next}) => (
	<PageContainer fluid="true">
		<Row>
			<Logo image={LumeLogo} />
		</Row>
		<Row>
			<Title> {title} </Title>
		</Row>
		<Document> 
			<div dangerouslySetInnerHTML={{ __html: agreement}}></div>
		</Document>
		<Questions>
			{
				questions.map(item => (
					<Question key={item.label} md={6}>
						<LumeControl
							type="text"
							placeholder={item.placeholder}
						/>
						<LumeLabel>
							{item.label}
						</LumeLabel>
					</Question>
				))
			}
		</Questions>
		<Menu previous={previous} next={next} />
	</PageContainer>
);

export default SignatureType;