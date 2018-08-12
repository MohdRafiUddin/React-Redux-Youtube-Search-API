import React,{ Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  render(){
   if (!this.props.video) {
     return <div><b>Search And Click on the Video to Get Started:)</b></div>;
   }

  const videoId = this.props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div><b>{this.props.video.snippet.title}</b></div>
        <div>{this.props.video.snippet.description}</div>
      </div>
    </div>
  );
 }
}
function mapStateToProps(state){
  return {
     video : state.selectVideo
   }
}
export default connect(mapStateToProps)(VideoDetail);
