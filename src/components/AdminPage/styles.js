import styled from 'styled-components';
import { devices } from '../../devices';
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';
import { 
	Col, 
	Table, 
	Row, 
	FormControl, 
	Container, 
	Button, 
	Modal
} from 'react-bootstrap';

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #CBCBCB;
  padding: 0px !important;
  margin: 0px !important;
` 
export const ContentContainer = styled(Container)`
`

export const TopMenu = styled(Row)`
  width: 100vw;
  padding: 45px 0px;
`

export const LumeLogo = styled.img`
  width: 160px;
  height: auto;
`

export const SearchPanel = styled(Row)`
	font-family: Sailec-Bold;
	font-size: 20px;
	line-height: 5vh;
	padding: 20px 0px 10px 0px;
`

export const SearchLabel = styled(Col)`
	width: 100%;
	font-size: 20px;
	text-align: left;
	font-family: Sailec-Bold;
	vertical-align: middle;
	margin: 10px auto;
`

export const SearchBox = styled(FormControl)`
	border-radius: 0px;
	width: 100%;
	margin: 20px auto;
	color: #ccc;
`

export const ExportButton = styled(CSVLink)`
	border-radius: 25px !important;
	border: #707070 1px solid;
	background-color: #35454F;
	width: 100%;
	color: white;
	display: inline-block;
	text-align: center;
	vertical-align: middle !important;
	margin: 20px auto;
	&:hover {
		background-color: white;
		color: #35454F !important;
	}
`

export const StartSection = styled(Row)`
	margin: 100px auto;
`

export const ActivateButton = styled(Button)`
	border-radius: 25px !important;
	border: #707070 1px solid;
	color: white !important;
	background-color: #35454F;
	width: 100%;
	margin: 20px auto;
	&:hover {
		background-color: white;
		color: #35454F !important;
	}
`

export const DataTable = styled(Table)`
    background-color: white;
`
export const DataHeader = styled.thead``
export const DataHead = styled.th``
export const DataRow = styled.tr``
export const DataCell = styled.td``

export const ClientProfileModal = styled(Modal)`
	width: 100%;
	border-radius: 0px !important;	
	font-family: Sailec-Bold;
	font-family: 28px;
`
export const ClientLabel = styled(Col)`
	color: #35454F;
	font-size: 20px;
	text-align: right;
	font-family: Sailec-Bold;
`
export const ClientData = styled(Col)`
    color: #35454F;
    opacity: 0.5;
    font-family: Sailec-Bold;
`
