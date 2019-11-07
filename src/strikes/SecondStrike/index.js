import React from 'react';
import InputType from '../../components/InputType';

const title = 'Just in case.'
const subtitle = 'Please provide an emergency contact'
const previous = '/'
const next = '/10SS-10'
const questions = [
	{
		'label':'Contact Name',
		'placeholder':'Please Input Your Email'
	},
	{
		'label': 'Contact Phone Number',
		'placeholder':'Please Input Your Full Name'
	}
]

const SecondStrike = () => (
	<div>
		<InputType
		    questions={questions} 
		    title={title}
		    subtitle={subtitle} 
		    previous={previous}
		    next={next}
		/>
	</div>
)

export default SecondStrike;