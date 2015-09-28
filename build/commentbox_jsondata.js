/*Here we will bind JSON data to React components*/

"use strict";

var data = [{ author: "Peter Hunt", text: "React is awesome!" }, { author: "Jordan Walke", text: "React components are composable" }];

//Create a comment box react component
var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			"/*now comment list component has access to data property of commentBox component*/",
			React.createElement(CommentList, { data: this.props.data }),
			React.createElement(CommentForm, null)
		);
	}
});

//create a comment react component
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

//create a commentList class. This function will bind each data item in data to comment component
var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {

		var commentNodes = this.props.data.map(function (comment) {
			return React.createElement(
				Comment,
				{ author: comment.author },
				comment.text
			);
		});

		return React.createElement(
			"div",
			{ className: "commentList" },
			commentNodes
		);
	}
});

// passs this data document as data property in commentBox
React.render(React.createElement(CommentBox, { data: data }), document.getElementById('content2'));