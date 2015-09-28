var HelloWorld = React.createClass({displayName: "HelloWorld",

	render: function(){

		return ( 	
			React.createElement("p", null, "Hello")
		);
	}
});

setInterval(function() {

	React.render(
		React.createElement(HelloWorld, null), document.getElementById('container')
	);
}, 500);