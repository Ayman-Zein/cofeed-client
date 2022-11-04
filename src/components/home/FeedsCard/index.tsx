import React from 'react';
import Avatar from '../../shared/Avatar';
import classes from './feeds-card.module.scss';
import { RiHeart3Fill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';

const FeedsCard: React.FC<{
	id: number;
	feedImg: string;
	userImg: string;
	userName: string;
	isLiked: boolean;
	numLikes: number;
	numComments: number;
	onSetLike: (itemId: number) => void;
}> = ({ id, feedImg, userImg, userName, isLiked, numLikes, numComments, onSetLike }) => {
	return (
		<div className={classes.card}>
			<div className={classes.card__imgContainer}>
				<img src={`/images/${feedImg}`} alt='card' className='img-full' />
			</div>
			<div className={`d-flex align-items-center justify-content-between ${classes.card__content}`}>
				<Avatar imgSrc={`/images/${userImg}`} size={40} text={userName} direction='row' />
				<div className='ml-auto'>
					<RiHeart3Fill
						fontSize={'1.8em'}
						color={isLiked ? '#ff5775' : '#a4b6e1'}
						onClick={() => onSetLike(id)}
					/>
					<span className='ms-2 me-3'>{numLikes}</span>
					<AiFillMessage fontSize={'1.8em'} color='#a4b6e1' onClick={() => console.log('clicked')} />
					<span className='ms-2'>{numComments}</span>
				</div>
			</div>
		</div>
	);
};

export default FeedsCard;
