var MovieItem = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: this.props.movies.id},
                React.createElement('h2', {}, this.props.movies.title),
                React.createElement('p', {}, this.props.movies.desc),
                React.createElement('img', {src: this.props.movies.poster}),
            )
        )
    },
});