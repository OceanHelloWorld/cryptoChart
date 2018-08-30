import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	chartData: {
		// 		labels: ['August 24th', 'August 25th', 'August 26th', 'August 27th','August 28th', 'August 29th'],
		// 		datasets: [
		// 			{
		// 				label: 'Price',
		// 				data: [
		// 					10000,
		// 					9000,
		// 					8000,
		// 					7000,
		// 					6000,
		// 					5000
		// 				],
		// 				backgroundColor:[
		// 					'rgba(255, 99, 132, 0.6)'
		// 				]
		// 			}
		// 		]
		// 	}
		// }	
	}

  render(){
		return (
			<div className="chart">
				<Bar
					data={this.props.chartData}
					type={'line'}
					width={10}
					height={500}
					options={{
						maintainAspectRatio: false
					}}
				/>
			</div>
		)
	}


}

export default Chart;