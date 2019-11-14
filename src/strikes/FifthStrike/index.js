import React from 'react';
import CustomSelectionType from '../../components/CustomSelectionType';

import iconWeightManagement from './SelectionIcons/iconWeightManagement.png';
import iconMuscleRecovery from './SelectionIcons/iconMuscleRecovery.png';
import iconDigesion from './SelectionIcons/iconDigestion.png';
import iconSkinHair from './SelectionIcons/iconSkinHair.png';
import iconAging from './SelectionIcons/iconAging.png';
import iconStress from './SelectionIcons/iconStress.png';
import iconSleep from './SelectionIcons/iconSleep.png';
import iconPain from './SelectionIcons/iconPain.png';
import iconEnergy from './SelectionIcons/iconEnergy.png';
import iconImmunity from './SelectionIcons/iconImmunity.png';
import iconMood from './SelectionIcons/iconMood.png';


// import Icon31 from './SelectionIcons/iconAging.png';
// import Icon31 from './SelectionIcons/iconAging.png';
// import Icon31 from './SelectionIcons/iconAging.png';


const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-11'
const next = '/10SS-7'
const options = [
	{ "icon":iconSleep, "name":"SLEEP"},
	{ "icon":iconMood, "name":"MOOD"},
	{ "icon":iconStress, "name":"STRESS"},
	{ "icon":iconDigesion, "name":"ENERGY"},
	{ "icon":iconMood, "name":"MEMORY"},
	{ "icon":iconImmunity, "name":"IMMUNITY"},
	{ "icon":iconSkinHair, "name":"HAIR/SKIN"},
	{ "icon":iconDigesion, "name":"DIGESTION"},
	{ "icon":iconAging, "name":"AGING"},
	{ "icon":iconWeightManagement, "name":"WEIGHT MANAGEMENT"},
	{ "icon":iconPain, "name":"PAINT MANAGEMENT"},
	{ "icon":iconMuscleRecovery, "name":"MUSCLE RECOVERY+ PERFORMANCE"}
]

const FifthStrike = () => (
	<CustomSelectionType
	    options={options} 
	    title={title}
	    subtitle={subtitle} 
	    next={next}
	    previous={previous}
	/>
)

export default FifthStrike;