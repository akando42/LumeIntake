import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ArrowMenu = styled.div`
	font-family: Sailec-Bold;
	text-decoration: none;
	display: inline-block;
	position: absolute;
	width: 100vw;
	bottom: 10vh;
	left: 0px;
`

const PreviousLink = styled(Link)`
    float: left;
    text-transform: uppercase;
    text-decoration: none !important;
    padding-left: 5vw;
    font-size: 30px;
    color: #343a40;
`
const NextLink = styled(Link)`
    text-decoration: none !important;
    text-transform: uppercase;
    padding-right: 5vw;
	font-size: 30px;
	color: #343a40;
    float: right;
`


const Menu = (props) => (
	<ArrowMenu>
		{
			props.previous ? (
				<PreviousLink to={props.previous}>
					<span>&#8592;</span> Previous
				</PreviousLink>
			):(
				<span></span>
			)
		}
		{
			props.next ? (
			    <NextLink to={props.next} onClick={props.sendData}>
					Next <span>&#10230;</span>
				</NextLink>
			):(
				<span></span>
			)
		}
	</ArrowMenu>
)

export default Menu;