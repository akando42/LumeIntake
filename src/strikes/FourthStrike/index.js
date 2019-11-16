import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { thirdStrike } from '../../tools/api';
import CheckBoxType from '../../components/CheckBoxType';

const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-5'
const next = '/10SS-7'
const options = [
	{
		id: 1,
		content: 'DEDICATED',
	 	detail:'I’m focused on my health and wellness, it’s a priority in my life'
	},
	{
		id: 2,
		content: 'SOME WHERE IN THE MIDDLE',
	 	detail:'I dabble in my health and wellness when I have the time/money'
	},
	{
		id: 3,
		content: 'JUST GETTING STARTED',
	 	detail:'I haven’t spent a lot of time or energy on my health and wellness'
	}
]

export function FourthStrike(props){
	const [intakeOptions, setIntakeOptions] = useState([]);

	async function getOptions(){
		// const res = await axios.get(
	 //      `${CMS_API_URL}${thirdStrike}?token=${CMS_API_TOKEN}`,
	 //    );

	 //    setIntakeOptions(res.data.questions);
		setIntakeOptions(options);
	}

	useEffect(() => {
		getOptions();
		// loadAllQuestionsRequest();
	}, [])

	function onChange(idx) {
		let options = Object.assign([], intakeOptions);
		for (let i = 0; i < options.length; i++) {
			if (options[i].id == idx) {
				options[i].value = true;
			} else {
				options[i].value = false;
			}
		}

		setIntakeOptions(options)
	}

	return (
		<CheckBoxType
		    options={options} 
		    title={title}
		    subtitle={subtitle} 
		    next={next}
		    previous={previous}
		    updateState={onChange}
		/>
	);
}

export default connect(state => ({
	...state
}), {})(FourthStrike)