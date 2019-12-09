import React, {useState, useEffect} from 'react';
import {Col, Row, FormControl, Button, Modal, Form} from 'react-bootstrap';
import Logo from '../../assets/LUME_logo.png';
import axios from 'axios';
import { CSVLink, CSVDownload } from 'react-csv';
import { Link } from 'react-router-dom';

import {LAMBDA_API} from '../../configs';
import {
	PageContainer,
	ContentContainer,
	TopMenu, 
	LumeLogo,
	SearchPanel,
	SearchLabel,
	SearchBox,
	ExportButton, 
	ActivateButton, 
	DataTable, 
	DataHeader, 
	DataHead, 
	DataRow, 
	DataCell,
	ClientProfileModal,
	ClientLabel, 
	ClientData
} from './styles';

const AdminPage = ({dataProvider}) => {
	const [users, setUsers] = useState([])
	const [userProfile, setUserProfile]=useState({})

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	async function fetchUserProfile(email){
		const data = {"email": email};
		const res = await axios.post(`${LAMBDA_API}/users-read-one`,data);
		setUserProfile(res.data);
		setShow(true)
	}

	async function fetchUsers(){
		const res = await axios.get(`${LAMBDA_API}/users-read-all`);
		setUsers(res.data);
	}	

	useEffect(() => {
		fetchUsers();
	}, [])

	return (
		<PageContainer>
			<ContentContainer>
				<TopMenu>
					<Col lg={2}>
						<LumeLogo src={Logo} />
					</Col>
				</TopMenu>
				<SearchPanel>
					<Col lg={3} md={3} sm={2}>
						<SearchLabel> Search User </SearchLabel>
					</Col>
					<Col lg={4} md={9} sm={9}>
						<SearchBox placeholder="Search by Name or Email" />
					</Col>
					<Col lg={2} md={6} sm={6}>
						<ExportButton
							data={users}
							filename={"clients.csv"}
							className="btn"
							target="_blank"
						>
							Export
						</ExportButton>
					</Col>
					<Col lg={3} md={6} sm={6}>
						<Link to="/10SS-01">
							<ActivateButton>
								Activate Quiz
							</ActivateButton>
						</Link>
					</Col>
				</SearchPanel>
				<DataTable>
					<DataHeader>
						<DataRow >
							<DataHead>Name</DataHead>
							<DataHead>Email</DataHead>
							<DataHead>Phone</DataHead>
						</DataRow>
					</DataHeader>
					<tbody>
						{
							users.map( 
								user => (
									<DataRow 
										key={user.id} 
										onClick={() => fetchUserProfile(user.email)}
									>
										<DataCell>
											{user.name}
										</DataCell>
										<DataCell>
											{user.email}
										</DataCell>
										<DataCell>
											{user.emergencyContact}
										</DataCell>
									</DataRow>
								)
							)
						}
					</tbody>
				</DataTable>
			</ContentContainer>
			<ClientProfileModal size="xl" show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Row>
						<Col md={{span: "auto"}}>
							{userProfile.name}
						</Col>
						<Col md={{span: "auto"}}>
							{userProfile.email}
						</Col>
					</Row>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<ClientLabel md={6}>DOB</ClientLabel>
						<ClientData md={6}>{userProfile.dob}</ClientData>
					</Row>
					<Row>
						<ClientLabel>EMERGENCY CONTACT</ClientLabel>
						<ClientData>{userProfile.emergencyContact}</ClientData>
					</Row>
					<Row>
						<ClientLabel>REASON FOR VISIT</ClientLabel>
						<ClientData>{userProfile.reason_for_visit}</ClientData>
					</Row>
					<Row>
						<ClientLabel>LIFESTYLE</ClientLabel> 
						<ClientData>{userProfile.life_style}</ClientData>
					</Row>
					<Row>
						<ClientLabel>PRIORITIES</ClientLabel>
						<ClientData>{userProfile.priorities}</ClientData>
					</Row>
					<Row>
						<ClientLabel>FEELS:STRESS</ClientLabel>
						<ClientData>{userProfile.feels_focus}</ClientData>
					</Row>
					<Row>
						<ClientLabel>FEELS:MOOD</ClientLabel>
						<ClientData>{userProfile.feels_mood}</ClientData>
					</Row>
					<Row>
						<ClientLabel>FEELS:FOCUS</ClientLabel>
						<ClientData>{userProfile.feels_stress}</ClientData>
					</Row>

					<Row>
						<ClientLabel>NOTES</ClientLabel>
						<ClientData>
							<Form.Control as="textarea" rows="3" />
						</ClientData>
					</Row>
				</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
				</Modal.Footer>
			</ClientProfileModal>
		</PageContainer>
	)

}



export default AdminPage;

