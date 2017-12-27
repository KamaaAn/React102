
var movies = [
    {
        id: 1,
        title: 'Home Alone',
        desc: 'Movie about Kevin McCallister',
        poster: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTdEoLOi9ncuhBzSRWrI00a_KWHGI_9KJN-d35rk_3Sws5ygZq2',
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Movie about a Simba the lion',
        poster: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQ2vZQTR7HyXqWbjYYr0HNfAyDLRq7EXogJGAgG0bbM8odQlDLV',
    },
    {
        id: 3,
        title: 'Die hard',
        desc: 'Movie about John McClane',
        poster: 'https://www.alleongfanclub.com/wp-content/uploads/2012/12/die_hard_dvd.jpg',
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.poster}),
    );
});

var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Movie List'),
        React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));