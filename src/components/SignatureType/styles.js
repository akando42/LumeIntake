import styled from 'styled-components';
import { Col, Row, Form, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { devices } from '../../devices';

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