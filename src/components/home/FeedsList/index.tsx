import React from 'react';
import { Row, Col } from 'react-bootstrap';

import FeedsCard from '../FeedsCard';

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

const FeedsList: React.FC<{ data: FeedItem[]; onSetLike: any }> = ({ data, onSetLike }) => {
	return (
		<Row className='mt-4 '>
			{data.length > 0 ? (
				data.map((item) => (
					<Col md={6} key={item.id}>
						<FeedsCard
							id={item.id}
							feedImg={item.imgSrc}
							userImg={item.publisher.profilePicture}
							userName={item.publisher.name}
							isLiked={item.isLiked}
							numLikes={item.noOfLikes}
							numComments={item.noOfComments}
							onSetLike={onSetLike}
						/>
					</Col>
				))
			) : (
				<h3> No data Found</h3>
			)}
		</Row>
	);
};

export default FeedsList;
