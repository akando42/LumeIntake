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

const title = "Let’s discuss your `Functions` "
const subtitle = 'Please move the slider to best reflect you'
const previous = '/10SS-9'
const next = '/10SS-11'
const selections = [
	{
		'start':'I have a lot of energy',
		'middle':'I struggle with my energy levels sometimes',
		'end':'I struggle with having enough energy to get through the day'
	},
	{
		'start':'I rarely get sick',
		'middle':'I get sick a normal amount',
		'end':'I get sick too offen'
	},
	{
		'start':'I rarely have aches & pain in my body',
		'middle':'Sometimes I have aches & pains after strenous activity',
		'end':'I often have unexplained aches & pains'
	}
]

export function TenStrike({loadAllQuestionsRequest}){
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
	


export default TenStrike;