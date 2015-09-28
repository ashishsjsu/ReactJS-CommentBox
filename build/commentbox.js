
/*
var CommentBox = React.createClass({
	render: function(){
		return (
			//this div is not actual DOM node;
			//this is just a marker that React knows how to handle 
			
				<div className="commentBox">
					Hello, I am a CommentBox
				</div>
			);
	}
});

*/

/*
var CommentList = React.createClass({
	render: function(){
		//here we create a composable react component
		return (
			<div className="commentList">
				Hello, I am comments list!
			</div>
		);
	}
});
*/

"use strict";

var CommentForm = React.createClass({
	displayName: "CommentForm",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentForm" },
			"Hello, I am a comment form!"
		);
	}
});

//Now update the comment box component to use these new components
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
			React.createElement(CommentList, null),
			React.createElement(CommentForm, null)
		);
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

//Now modify the comment list to include comment components
//pass the author name and commentin the component
var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentList" },
			React.createElement(
				Comment,
				{ author: "Peter Hung" },
				"React is awesome!"
			),
			React.createElement(
				Comment,
				{ author: "Jason Chow" },
				"React is composable!"
			)
		);
	}
});

React.render(React.createElement(CommentBox, null), document.getElementById("content"));