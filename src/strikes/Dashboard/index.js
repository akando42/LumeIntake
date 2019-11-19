import axios from 'axios';
import { Admin, Resource, ListGuesser } from 'react-admin';
import React, {memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { DashboardData } from '../../tools/api';
import jsonServerProvider from 'ra-data-json-server

import saga from './saga';
import reducer from './reducer';
import { loadAllQuestionsRequest } from './actions';

const dataProvider = jsonServerProvider('http://localhost:9000/users-read-all')

export function AdminDashboard(props){
	const []
	return (
		<Admin dataProvider={dataProvider	}
	)
}

export default connect(state => ({
	...state
}), {})(AdminDashboard)