import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from '../../authProvider';


const dataProvider = jsonServerProvider('http://localhost:3000/.netlify/functions/users-read-all');

const AdminPage = () => (
	<Admin dataProvider={dataProvider} authProvider={authProvider}>
		<Resource name="users" list={ListGuesser} />
	</Admin>
)

export default AdminPage;

