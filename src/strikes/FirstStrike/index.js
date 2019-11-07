import React from 'react';
import InputType from '../../components/InputType';

const title = ''
const subtitle = ''
const next = '/10SS-5'
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

const FirstStrike = () => (
	<div>
		<InputType
		    questions={questions} 
		    title={title}
		    subtitle={subtitle} 
		    next={next}
		/>
	</div>
)

export default FirstStrike;