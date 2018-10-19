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
}
  
const util = new apiUtil();
export default util;
