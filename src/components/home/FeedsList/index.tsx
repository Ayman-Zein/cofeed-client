import { Row, Col } from 'react-bootstrap';

import FeedsCard from '../FeedsCard';

const FeedsList = () => {
	return (
		<Row>
			<Col lg={6}>
				<FeedsCard />
			</Col>
			<Col lg={6}>
				<FeedsCard />
			</Col>
			<Col lg={6}>
				<FeedsCard />
			</Col>
			<Col lg={6}>
				<FeedsCard />
			</Col>
		</Row>
	);
};

export default FeedsList;
