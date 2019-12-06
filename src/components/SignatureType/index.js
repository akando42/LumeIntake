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
	Questions
} from './styles';

const SignatureType = ({title, subtitle, agreement, previous, next}) => (
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
			<Col>Fill In Name</Col>
			<Col>Fill In Date</Col>
		</Questions>
		<Menu previous={previous} next={next} />
	</PageContainer>
);

export default SignatureType;