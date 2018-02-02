class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // currentSearchResult: null,
      newVideoList: this.props.allVideos,
      nowPlaying: this.props.allVideos[0]
    };
  }
  changeVideo(arg) {
  // console.log("passed data", arg);
  // console.log("oG data", this.props.allVideos[0]);
    this.setState({
      nowPlaying: arg
    });
  }

  changeList(arg) {
    // console.log("changeList", arg);
    //packages arg into ajax-acceptable format
    var options = {
      query: arg,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };
    
    var callBack = function(input) {
      console.log('input.items', this);
      this.setState({newVideoList: input.items});
    };
 
    window.searchYouTube(options, callBack.bind(this));
    // console.log("search", window.searchYouTube(options, callBack))
    // this.setState({
    //   newVideoList: window.searchYouTube(options, callBack)
    // });
    
  }

  

  // consider why the this.changeList doesn't need the .bind(this) that this.changeVideo does
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search changeList={this.changeList.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.nowPlaying} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.newVideoList} changeVideo={this.changeVideo.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
