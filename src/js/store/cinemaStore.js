import util from "../apiUtil"
import { observable, action } from "mobx"; 


class cinemaStore {
    @observable movies =[];
    defaultImg ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL20p2gfI3s3zstKtE2SXZBnqV1ZXAIfHdfaMdODspL0s6eZDg'
    constructor () {
        this.initMovies();         
    }
    @action initMovies = async () => {
        let data = await util.getMoviesFromAPI();
        let movieIds = data.map(movie => movie.id);
        await movieIds.map(async id => {
            await this.getMovieInfo(id)
        })
    }
    @action getMovieInfo = async (id) =>{
        let movie = await util.getMovieByIdFromAPI(id);
        movie = {
            id : movie.id.toString(),
            title : movie.title,
            year : movie.release_date.split('-')[0],
            runtime : movie.runtime,
            genres : this.getStrFromGenres(movie.genres),
            director : this.getDirector(movie.credits.crew),
            poster:`http://image.tmdb.org/t/p/w185//${movie.poster_path}`,
            overview:movie.overview
        }
        this.movies.push(movie);
    }

    @action getDirector = (crew) =>{
        let director = crew.filter(c => c.job==='Director');
        return (director[0].name);
    }
    
    @action addMovie (movie) {
        let title = movie.title.toCamelCase(movie.title);
        this.movies.push({...movie, title:title, poster:this.defaultImg});
    }
    @action deleteMovie (movieId) {
        debugger;
        var index = this.findMovieById(movieId);
        this.movies.splice(index, 1);
    }

    @action editMovie(updatedMovie,movieId) {
        debugger;
        let index = this.findMovieById(movieId);
        this.movies[index]={...updatedMovie, poster:this.movies[index].poster};
    }

    @action getStrFromGenres = (genres)=>{
        let genreStr = `${genres.map(g => (g.name))}`;
        return genreStr;
    }

    findMovieById (movieId) {
        let index;
        this.movies.forEach(function(x, i) {
            if (x.id === movieId) {
                index = i;
            }
        });
        return index;
    } 

    isMovieExist = (title) => {
        return (this.movies.filter(m => m.title===title).length!==0)
    }


}

String.prototype.toCamelCase = function(str){
    return str.split(' ').map(function(word,index){
      //For each word upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }

const store = new cinemaStore();
export default store;
