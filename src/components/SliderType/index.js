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

const selections = [
	{
		'id':1,
		'name':'STRESS',
		'start':'I rarely feel stressed',
		'middle':'I feel stressed sometimes',
		'end':'I feel stressed all the time'
	},
	{
		'id':2,
		'name':'MOOD',
		'start':'I feel happy & positive all the time',
		'middle':'I feel happy & positive sometimes',
		'end':'I feel sad & negative most of the time'
	},
	{
		'id':3,
		'name':'FOCUS',
		'start':'I’m able to focus & be productive all the time',
		'middle':'I’m able to focus & be productive sometimes',
		'end':'I have a hard time staying focused & being productive'
	}
]

const SliderType = ({title, subtitle, previous, next}) => (
	<PageContainer fluid="true">
		<AdminLink to="/admin">Admin</AdminLink>
        
        <Logo>LUME</Logo>
        <Title> What are your priorities ? </Title>
        
        <Subtitle>
        	Please select any you're interested in addressing or improving.
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
	</PageContainer>
);

export default SliderType;

