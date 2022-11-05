import React from 'react';
import { RiHeart3Fill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';
import { RiBookmark2Fill } from 'react-icons/ri';

import SecHeader from '../../shared/SecHeader';
import classes from './latestPost.module.scss';

const LatestPost = () => {
	return (
		<div className='py-4'>
			<SecHeader title='Latest Post Activity' />
			<div className={`${classes.latest__card} d-flex mt-4`}>
				<img src='/images/card1.png' alt='card1' />
				<div className='d-flex ms-2 flex-column'>
					<h4 className={classes.latest__card__title}>Minimalist stairs</h4>
					<div className='mt-auto'>
						<RiHeart3Fill fontSize={'1.2em'} color={'#ff5775'} />
						<span className='ms-1 me-1 text-red'>27</span>
						<AiFillMessage fontSize={'1.2em'} color='#a4b6e1' />
						<span className='ms-1 me-1'>12</span>
						<RiBookmark2Fill fontSize={'1.2em'} color='#a4b6e1' />
						<span className='ms-1'>8</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestPost;
