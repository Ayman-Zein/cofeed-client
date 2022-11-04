import React from 'react';
import classes from './feeds-tabs.module.scss';

interface TabItem {
	id: number;
	title: string;
}

const FeedsTabs: React.FC<{ tabs: TabItem[]; activeIndex: number; onSelectTab: (id: number) => void }> = ({
	tabs,
	activeIndex,
	onSelectTab
}) => {
	return (
		<div className={`${classes.tabs} d-flex justify-content-between mb-4`}>
			{tabs.length > 0 &&
				tabs.map(({ id, title }, index) => (
					<span
						onClick={() => onSelectTab(id)}
						className={`${classes.tabs__tabItem} ${index + 1 === activeIndex ? classes.activeTab : ''} `}
						key={id}>
						{title}
					</span>
				))}
		</div>
	);
};

export default FeedsTabs;
