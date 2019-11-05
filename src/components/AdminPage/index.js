import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
const dataProvider = simpleRestProvider('http://localhost:9000');

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
        <Resource name="users-read-all" list={ListGuesser} />
  </Admin>
);

export default AdminPage;