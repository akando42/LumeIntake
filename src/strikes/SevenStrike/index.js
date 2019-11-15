import React from 'react';
import SignatureType from '../../components/SignatureType';

const title = 'Waiver and Release'
const subtitle = ''
const previous = '/10SS-7'
const next = '/10SS-9/'

const SevenStrike = () => (
	<SignatureType 
	    title={title}
	    subtitle={subtitle}
	    next={next}
	    previous={previous}
	/>
)

export default SevenStrike;