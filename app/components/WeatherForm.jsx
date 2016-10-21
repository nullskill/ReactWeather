var React = require('react');

export const WeatherForm = React.createClass({
	onFormSubmit(e){
		e.preventDefault();

		var location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},
	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="search" ref="location" placeholder="enter city"/>
					<button className="button expanded hollow">Get weather</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
