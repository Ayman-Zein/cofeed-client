import { Container, Row, Col } from 'react-bootstrap';
import SideMenu from '../SideMenu';

import classes from './layout.module.scss';

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
	return (
		<Container fluid>
			<Row className={classes.justify__height}>
				<Col lg={2} className={classes.sideBar__content}>
					<SideMenu />
				</Col>
				<Col lg={10} className={classes.mainContent}>
					{children}
				</Col>
			</Row>
		</Container>
	);
};

export default Layout;
