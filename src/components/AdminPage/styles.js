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
	Button
} from 'react-bootstrap';

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #CBCBCB;
` 

export const ExportButton = styled(CSVLink)`
	border-radius: 2px !important;
	border: #707070 1px solid;
	background-color: #35454F;
	color: white;
	&:hover {
		background-color: white;
		color: #35454F !important;
	}
`

export const ContentContainer = styled(Container)`

`

export const TopMenu = styled(Row)`
  height: 10vh;
  width: 100vw;
`

export const LumeLogo = styled.img`
	width: 8vw;
	height: auto;
`

export const SearchPanel = styled(Row)`
  height: 5vh;
  font-family: Sailec-Bold;
  font-size: 20px;
  line-height: 5vh;
`

export const SearchLabel = styled(Col)`
	line-height: 5vh;
`

export const SearchBox = styled(FormControl)`
	border-radius: 0px;
	line-height: 5vh;
`

export const ActivateButton = styled(Button)`
	border-radius: 3px !important;
	border: #707070 1px solid;
	color: white !important;
	background-color: #35454F;

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
