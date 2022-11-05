import React from 'react';
import classes from './rounded-btn.module.scss';

const RoundedButton: React.FC<{ children: JSX.Element; bgColor?: string; shadow?: boolean }> = ({
	children,
	bgColor,
	shadow
}) => {
	return (
		<div
			style={{ backgroundColor: bgColor, boxShadow: shadow ? `0 0 10px ${bgColor} ` : 'none' }}
			className={classes.round__btn}>
			{children}
		</div>
	);
};

export default RoundedButton;
