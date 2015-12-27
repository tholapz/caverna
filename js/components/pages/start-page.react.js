import React, { Component } from 'react';
// import { connect } from 'react-redux';
import GameTable from '../game-table.react';

class StartPage extends Component {
	render() {
		// const dispatch = this.props.dispatch;
		return (
			<div>
				<GameTable />
			</div>
		);
	}
}

export default StartPage;