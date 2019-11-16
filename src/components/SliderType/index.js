import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Row, Form, Col, Container} from 'react-bootstrap';

import {
	SlideContainer, 
	Slider, 
	SliderLabel,
	PageContainer, 
	Logo,
	Title, 
	Subtitle, 
	AdminLink,
	Start,
	Middle, 
	End,
	RangeContainer
} from './styles';


const SliderType = ({title, subtitle, selections, previous, next}) => (
	<PageContainer fluid="true">
		<AdminLink to="/admin">Admin</AdminLink>
        
        <Logo>LUME</Logo>
        <Title> {title} </Title>
        
        <Subtitle>
        	{subtitle}
       	</Subtitle>
       	<Row>
	       	<SlideContainer md={{span: '8', offset: '2'}}>
	       		{
	       			selections.map(
	       				item => (
	       					<div key={item.id}>
	       						<Row>
	       							<SliderLabel md={2}>
										{item.name}
									</SliderLabel>
		       						<RangeContainer md={10}>
			       						<Slider type="range" min="0" max="100" step="25" list="steplist" />
										<datalist id="steplist">
										    <option>{item.start}</option>
										    <option>{item.middle}</option>
										    <option>{item.end}</option>
										</datalist>
										<Row>
		       								<Start md={2}>{item.start}</Start>
		       								<Middle md={8}>{item.middle}</Middle>
		       								<End md={2}>{item.end}</End>
		       							</Row>
									</RangeContainer>
								</Row>
	       					</div>
	       				)
	       			)
	       		}
	       	</SlideContainer>
       	</Row>
       	<Menu previous={previous} next={next} />
	</PageContainer>
);

export default SliderType;

