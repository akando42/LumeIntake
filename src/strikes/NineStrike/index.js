import React from 'react';
import SliderType from '../../components/SliderType';

const title = "Let’s discuss your `Looks` "
const subtitle = 'Please move the slider to best reflect you'
const previous = '/10SS-8'
const next = '/10SS-10'
const selections = [
	{
		id: 1,
		name: 'Skin',
		start:'I rarely struggle with skin-health',
		middle:'I struggle with skin-health sometimes',
		end:'I feel struggle with skin-health all the time'
	},
	{
		id: 2,
		name: 'Aging',
		start:'I worry about the aging process all the time',
		middle:'I worry about the aging process sometimes',
		end:'I worry about the aging process most of the time'
	},
	{
		id: 3,
		name: 'Weight',
		start:'I struggle with weight management all the time',
		middle:'I struggle with weight management sometimes',
		end:'I have a hard time struggle with weight management'
	}
]

const NineStrike = () => (
	<SliderType 
		selections={selections}
		title={title}
		subtitle={subtitle}
		next={next}
		previous={previous}
	/>
)

export default NineStrike;