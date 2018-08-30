import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Chart from './Chart.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: ['August 27th','August 28th', 'August 29th'],
				datasets: [
					{
						type: 'line',
						label: 'BTC Price',
						data: [
							10000,
							9000,
							8000
						],
						backgroundColor:[
							'rgba(255, 99, 132, 0.6)'
						]
					}
				]
			}
		}
	}

	componentDidMount() {
		$.ajax({
			url: 'https://api.coindesk.com/v1/bpi/historical/close.json', 
			success: (data) => {
				data = JSON.parse(data);
				let labelArr = [];
				let dataArr = [];
				for (var key in data.bpi) {
					labelArr.push(key);
					dataArr.push(data.bpi[key]);
				}
				this.setState({
					chartData: {
						fill: false,
						// type: 'line',
						labels: labelArr,
						datasets: [
							{
								fill: false,
								type: 'line',
								label: 'BTC Price',
								data: dataArr,
								backgroundColor:[
									'rgba(255, 99, 132, 0.6)'
								]
							}
						]
					}
				})
			},
			error: (err) => {
				console.log('err', err);
			}
		});
	}

	render () {
		return (
		<div>
			<h1> Bit coin price list </h1>
			<Chart chartData = {this.state.chartData}/>
			{/* <List items={this.state.items}/> */}
		</div>)
	}
}
export default App;
