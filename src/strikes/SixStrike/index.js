import React from 'react';
import SliderType from '../../components/SliderType';

const title = "Let’s discuss your `Feels` "
const subtitle = 'Please move the slider to best reflect your'
const previous = '/10SS-7'
const next = '/10SS-9'
const selections = [
	{
		id: 1,
		name: 'Stress',
		start:'I rarely feel stressed',
		middle:'I feel stressed sometimes',
		end:'I feel stressed all the time'
	},
	{
		id: 2,
		name: 'Mood',
		start:'I feel happy & positive all the time',
		middle:'I feel happy & positive sometimes',
		end:'I feel sad & negative most of the time'
	},
	{
		id: 3,
		name: 'Focus',
		start:'I’m able to focus & be productive all the time',
		middle:'I’m able to focus & be productive sometimes',
		end:'I have a hard time staying focused & being productive'
	}
]

const SixStrike = () => (
	<SliderType 
		selections={selections}
		title={title}
		subtitle={subtitle}
		next={next}
		previous={previous}
	/>
)

export default SixStrike;