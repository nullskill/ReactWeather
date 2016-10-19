import React from 'react';
var {Link} = require('react-router');

var Examples = (props) => {
	return(
		<div>
			<h3 className="text-center">Examples</h3>
			<p>Here are some example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Moscow'>Москва</Link>
				</li>
				<li>
					<Link to='/?location=Stavropol'>Ставрополь</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;