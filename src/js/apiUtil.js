import axios from 'axios';

class apiUtil {
    
    getMoviesFromAPI = async ()=>{
        var data;
        let api_key = '877ee9cfc049b2212145ecb01fb2a031';
        let language = 'en-US';
        let page = 1;
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`;
        await axios.get(url)
          .then(response => { 
            data = response.data.results;
          });
          return data;
    }
    getMovieByIdFromAPI = async (movieId)=>{
        var data;
        let api_key = '877ee9cfc049b2212145ecb01fb2a031';
        let language = 'en-US';
        let page = 1;
        let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=credits`;
        await axios.get(url)
          .then(response => { 
            data = response.data;
          });
          return data;
    }
    getGenreListFromAPI = async ()=>{
        var data;
        let api_key = '877ee9cfc049b2212145ecb01fb2a031';
        let language = 'en-US';
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=${language}`;
        await axios.get(url)
          .then(response => { 
            data = response.data.genres;
          });
          return data;
    }
}
  
const util = new apiUtil();
export default util;
