var searchYouTube = (options, callback) => {
  // TODO
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: $.extend({
      q: options.query,
      key: options.key,
      part: 'snippet'}, {maxResults: options.max}),
    contentType: 'application/jason',
    success: function(data) {
      console.log('Search request retrieved');
      console.log(data);
      /*return callback(data); ???*/
    
    },
    error: function(data) {
      console.log('Bad request!!!!!!');
    }
    
  });
  
};









window.searchYouTube = searchYouTube;
