class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {nowPlaying: this.props.allVideos[0]};
  }

  changeVideo(arg) {
  // console.log("passed data", arg);
  // console.log("oG data", this.props.allVideos[0]);
    this.setState({
      nowPlaying: arg
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.nowPlaying} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.props.allVideos} changeVideo={this.changeVideo.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
