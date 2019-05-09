import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewscontianer from './pc_newscontainer';
export default class PCIndex extends React.Component {
	render() {
		return (
			<div>
				<PCHeader></PCHeader>
				<PCNewscontianer></PCNewscontianer>
				<PCFooter></PCFooter>
			</div>
		);
	};
}
