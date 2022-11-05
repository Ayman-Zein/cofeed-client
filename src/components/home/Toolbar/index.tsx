import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { BsFillBellFill, BsCloudUploadFill } from 'react-icons/bs';

import classes from './toolbar.module.scss';
import RoundedButton from '../../shared/RoundedButton';

const Toolbar = () => {
	return (
		<div className='d-flex align-items-center'>
			<div className={classes.search__input}>
				<input type='text' placeholder='Search' />
				<RiSearchLine color='#a4b6e1' />
			</div>
			<RoundedButton>
				<React.Fragment>
					<BsFillBellFill fontSize={'1.3em'} color='#a4b6e1' />
					<span className={classes.dot__icon} />
				</React.Fragment>
			</RoundedButton>
			<RoundedButton bgColor='#58b9ff' shadow>
				<BsCloudUploadFill fontSize={'1.3em'} color='#fff' />
			</RoundedButton>
		</div>
	);
};

export default Toolbar;
