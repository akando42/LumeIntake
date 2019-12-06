import { Col, Row, Form, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
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
 	padding: 50px 0px 0px 0px;
 	color: #35454F;
 	text-align: center;
 	width: 100vw;
	font-size: 26px;
	font-family: Sailec-Bold;
`

export const Subtitle = styled(Col)`
	padding: 50px 0px;
	text-align: center;
	color: #35454F;
	font-size: 18px;
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
	text-align: left;
	font-size: 20px;
	height: 49px;
	text-transform: uppercase;
`

export const LumeControlBox = styled.div`
	display: inline-block;
	height: 49px;
	text-align: center;
	width: 70vw;
	margin: 0px auto;
`

export const LumeControl = styled(Form.Control)`
	border-radius: 0px;
	border: 0px;
	text-align: left;
	padding: 20px;
	color: red;
	width: 70vw;
	margin: 0px auto;
`	

export const AdminLink = styled(Link)`
    position: fixed;
    right: 50px;
    top: 50px;
`