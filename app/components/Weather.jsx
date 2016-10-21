var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	
	getInitialState: function () {
		return {
			isLoading: false
		}	
	},

	handleSearch: function (location) {
		var self = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			self.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (e) {
			self.setState({
				isLoading: false,
				errorMessage: e.message,
				location: undefined,
				temp: undefined
			});
		});
	},

	componentDidMount() {
		var location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},

	componentWillReceiveProps(newProps) {
		var location = newProps.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},

	render() {
		var {isLoading, location, temp, errorMessage} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

		function renderError () {
			if (typeof errorMessage === 'string') {
				return(
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return(
			<div>
				<h1 className="text-center page-title">Weather component</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;