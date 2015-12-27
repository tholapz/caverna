import React, { Component } from 'react';

class GameTable extends Component {
	colName(index) {
		return [1,2,3,4,5,6][index];
	}

	rowName(index) {
		return ['A','B','C','D'][index];
	}

	render() {
		var table = [
			[{},{},{},{},{},{}],
			[{},{},{},{},{},{}],
			[{},{},{},{},{},{}],
			[{},{},{},{},{},{}]
		];
		var tableView = table.map((row, rowIndex) => {
			let rowKey = this.rowName(rowIndex);
			var rowView = row.map((col, colIndex) => {
				return <div className="game-col" key={this.colName(colIndex)}>{rowKey+colIndex}</div>;
			});
			return <div className="game-row" key={rowKey}>{rowView}</div>;
		});
		return (
			<div>
				<div className="game-table">
					{tableView}
				</div>
			</div>
		);
	}
}

export default GameTable;