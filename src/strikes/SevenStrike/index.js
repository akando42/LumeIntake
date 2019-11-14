import React from 'react';
import SignatureType from '../../components/SliderType';

const subtitle = 'Please move the slider to best reflect your'
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

const SevenStrike = ({title, subtitle, selections, previous, next}) = (
	<SignatureType 
	    selections={selections}
	    title={title}
	    subtitle={subtitle}
	    next={next}
	    previous={previous}
	>
)

export default SevenStrike;