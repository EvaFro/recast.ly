var searchYouTube = (options, callback) => {
  // TODO
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: $.extend({
      q: options.query,
      key: options.key,
      type: 'video',
      part: 'snippet'}, {maxResults: options.max}),
    contentType: 'application/jason',
    success: function(data) {
    //debugger;
      console.log('Search request retrieved');
      // console.log('look at me', data.items);
      callback(data);
    
    },
    error: function(data) {
      console.log('Bad request!!!!!!');
    }
    
  });
  
};



window.searchYouTube = searchYouTube;
