import React from 'react';
import { Button } from 'react-bootstrap';
import Avatar from '../Avatar';

import classes from './list.module.scss';

const ListItems = () => {
	return (
		<div className={classes.list__items}>
			{/* list item */}
			<div className='d-flex align-items-center justify-content-between mb-3'>
				<Avatar
					imgSrc='/images/avatar1.png'
					size={50}
					borderColor='#fff'
					direction='row'
					text='Vin Diesel'
					subText='@vindiesel'
				/>
				<Button className={`ml-auto ${classes.follow__btn}`}>Follow</Button>
			</div>
			{/* end list item */}

			{/* list item */}
			<div className='d-flex align-items-center justify-content-between mb-3'>
				<Avatar
					imgSrc='/images/avatar2.png'
					size={50}
					borderColor='#fff'
					direction='row'
					text='Dean Supardi'
					subText='@Dean'
				/>
				<Button className={`ml-auto ${classes.follow__btn} ${classes.follow__btnOutline}`}>Followed</Button>
			</div>
			{/* end list item */}

			{/* list item */}
			<div className='d-flex align-items-center justify-content-between mb-3'>
				<Avatar
					imgSrc='/images/avatar4.png'
					size={50}
					borderColor='#fff'
					direction='row'
					text='Walter John'
					subText='@Walter'
				/>
				<Button className={`ml-auto ${classes.follow__btn}`}>Follow</Button>
			</div>
			{/* end list item */}
		</div>
	);
};

export default ListItems;
