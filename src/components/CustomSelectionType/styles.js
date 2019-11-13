import styled from 'styled-components';
import { Col, Row, Form, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PageContainer = styled(Container)`
	height: 100vh;
	background-color: #E7DDD2;	
`

export const Logo = styled(Col)`
 	padding: 50px 0px;
 	color: #35454F;
	text-align: center;
	font-size: 36px;
	font-family: Sailec-Bold;
	 width: 100vw;
`

export const Title = styled(Col)`
	padding: 50px 0px;
	text-align: center;
	color: #35454F;
	font-size: 30px;
	font-family: Sailec-Bold;
`

export const Subtitle = styled(Col)`
	font-size: 16px;
	text-align: center;
	font: Semibold 16px/22px Calluna !important;
`

export const OptionsList = styled(Row)`
    width: 78vw;
    height: auto;
    margin: 50px auto;
`

export const Option = styled(Col)`
	top: 0px;
	width: 13vw;
	height: auto;
	font-size: 19px;
	position: relative;
    text-align: center;
    display: inline-block;	
`

export const ButtonRow = styled(Row)`
	top: 0px;
	position: relative;
	height: 100px;
	margin: 0px auto;
`	

export const SelectButton = styled.button`
	background-image: url(${props => props.icon});
	background-size: cover;	
	border-radius: 3.5vw;
	text-align: center;
	height: 7vw;
	width: 7vw;
	margin: 0 auto;
	
	&:active {
		border: 3px solid black;
	}
`

export const SelectLabel = styled.p`
	width: 100%;
	padding: 10px;
	font-family: Sailec-Bold;
	text-align: center !important;
	margin: 30px auto;
`

export const AdminLink = styled(Link)`
    position: absolute;
    right: 50px;
    top: 50px;
`
