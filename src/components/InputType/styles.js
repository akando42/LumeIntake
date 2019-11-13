import { Col, Row, Form, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const PageContainer = styled(Container)`
	height: 100vh;
	background-color: #E7DDD2;	
`

export const Title = styled(Col)`
 	padding: 50px 0px;
 	color: #35454F;
 	text-align: center;
 	width: 100vw;
	font-size: 50px;
	font-family: Sailec-Bold;
`

export const Subtitle = styled(Col)`
	padding: 50px 0px;
	text-align: center;
	color: #35454F;
	font-size: 30px;
	font-family: Sailec-Bold;
	text-align: center;
`

export const LumeForm = styled(Form)`
	width: 100% !important;
`

export const LumeRow = styled(Form.Row)`
	padding: 10px 0px;
	margin: 0px auto;
	width: 75vw;
`

export const LumeLabel = styled(Form.Label)`
	font-family: Sailec-Bold;
	display: inline-block;
	padding: 0px 20px;
	line-height: 49px;
	text-align: right;
	font-size: 21px;
	height: 49px;
	width: 25vw;
`

export const LumeControlBox = styled.div`
	display: inline-block;
	height: 49px;
	width: 45vw;
`

export const LumeControl = styled(Form.Control)`
	border-radius: 0px;
	border: 0px;
	text-align: left;
	height: 49px;
	width: 30vw;
	padding: 0px 20px;
`	

export const AdminLink = styled(Link)`
    position: fixed;
    right: 50px;
    top: 50px;
`