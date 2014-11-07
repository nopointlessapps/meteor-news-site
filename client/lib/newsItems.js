newsItems = [];

for( var i = 0; i < 20; i += 1 ) {
	newsItems.push( {
		_id: "" + i,
		title: 'News Item ' + i,
		publicationDate: new Date(),
		content: 'SOME AWESOME CONTENT'
	} );
}
