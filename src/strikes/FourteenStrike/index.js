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
const previous = '/10SS-13'
const next = '/10SS-15'
const selections = [
	{
		id: 1,
		name: 'My sleep habits are...',
		start:'Healthy. I always get ~8 hours of uninterrupted sleep every night',
		middle:'Average. I mostly get ~8 hours of uninterrupted sleep every night',
		end:'Poor. I struggle with getting enough sleep, falling asleep, waking up or staying asleep through the night'
	}
]

export function FourteenStrike({loadAllQuestionsRequest}){
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
	


export default FourteenStrike;