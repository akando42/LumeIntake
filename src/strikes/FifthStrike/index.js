import React from 'react';
import InputType from '../../components/InputType';
import CheckBoxType from '../../components/CheckBoxType';

const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-5'
const next = '/'
const options = [
	{
		id: 1,
		title: 'DEDICATED',
	 	content:'I’m focused on my health and wellness, it’s a priority in my life'
	},
	{
		id: 2,
		title: 'SOME WHERE IN THE MIDDLE',
	 	content:'I dabble in my health and wellness when I have the time/money'
	},
	{
		id: 3,
		title: 'JUST GETTING STARTED',
	 	content:'I haven’t spent a lot of time or energy on my health and wellness'
	}
]

const FifthStrike = () => (
	<div>
		<CheckBoxType
		    options={options} 
		    title={title}
		    subtitle={subtitle} 
		    next={next}
		    previous={previous}
		/>

	</div>
)

export default FifthStrike;