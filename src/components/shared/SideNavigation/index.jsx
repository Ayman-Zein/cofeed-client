import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled, MdSettings } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiBookmark2Fill } from 'react-icons/ri';
import classes from './side-nav.module.scss';

// no need to be in component to no created every evaluation
const activeStyle = {
	color: '#a974ff',
	backgroundColor: '#fff'
};

const SideNavigation = () => {
	return (
		<React.Fragment>
			<h3 className='mt-5 mb-4 sec-header ms-4'>menu</h3>
			<nav className={classes.nav}>
				<ul className='list-unstyled'>
					<li className={classes.nav__link}>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to={'/'}
							className={classes.nav__link}>
							<MdHomeFilled fontSize={'1.5em'} /> <span className='ms-4'> Home</span>
						</NavLink>
					</li>
					<li className={classes.nav__link}>
						<NavLink
							to={'/messages'}
							className={classes.nav__link}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<AiFillMessage fontSize={'1.5em'} /> <span className='ms-4'> messages</span>
						</NavLink>
					</li>
					<li className={classes.nav__link}>
						<NavLink
							to={'/profile'}
							className={classes.nav__link}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<BsFillPersonFill fontSize={'1.5em'} /> <span className='ms-4'> profile</span>
						</NavLink>
					</li>
					<li className={classes.nav__link}>
						<NavLink
							to={'/saved-posts'}
							className={classes.nav__link}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<RiBookmark2Fill fontSize={'1.5em'} />
							<span className='ms-4'> saved posts</span>
						</NavLink>
					</li>
					<li className={classes.nav__link}>
						<NavLink
							to={'/settings'}
							className={classes.nav__link}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							<MdSettings fontSize={'1.5em'} /> <span className='ms-4'>settings</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default SideNavigation;
