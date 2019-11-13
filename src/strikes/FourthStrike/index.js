import React from 'react';
import InputType from '../../components/InputType';
import CheckBoxType from '../../components/CheckBoxType';

const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-10'
const next = '/10SS-6'
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