import axios from 'axios';
import { FETCH_RESULT, SELECT_VIDEO } from './types';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

export function getVideos(term){
 const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&q=${term}&maxResults=10&key=${API_KEY}`;
 const request = axios.get(url);
 console.log(request);
 return {
   type : FETCH_RESULT,
   payload : request
 }
}

export function selectVideo(video){
  return {
    type : SELECT_VIDEO,
    payload : video
  }
}
