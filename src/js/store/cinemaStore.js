import util from "../apiUtil"
import { observable, action } from "mobx"; 


class cinemaStore {
    @observable movies =[];
    constructor () {
        this.initMovies(); 
        console.log(this.movies);
        
    }
    @action initMovies = async () => {
        console.log('initMovies');
        let data = await util.getMoviesFromAPI();
        let movieIds = data.map(movie => movie.id);
        await movieIds.map(async id => {
            await this.getMovieInfo(id)
        })
    }
    @action getMovieInfo = async (id) =>{
        let movie = await util.getMovieByIdFromAPI(id);
        movie = {
            id : movie.id,
            title : movie.title,
            year : movie.release_date.split('-')[0],
            runtime : movie.runtime,
            genres : movie.genres,
            director : this.getDirector(movie.credits.crew),
            poster:`http://image.tmdb.org/t/p/w185//${movie.poster_path}`,
            overview:movie.overview
        }
        this.movies.push(movie);
    }

    @action getDirector = (crew) =>{
        let director = crew.filter(c => c.job==='Director');
        return ({name:director[0].name,img:director[0].profile_path});
    }
    
    @action addMovie (movie) {
        this.movies.push();
    }
    @action deleteMovie (movieId) {
        var index = this.findMovieById(parseInt(movieId));
        this.movies.splice(index, 1);
    }

    @action editMovie(updatedMovie,movieId) {
        let index = this.findMovieById(movieId);
        this.movies[index]=updatedMovie;
    }

    findMovieById (movieId) {
        let index;
        this.movies.forEach(function(x, i) {
            if (x.id === movieId) {
                index = i;
            }
        });
        console.log(index)
        return index;
    } 
}

const store = new cinemaStore();
export default store;
