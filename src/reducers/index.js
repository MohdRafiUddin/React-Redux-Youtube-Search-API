import { combineReducers } from 'redux';
import Videos from './reducer_videos';
import Video from './reducer_video';

const rootReducer = combineReducers({
  Videos : Videos,
  selectVideo : Video
});

export default rootReducer;
