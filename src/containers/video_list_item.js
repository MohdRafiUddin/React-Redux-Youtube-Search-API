import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index';

class VideoListItem extends Component{
  render(){
   const imageUrl = this.props.video.snippet.thumbnails.default.url;
   return (
     <li className="list-group-item" onClick={() => this.props.selectVideo(this.props.video)}>
       <div className="video-list media">
         <div className="media-left">
           <img className="media-object" src={imageUrl} />
         </div>
         <div className="media-body">
           <div className="media-heading"><b>{this.props.video.snippet.title}</b></div>
         </div>
       </div>
     </li>
   );
  }
}

export default connect(null,{ selectVideo })(VideoListItem);
