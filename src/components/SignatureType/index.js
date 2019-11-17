import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Row, Form, Col, Container} from 'react-bootstrap';
import LumeLogo from './LUME_logo.png';

import {
	PageContainer,
	TextLogo,
	Title, 
	Subtitle, 
	AdminLink, 
	Document
} from './styles';

const SignatureType = ({title, subtitle, previous, next}) => (
	<PageContainer fluid="true">
		<TextLogo> LUME SEVEN</TextLogo>
		<img src={LumeLogo} />
		<Title> {title} </Title>
		<Subtitle> {subtitle} </Subtitle>
		<Document> 
			My Document
		</Document>
		<Row>
			<Menu previous={previous} next={next} />
		</Row>
	</PageContainer>
);

export default SignatureType;