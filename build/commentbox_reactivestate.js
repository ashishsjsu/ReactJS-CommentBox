/*props are immutable:  they are passed from the parent and are owned by parent.
To enable reactive interactions, we use mutable state with the component.
this.state is private to the component
this.setState is used to change the state of the component. 
When state is updated, the component rerenders itself.

To set the state with the current data, we will retrieve the data from the server with an asynchronous request.
Whenever data from the server is received, we set the state of the commentBox component and it will automatically
be rerendered.
We make the ajax request to server with ComponentDidMount method, this method is automatically called when the component is rendered.
*/

"use strict";

var CommentBox = React.createClass({
	displayName: "CommentBox",

	//add an initial state to CommentBox.
	//getInitialState is called only once during the lifecycle of react component
	getInitialState: function getInitialState() {
		return { data: [] };
	},

	//this function will asynchronously load comments from server
	loadCommentsFromServer: function loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ data: data });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},
	//this functions polls the server for comments at regular intervals
	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			React.createElement(CommentList, { data: this.state.data }),
			React.createElement(CommentForm, null)
		);
	}
});

var CommenList = React.createClass({
	displayName: "CommenList",

	render: function render() {
		var componentNodes = this.props.data.map(function (comment) {
			return React.createElement(
				Comment,
				{ author: comment.author },
				comment.text
			);
		});
		return React.createElement("div", { className: "commentList" });
	}
});

var Comment = React.createClass({
	displayName: "Comment",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			this.props.children
		);
	}
});

React.render(React.createElement(CommentBox, { url: "/api/comments", pollInterval: 2000 }), document.getElementById("dynamicContent"));