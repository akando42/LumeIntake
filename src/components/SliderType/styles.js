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

export const SlideContainer = styled(Col)`
  padding: 50px 0px;
`

export const SliderLabel = styled(Col)`
  font-size: 28px;
  font-weight: 700;
  color: #35454F;
  height: 15vh;
  line-height: 11vh;
`

export const RangeContainer = styled(Col)`
  height: 15vh;
`

export const Slider = styled.input`
  margin: 25px 0px;
  -webkit-appearance: none; 
  appearance: none;
  width: 100%; 
  height: 25px; 
  background: #FFF;
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;

  &:hover {
    opacity: 1; 
  }

  &::-webkit-slider-thumb {
     -webkit-appearance: none; 
    appearance: none;
    width: 50px; 
    height: 50px; 
    border-radius: 25px;
    border: 15px solid #35454F;
    background: #FFFFFF; 
    cursor: pointer; 
  }

  &::-moz-range-thumb  {
    width: 50px; 
    height: 50px;
    border-radius: 25px;
    border: 15px solid #35454F; 
    background: #4CAF50; 
    cursor: pointer; 
  }
`

export const Start = styled(Col)`
  text-align: left;
  color: #35454F;
  font-family: Calluna Semibold;
`

export const Middle = styled(Col)`
  text-align: center;
  color: #35454F;
  font-family: Calluna Semibold;
`
export const End = styled(Col)`
  text-align: right;
  color: #35454F;
  font-family: Calluna Semibold;
`

export const AdminLink = styled(Link)`
    position: absolute;
    right: 50px;
    top: 50px;
`