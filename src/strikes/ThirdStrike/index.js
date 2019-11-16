import React from 'react';
import InputType from '../../components/InputType';
import CheckBoxType from '../../components/CheckBoxType';

const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-4'
const next = '/10SS-6'
const options = [
	{
		id: 1,
	 	content:'JUST CHECKING IT OUT'
	},
	{
		id: 2,
	 	content:'OVERALL WELLNESS',
	},
	{
		id: 3,
	 	content:'TO ADDRESS A SPECIFIC CONCERN'
	}
]

const FourthStrike = () => (
	<CheckBoxType
	    options={options} 
	    title={title}
	    subtitle={subtitle} 
	    next={next}
	    previous={previous}
	/>
)

export default FourthStrike;