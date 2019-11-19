import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3000/.netlify/functions/users-read-all');

const AdminPage = () => (
	<Admin dataProvider={dataProvider}>
		<Resource name="users" list={ListGuesser} />
	</Admin>
)

export default AdminPage;

