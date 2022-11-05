import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import Avatar from '../Avatar';

import SecHeader from '../SecHeader';
import SideNavigation from '../SideNavigation';

import classes from './side-menu.module.scss';

const SideMenu = () => {
	return (
		<React.Fragment>
			<div className={classes.sideMenu}>
				<div className={`d-flex align-items-center ms-3`}>
					<div className={classes.logo__wrapper}>
						<img className={classes.sideMenu__logoImg} alt='logo' src='/images/logo.png' />
					</div>
					<h3 className={classes.sideMenu__logoName}>cofeed</h3>
				</div>
				<SideNavigation />
				<div className='mt-4 ms-3'>
					<SecHeader title='Account' RightComponent={<RiArrowDownSLine fontSize={'1.3em'} />} />
					<div className='mt-3'>
						<Avatar
							imgSrc='/images/avatar2.png'
							size={50}
							direction='row'
							text='Michael'
							subText='@michaelco'
						/>
						<img className={classes.banner} src='/images/card1.png' alt='banner' />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SideMenu;
