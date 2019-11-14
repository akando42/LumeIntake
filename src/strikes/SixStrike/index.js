import React from 'react';
import SliderType from '../../components/SliderType';

const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-6'
const next = '/'
const selections = [
	{
		'start':'I rarely feel stressed',
		'middle':'I feel stressed sometimes',
		'end':'I feel stressed all the time'
	},
	{
		'start':'I feel happy & positive all the time',
		'middle':'I feel happy & positive sometimes',
		'end':'I feel sad & negative most of the time'
	},
	{
		'start':'I’m able to focus & be productive all the time',
		'middle':'I’m able to focus & be productive sometimes',
		'end':'I have a hard time staying focused & being productive'
	}
]

const SixStrike = ({title, subtitle, selections, previous, next}) => (
	<SliderType 
		selections={selections}
		title={title}
		subtitle={subtitle}
		next={next}
		previous={previous}
	/>
)

export default SixStrike;