import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeedsList from '../components/home/FeedsList';

import FeedsTabs from '../components/home/FeedsTabs';
import Stories from '../components/home/Stories';
import SecHeader from '../components/shared/SecHeader';

const TABSLIST = [
	{
		id: 1,
		title: 'All'
	},
	{
		id: 2,
		title: 'Following'
	},
	{
		id: 3,
		title: 'Newest'
	},
	{
		id: 4,
		title: 'Popular'
	}
];

const Home = () => {
	const [ selectedIndex, setSelectedIndex ] = useState(1);
	const handleTabSelect = (tabId: number) => {
		setSelectedIndex(tabId);
	};
	return (
		<Row>
			<Col lg={9}>
				<div className='px-3'>
					{/* Stories component */}
					<Stories />
					{/* end Stories component */}

					<div className='py-4'>
						{/* Feeds header component */}
						<SecHeader
							title='feeds'
							RightComponent={
								<FeedsTabs tabs={TABSLIST} activeIndex={selectedIndex} onSelectTab={handleTabSelect} />
							}
						/>
						{/* end Feeds header component */}

						{/* Feeds list component */}
						<FeedsList />
						{/* end Feeds list component */}
					</div>
				</div>
			</Col>
			<Col lg={3} className='bg-danger'>
				hi
			</Col>
		</Row>
	);
};

export default Home;
