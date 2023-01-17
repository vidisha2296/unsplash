import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, GET_USERS,LOADING } from '../types';
import axios from 'axios';

// import { APIKey } from '../APIKey';
const rootUrl = "https://api.unsplash.com";
const searchUrl = `${rootUrl}/search/photos?per_page=50&query=`;
// export const searchMovie = text => dispatch => {
//   dispatch({
//     type: SEARCH_MOVIE,
//     payload: text
//   });
// };

export const fetchMovies = text => dispatch => {
  axios
    .get(searchUrl + text + `&client_id=eRyRD-k3T5tO9-gM0eYMF8kqsYZqHoJ4mxir0CcjlLY`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

// export const fetchMovie = id => dispatch => {
//   axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIE,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
// };

export const setLoading = () => {
  return {
    type: LOADING
  };
};