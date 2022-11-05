// use in any avatar in website
// 1- without border
// 2- with outline border
// 3- with text in 2 modes row or column
// 4- with text and subText
import React from 'react';
import { HiPlus } from 'react-icons/hi';
import classes from './avatar.module.scss';

const Avatar: React.FC<{
	imgSrc: string;
	size: number;
	borderColor?: string;
	outline?: boolean;
	addMode?: boolean;
	text?: string;
	subText?: string;
	direction?: string;
}> = ({ imgSrc, size = 40, borderColor, outline, addMode = false, text, subText, direction }) => {
	const sizeConfig = {
		width: size,
		height: size,
		borderRadius: size / 2,
		// no spaces between border and image
		outline: borderColor && !outline ? `2px solid ${borderColor}` : 'none'
	};
	const outerDivConfig = {
		// add spaces between border and image
		outline: borderColor && outline ? `2px solid ${borderColor}` : 'none',
		width: size + 10,
		height: size + 10,
		borderRadius: (size + 10) / 2
	};

	return (
		<div className={classes.avatar} style={{ flexDirection: direction === 'row' ? 'row' : 'column' }}>
			<div
				className={`${classes.avatar__img}  d-flex align-items-center justify-content-center`}
				style={outerDivConfig}>
				<img src={imgSrc} alt='avatar' style={sizeConfig} />
				{addMode && <span className={addMode ? classes.addMode : ''} style={sizeConfig} />}
				{addMode && (
					<span className={classes.avatar__icon}>
						<HiPlus color='white' fontSize={'1.5em'} />
					</span>
				)}
			</div>
			<div className={`${direction === 'row' ? 'ms-2' : 'mt-3'} `}>
				{text && <h4 className={`${classes.avatar__userName} ${direction === 'row' ? '' : 'mt-0'}`}>{text}</h4>}
				{subText && <p className='mb-0 text-gray-small'>{subText}</p>}
			</div>
		</div>
	);
};

export default Avatar;
