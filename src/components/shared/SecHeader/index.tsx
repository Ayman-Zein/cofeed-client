import React from 'react';

const SecHeader: React.FC<{ title: string; RightComponent?: React.ReactNode }> = ({ title, RightComponent }) => {
	return (
		<div className='d-flex align-items-center justify-content-between'>
			<h3 className='sec-header'>{title}</h3>
			<div className='ml-auto'>{RightComponent && RightComponent}</div>
		</div>
	);
};

export default SecHeader;
