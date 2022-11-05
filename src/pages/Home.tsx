import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeedsList from '../components/home/FeedsList';

import FeedsTabs from '../components/home/FeedsTabs';
import LatestPost from '../components/home/LatestPost';
import Stories from '../components/home/Stories';
import Suggestions from '../components/home/Suggestions';
import Toolbar from '../components/home/Toolbar';
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

	// fetch data from api
	const fetchData = () => {
		fetch('http://localhost:5500/feeds').then((response) => response.json()).then((data) => {
			localStorage.setItem('feeds', JSON.stringify(data));
		});
	};
	useEffect(() => {
		setLoading(true);
		fetchData();
		setLoading(false);
	}, []);

	// handle tabs selection
	const handleTabSelect = (tabId: number) => {
		setSelectedIndex(tabId);
	};

	// handle filter upon tab selection
	useEffect(
		() => {
			if (localStorage.getItem('feeds')) {
				const data = JSON.parse(localStorage.getItem('feeds') || '{}');
				if (selectedIndex === 1) {
					setFeeds(data);
				} else if (selectedIndex === 2) {
					setFeeds(
						data.filter((item: { publisher: { following: boolean } }) => item.publisher.following === true)
					);
				} else if (selectedIndex === 3) {
					const result = data.sort(
						(a: { publishDate: string | number | Date }, b: { publishDate: string | number | Date }) => {
							//+ returns a number
							return +new Date(b.publishDate) - +new Date(a.publishDate);
						}
					);
					setFeeds(result);
				} else if (selectedIndex === 4) {
					setFeeds(data.filter((item: { isPopular: boolean }) => item.isPopular === true));
				}
			}
		},
		[ selectedIndex ]
	);

	const handleSetLike = async (id: number) => {
		let dataClone = [ ...feeds ];

		let item = dataClone.find((item: { id: number }) => item.id === id);

		let itemToUpdate: any;
		if (item && item.isLiked) {
			// remove like
			itemToUpdate = { ...item, isLiked: false, noOfLikes: item.noOfLikes - 1 };
		} else if (item && !item.isLiked) {
			// add like
			itemToUpdate = { ...item, isLiked: true, noOfLikes: item.noOfLikes + 1 };
		}

		try {
			const newItems = dataClone.map((ele) => {
				if (ele.id === itemToUpdate.id) {
					return {
						...itemToUpdate
					};
				} else {
					return ele;
				}
			});
			setFeeds(newItems);
			await fetch(`http://localhost:5500/feeds/${id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(itemToUpdate)
			});
		} catch (e) {
			console.error(e);
		}
		fetchData();
	};

	if (loading) return <h3>Loading ... </h3>;
	return (
		<Row className='mt-3 mt-lg-0 '>
			<Col lg={12} xl={8}>
				<div className='px-3 mob-border'>
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
						<FeedsList data={feeds} onSetLike={handleSetLike} />
						{/* end Feeds list component */}
					</div>
				</div>
			</Col>
			<Col lg={12} xl={4}>
				<div className='rightContainer'>
					<Toolbar />
					<Suggestions />
					<LatestPost />
				</div>
			</Col>
		</Row>
	);
};

export default Home;
