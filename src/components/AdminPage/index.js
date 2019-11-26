import React, {useState, useEffect} from 'react';
import {Col, Row, FormControl, Button} from 'react-bootstrap';
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
	SearchBox,
	ExportButton, 
	ActivateButton, 
	DataTable, 
	DataHeader, 
	DataHead, 
	DataRow, 
	DataCell
} from './styles';

const AdminPage = ({dataProvider}) => {
	const [users, setUsers] = useState([])
	const [userProfile, setUserProfile]=useState({})

	async function fetchUserProfile(email){
		const data = {"email": email};
		const res = await axios.post(`${LAMBDA_API}/users-read-one`,data);
		setUserProfile(res.data);
		console.log("Getting Data for User Profile", res.data);
	}

	async function fetchUsers(){
		const res = await axios.get(`${LAMBDA_API}/users-read-all`);
		setUsers(res.data);
		console.log("User List",res.data);
	}	

	async function downloadUsers(){
		// console.log("Downloading Users");
		// const fields = [
		// 	'id',
		// 	'name',
		// 	'email',
		// 	'emergencyContact',
		// 	'reason_for_visit'
		// ];
		// const opts = {fields};
		// const csv = parse(users, opts);
		// console.log(csv);

		// jsonexport(users,function(err, csv){
	 //    	if(err) return console.log(err);
	 //    	console.log(csv);
		// });
	}

	useEffect(() => {
		fetchUsers();
	}, [])

	return (
		<PageContainer>
			<ContentContainer>
				<TopMenu>
					<Col md={2}>
						<LumeLogo src={Logo} />
					</Col>
				</TopMenu>
				<SearchPanel>
					<Col md={2}> Search User </Col>
					<Col md={5}>
						<SearchBox placeholder="Enter User Email" />
					</Col>
					<Col md={{span: '1', offset: '2'}}>
						<ExportButton
							data={users}
							filename={"clients.csv"}
							className="btn"
							target="_blank"
						>
							Export
						</ExportButton>
					</Col>
					<Col md={{span: '2'}}>
						<Link to="/10SS-1">
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
		</PageContainer>
	)

}



export default AdminPage;

