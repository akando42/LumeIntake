import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ArrowMenu = styled.div`
	font-family: Sailec-Bold;
	display: inline-block;
	width: 100vw;
	position: absolute;
	bottom: 10vh;
	left: 0px;
`

const PreviousLink = styled(Link)`
    text-decoration: none;
    float: left;
    padding-left: 5vw;
    font-size: 30px;
    text-transform: uppercase;
`
const NextLink = styled(Link)`
    text-decoration: none;
    float: right;
    padding-right: 5vw;
    font-size: 30px;
    text-transform: uppercase;
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
			    <NextLink to={props.next}>
					Next <span>&#10230;</span>
				</NextLink>
			):(
				<span></span>
			)
		}
	</ArrowMenu>
)

export default Menu;