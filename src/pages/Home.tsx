import { useEffect, useState } from 'react';
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

interface FeedItem {
	id: number;
	imgSrc: string;
	publishDate: string;
	publisher: { name: string; profilePicture: string; following: boolean };
	isLiked: boolean;
	isPopular: boolean;
	noOfLikes: number;
	noOfComments: number;
}
const Home = () => {
	const [ selectedIndex, setSelectedIndex ] = useState(1);
	const [ loading, setLoading ] = useState(false);
	const [ feeds, setFeeds ] = useState<FeedItem[]>([]);
	const [ filteredData, setFilteredData ] = useState<FeedItem[]>([]);

	// handle tabs selection
	const handleTabSelect = (tabId: number) => {
		setSelectedIndex(tabId);
	};

	useEffect(
		() => {
			setLoading(true);
			// fetch data from api
			const fetchData = () => {
				fetch('http://localhost:5500/feeds').then((response) => response.json()).then((data) => {
					if (selectedIndex === 1) {
						setFeeds(data);
					} else if (selectedIndex === 2) {
						setFeeds(
							data.filter(
								(item: { publisher: { following: boolean } }) => item.publisher.following === true
							)
						);
					} else if (selectedIndex === 3) {
						setFeeds(
							data.sort(
								(
									a: { publishDate: string | number | Date },
									b: { publishDate: string | number | Date }
								) => {
									//valueOf on each of it's operands. Since valueOf on Date returns a number
									return new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf();
								}
							)
						);
					} else if (selectedIndex === 4) {
						setFeeds(data.filter((item: { isPopular: boolean }) => item.isPopular === true));
					}
				});
			};
			fetchData();
			setLoading(false);
		},
		[ selectedIndex ]
	);

	console.log(feeds);

	if (loading) return <h3>Loading ... </h3>;
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
						<FeedsList data={feeds} />
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
