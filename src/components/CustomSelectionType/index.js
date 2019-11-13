import React from 'react';
import Menu from "../Menu";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import { Col,Row, Form, Container} from 'react-bootstrap';
import {
	PageContainer,
	Logo,
	Title, 
	Subtitle, 
	AdminLink,
	OptionsList, 
	Option,
	SelectButton, 
	SelectLabel,
	ButtonRow,
} from './styles';

const CustomSelectionType = ({title, subtitle, options, previous, next}) => (
	<PageContainer fluid="true">
        <AdminLink to="/admin">Admin</AdminLink>
        <Logo>LUME</Logo>
        
        <Title> 
        	What are your priorities? 
        </Title>

        <Subtitle>
        	Please select any you're interested in addressing or improving.
       	</Subtitle>
       	<Row> </Row>
       	
       	<OptionsList>
       		{
       			options.map(
       				item => (
   						<Option md={2} lg={2} sm={6}>
   							<ButtonRow>
   								<SelectButton icon={item.icon} /> 
   							</ButtonRow>
                <Row>
   							  <SelectLabel> {item.name} </SelectLabel>
                </Row>
   						</Option>
       				)
       			)
       		}
       	</OptionsList>
	</PageContainer>
)

export default CustomSelectionType;
