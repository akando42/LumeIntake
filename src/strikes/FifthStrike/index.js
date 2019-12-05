import axios from 'axios';
import React, {useState, useEffect} from 'react';

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

import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { fifthStrike } from '../../tools/api';

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


function FifthStrike(props){
	const [intakeOptions, setIntakeOptions] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useState('');
	const [nextPage, setNextPage] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${fifthStrike}?token=${CMS_API_TOKEN}`,
	    );
		console.log("Fifth Strike Data", res.data);
	    setIntakeOptions(res.data.Options);
		setPageTitle(res.data.Title);
		setPageSubtitle(res.data.Subtitle);
		setPrevPage(res.data.Previous);
		setNextPage(res.data.Next);
	}

	useEffect(() => {
		getPageContent()
	}, [])

	return (
		<CustomSelectionType
		    options={intakeOptions} 
		    title={pageTitle}
		    subtitle={pageSubtitle} 
		    next={nextPage}
		    previous={prevPage}
		/>
	)
}
	

export default FifthStrike;