import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../devices';
import { Col, Row, Form, Container, Button} from 'react-bootstrap';

export const PageContainer = styled(Container)`
  height: 100vh;
  background-color: #E7DDD2;  
`

export const Logo = styled.div`
  height: 60px;
  width: 180px;
  background-image: url(${props => props.image});
  background-size: cover;
  margin: 20px auto;
`

export const Title = styled(Col)`
  padding: 10px 0px;
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

export const Document = styled(Row)`
    height: 50vh;
    width: 80%;
    margin: 20px auto;
    overflow: scroll;
    color: #35454F;
    padding: 25px;
    background-color: white;
`

export const Questions = styled(Row)`
    width: 80%;
    margin: 1px auto;
`

export const Question = styled(Col)`
    display: inline-block;
    font-family: Sailec-Bold;
    font-size: 21px;
`

export const LumeLabel = styled(Form.Label)`
  font-family: Sailec-Bold;
  display: inline-block;
  padding: 10px 0px;
  line-height: 49px;
  text-align: left;
  font-size: 21px;
  height: 49px;
  width: 25vw;
  width: 100%;
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
  height: 50px;
  width: 100%;
  margin: 10px 0px 0px 0px;
  padding: 0px 20px;
` 