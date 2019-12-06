import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { sixteenStrike } from '../../tools/api';
import LumeLogo from './LUME_logo.png';
import { Col, Row} from 'react-bootstrap';
import {
	PageContainer,
	Logo, 
	Title, 
	Subtitle
} from './styles';

export function SixteenStrike({loadAllQuestionsRequest}){
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${sixteenStrike}?token=${CMS_API_TOKEN}`,
	    );
	    console.log("Last Page", res.data);

	    setPageTitle(res.data.Title);
	    setPageSubtitle(res.data.Subtitle);

	}

	useEffect(() => {
		getPageContent();
	}, [])

	return (
		<PageContainer fluid="true">
			<Row>
				<Logo image={LumeLogo} />
			</Row>
			<Row>
				<Title> {pageTitle} </Title>
			</Row>
			<Row>
				<Subtitle md={{span: '4', offset:'4'}}>
					{pageSubtitle}
				</Subtitle>
			</Row>
		</PageContainer>
	);
}

export default SixteenStrike;
	