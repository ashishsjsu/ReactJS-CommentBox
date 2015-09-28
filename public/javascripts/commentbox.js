
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

var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm">
				Hello, I am a comment form!
			</div>
		);
	}
});

//Now update the comment box component to use these new components
var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});


var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});

//Now modify the comment list to include comment components
//pass the author name and commentin the component
var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				<Comment author="Peter Hung">React is awesome!</Comment>
				<Comment author="Jason Chow">React is composable!</Comment>
			</div>
		);
	}
});

React.render(
	<CommentBox />,
	document.getElementById("content")
);

