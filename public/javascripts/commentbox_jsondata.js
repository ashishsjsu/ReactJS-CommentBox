/*Here we will bind JSON data to React components*/

var data = [
	{author: "Peter Hunt", text: "React is awesome!"},
	{author: "Jordan Walke", text: "React components are composable"}
]

//Create a comment box react component
var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				/*now comment list component has access to data property of commentBox component*/
				<CommentList data={this.props.data} />
				<CommentForm />
			</div>
		);
	}
});

//create a comment react component
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


//create a commentList class. This function will bind each data item in data to comment component
var CommentList = React.createClass({
	render: function(){
		
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});

		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
})

// passs this data document as data property in commentBox
React.render(
	<CommentBox data={data} />,
	document.getElementById('content2')
);