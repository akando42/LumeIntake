import React from 'react';
import InputType from '../../components/InputType';


const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-5'
const next = '/'
const questions = [
	{
		'label':'Email',
		'placeholder':'Please Input Your Email'
	},
	{
		'label': 'Name',
		'placeholder':'Please Input Your Full Name'
	},
	{
		'label':'DOB',
		'placeholder':'dd/mm/yyyy'
	}
]

const FourthStrike = () => (
	<div>
		<InputType
		    questions={questions} 
		    title={title}
		    subtitle={subtitle} 
		    previous={previous}
		/>
	</div>
)

export default FourthStrike;