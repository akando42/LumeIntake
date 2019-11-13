import React from 'react';
import CustomSelectionType from '../../components/CustomSelectionType';
import Icon31 from './icons/Icon31.png';

const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-11'
const next = '/'
const options = [
	{ "icon":Icon31, "name":"SLEEP"},
	{ "icon":Icon31, "name":"MOOD"},
	{ "icon":Icon31, "name":"STRESS"},
	{ "icon":Icon31, "name":"ENERGY"},
	{ "icon":Icon31, "name":"MEMORY"},
	{ "icon":Icon31, "name":"IMMUNITY"},
	{ "icon":Icon31, "name":"HAIR/SKIN"},
	{ "icon":Icon31, "name":"DIGESTION"},
	{ "icon":Icon31, "name":"AGING"},
	{ "icon":Icon31, "name":"WEIGHT MANAGEMENT"},
	{ "icon":Icon31, "name":"PAINT MANAGEMENT"},
	{ "icon":Icon31, "name":"MUSCLE RECOVERY+ PERFORMANCE"}
]

const FifthStrike = () => (
	<div>
		<CustomSelectionType
		    options={options} 
		    title={title}
		    subtitle={subtitle} 
		    next={next}
		    previous={previous}
		/>
	</div>
)

export default FifthStrike;