import React from 'react';

import SideNavigation from '../SideNavigation';
import classes from './side-menu.module.scss';

const SideMenu = () => {
	return (
		<React.Fragment>
			<div className={classes.sideMenu}>
				<div className={`d-flex align-items-center`}>
					<img className={classes.sideMenu__logoImg} alt='logo' src='/images/logo.png' />
					<h3 className={classes.sideMenu__logoName}>cofeed</h3>
				</div>
				<SideNavigation />
			</div>
		</React.Fragment>
	);
};

export default SideMenu;
