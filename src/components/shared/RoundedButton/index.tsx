import React from 'react';
import classes from './rounded-btn.module.scss';

const RoundedButton: React.FC<{ children: JSX.Element; bgColor?: string }> = ({ children, bgColor }) => {
	return (
		<div style={{ backgroundColor: bgColor }} className={classes.round__btn}>
			{children}
		</div>
	);
};

export default RoundedButton;
