var request = require('request');
var kickass = require('kickass-torrent');

var omdb = 'http://www.omdbapi.com/?i=' + process.argv[2];
request(omdb, function (error, response, body)
{
	if (error)
		return console.log(error);

	var imdb = JSON.parse(body);
	var movie = {	imdb:	process.argv[2]	,
					title:	imdb.Title		,
					magnet:	""				};

	var query = movie.title + "-i" + movie.imdb;
	kickass({		q:			query,
					field:		'seeders'		,
					order:		'desc'	 		}, function (error, data)
	{
		if (error)
			return console.log(error);

		console.log(data);
	});
});
