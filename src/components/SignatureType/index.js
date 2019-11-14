import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Row, Form, Col, Container} from 'react-bootstrap';

const SignatureType = ({title, subtitle, previous, next}) => (
	<PageContainer fluid="true">
		<AdminLink to="/admin">Admin</AdminLink>
		<Logo> LUME </Logo>
		<Title>
	</PageContainer>
)