import React from 'react';
import Avatar from '../../shared/Avatar';
import classes from './feeds-card.module.scss';
import { RiHeart3Fill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';

const FeedsCard = () => {
	return (
		<div className={classes.card}>
			<div className={classes.card__imgContainer}>
				<img src='/images/card1.png' alt='' className='img-fluid' />
			</div>
			<div className={`d-flex align-items-center justify-content-between ${classes.card__content}`}>
				<Avatar imgSrc='/images/avatar1.png' size={40} text='ayman Zein' direction='row' />
				<div className='ml-auto'>
					<RiHeart3Fill fontSize={'1.8em'} color='#ff5775' onClick={() => console.log('clicked')} />
					<span className='ms-2 me-3'>456</span>
					<AiFillMessage fontSize={'1.8em'} color='#a4b6e1' onClick={() => console.log('clicked')} />
					<span className='ms-2'>45</span>
				</div>
			</div>
		</div>
	);
};

export default FeedsCard;
