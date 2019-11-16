import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../devices';
// import Logo from '../../assets/Lume_logo.png';
import { Col, Row, Form, Container, Button} from 'react-bootstrap';

export const PageContainer = styled(Container)`
  height: 100vh;
  background-color: #E7DDD2;  
`

export const TextLogo = styled.div`
  width: 100vw;
  color: #35454F;
  font-size: 36px;
  padding: 50px 0px;
  text-align: center;
  font-family: Sailec-Bold;
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
    height: 60vh;
    width: 80%;
    margin: 0 auto;
    background-color: yellow;
`

export const AdminLink = styled(Link)`
    position: absolute;
    right: 50px;
    top: 50px;
`