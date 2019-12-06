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
  margin-top: 30vh;
`

export const Subtitle = styled(Col)`
  font-size: 21px;
  text-align: center;
  font: Semibold 16px/22px Calluna !important;
`