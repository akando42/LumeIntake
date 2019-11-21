import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from '../../authProvider';
import LoginPage from './LoginPage' ;

const dataProvider = jsonServerProvider('http://localhost:3000/.netlify/functions/users-read-all');

const AdminPage = ({history}) => (
	<Admin history={history} dataProvider={dataProvider} loginPage={LoginPage} authProvider={authProvider}>
		<Resource name="users" list={ListGuesser} />
	</Admin>
)

export default AdminPage;

