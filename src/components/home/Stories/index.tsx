import Avatar from '../../shared/Avatar';
import STORIES from '../../../data/stories.json';

import classes from './stories.module.scss';

const Stories = () => {
	const { stories } = STORIES;
	return (
		<div className={`d-flex ${classes.stories}`}>
			<div className='me-4'>
				<Avatar imgSrc='/images/avatar1.png' size={60} borderColor='#a4b6e1' outline addMode text='You' />
			</div>
			{stories.length > 0 &&
				stories.map((item) => (
					<div className='me-4' key={item.id}>
						<Avatar
							text={item.userName}
							imgSrc={`/images/${item.avatarImg}`}
							size={60}
							borderColor={item.outlineColor}
							outline
						/>
					</div>
				))}
		</div>
	);
};

export default Stories;
