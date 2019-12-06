import React, {useEffect, useState} from 'react';
import SliderType from '../../components/SliderType';
import axios from 'axios'
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { eightStrike } from '../../tools/api';

function EightStrike(props){
	const [intakeScales, setIntakeScales] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useState('');
	const [nextPage, setNextPage] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${eightStrike}?token=${CMS_API_TOKEN}`,
	    );
		console.log("Eight Strike Data", res.data);
	    setIntakeScales(res.data.Scales);
		setPageTitle(res.data.Title);
		setPageSubtitle(res.data.Subtitle);
		setPrevPage(res.data.Previous);
		setNextPage(res.data.Next);
	}

	useEffect(() => {
		getPageContent()
	}, [])

	return (
		<SliderType
			scales={intakeScales} 
		    title={pageTitle}
		    subtitle={pageSubtitle} 
		    next={nextPage}
		    previous={prevPage}
		/>
	)
}

export default EightStrike;