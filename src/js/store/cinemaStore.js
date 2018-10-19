import util from "../apiUtil" 

class cinemaStore {
    movies =[];
    constructor () {
       this.initMovies(); 
    }
    initMovies = async () => {
        console.log('initMovies');
        let data = await util.getMoviesFromAPI();
        this.movies = data;
    }
    addMovie (movie) {
        this.movies.push();
    }
    removeMovie (movieId) {
        //var index = array.indexOf(movieId);
        var index = this.findMovieById(movieId);
        this.movies.splice(index, 1);
    }
    findMovieById (movieId) {
        //todo
        let index = 0;
        return index
    } 
}

const store = new cinemaStore();
export default store;
    