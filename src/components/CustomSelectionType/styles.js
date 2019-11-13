import styled from 'styled-components';
import { Col, Row, Form, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PageContainer = styled(Container)`
	width: 100vw;
	height: 100vh;
	background-color: #E7DDD2;	
`

export const Logo = styled(Row)`
 	padding: 50px 0px;
 	color: #35454F;
	text-align: center;
	font-size: 50px;
	font-family: Sailec-Bold;
	width: 100vw;`

export const Title = styled(Row)`
	padding: 50px 0px;
	text-align: center;
	color: #35454F;
	font-size: 30px;
	font-family: Sailec-Bold;
`

export const Subtitle = styled(Row)`
	font-size: 16px;
	text-align: center;
	font: Semibold 16px/22px Calluna !important;
`

export const OptionsList = styled.div`
    width: 78vw;
    height: auto;
    margin: 50px auto;
`

export const Option = styled.div`
	top: 0px;
	width: 13vw;
	height: auto;
	font-size: 19px;
	position: relative;
    text-align: center;
    display: inline-block;
	background-color: red !important;	
`

export const ButtonRow = styled(Row)`
	top: 0px;
	position: relative;
	height: 100px;
	margin: 0px auto;
	background-color: blue;
`	

export const SelectButton = styled.button`
	background-image: url(${props => props.icon});
	background-size: cover;	
	border-radius: 3.5vw;
	text-align: center;
	height: 7vw;
	width: 7vw;
	
	&:active {
		border: 3px solid black;
	}
`

export const SelectLabel = styled.p`
	font-family: Sailec-Bold !important;
	background-color: yellow;
	padding: 20px;
	height:  auto;
	margin-bottom: 0px;
`

export const AdminLink = styled(Link)`
    position: absolute;
    right: 50px;
    top: 50px;
`
