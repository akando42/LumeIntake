import axios from 'axios';
import React, {memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SliderType from '../../components/SliderType';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';

import saga from './saga';
import reducer from './reducer';
import { loadAllQuestionsRequest } from './actions';

const title = "Just a few more questions..."
const subtitle = 'Use the slider to make this statement true for you'
const previous = '/10SS-18'
const next = '/'
const selections = [
	{
		id: 1,
		name: 'My exercise habits are...',
		start:'Extreme. I do strenuous activity 5+ days a week',
		middle:'Moderate. I work up a sweat 3+ days a week',
		end:'Light. I work up a sweat less than 1x a week'
	}
]

export function FifteenStrike({loadAllQuestionsRequest}){
	const [intakeQuestions, setIntakeQuestions] = useState([]);

	async function getQuestions(){
		const res = await axios.get(
	      CMS_API_URL+'api/singletons/get/first_strike?token='+CMS_API_TOKEN,
	    );
	    console.log("Getting Questions from APIs with responses", res.data.questions);
	    setIntakeQuestions(res.data.questions);
	}
	useEffect(() => {
		getQuestions();
		// loadAllQuestionsRequest();
	}, [])
	return (
		<SliderType 
			selections={selections}
			title={title}
			subtitle={subtitle}
			next={next}
			previous={previous}
		/>
	);
}
	


export default FifteenStrike;