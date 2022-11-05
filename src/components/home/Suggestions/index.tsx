import React from 'react';
import ListItems from '../../shared/ListItems';
import SecHeader from '../../shared/SecHeader';

import classes from './suggestion.module.scss';

const Suggestions = () => {
	return (
		<div className={`mt-4 ${classes.suggestions}`}>
			<SecHeader title='Suggestion For You' RightComponent={<h3 className={classes.seeAll}>see all</h3>} />
			<ListItems />
		</div>
	);
};

export default Suggestions;
