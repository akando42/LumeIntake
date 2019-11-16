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
const previous = '/10SS-12'
const next = '/10SS-14'
const selections = [
	{
		id: 1,
		name: 'My diet is',
		start:'Balanced. My meals are full of fruits and vegetables.',
		middle:'Sometimes my meals are balanced, sometimes they\'re not.',
		end:'I struggle keeping a balanced diet. My meals often lack fruits or vegetables.'
	}
]

export function ThirteenStrike({loadAllQuestionsRequest}){
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
	


export default ThirteenStrike;