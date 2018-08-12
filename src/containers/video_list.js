import React,{ Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video_list_item';

class VideoList extends Component {
 render(){
  return (
    <ul className="col-md-4 list-group">
      {
        this.props.Videos.map(video => {
         return (
           <VideoListItem
             key={video.etag}
             video={video}
           />
         );
       })
     }
    </ul>
  );
 }
}

function mapStateToProps({ Videos }){
  return { Videos };
}

export default connect(mapStateToProps)(VideoList);
