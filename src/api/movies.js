import {
    setCategories,
    setMovies
} from "../redux/movieSlice";

const url1 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=en&sort_by=vote_average.desc&vote_count.gte=1000&page=1';
const url2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=en&sort_by=vote_average.desc&vote_count.gte=1000&page=2';
const url3 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=en&sort_by=vote_average.desc&vote_count.gte=1000&page=3';
const url4 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=en&sort_by=vote_average.desc&vote_count.gte=1000&page=4';
const url5 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=en&sort_by=vote_average.desc&vote_count.gte=1000&page=5';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGEyMmU1NDY0MDgzMmVlYTNmNmVhNjEyZGQwYWNkMiIsInN1YiI6IjY0ZmY1YzZjNmEyMjI3MDBjM2I1NzkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o98EDcio2g_ezobRiVoq1m9d9LVg-cpaJMfBNaihYaE'
    }
};

export const getMovies = () => async dispatch => {
    try {
        const response = await Promise.all([fetch(url1, options), fetch(url2, options), fetch(url3, options), fetch(url4, options), fetch(url5, options)]);
        const data = await Promise.all(response.map(res => res.json()));
        const result = data.map(dat => dat.results).flat(1);
        dispatch(setMovies(result));
    } catch (error) {
        console.log(error);
        return error;
    }
}


export const getCategories = ()=> async (dispatch)=> {
    const genreURL = 'https://api.themoviedb.org/3/genre/movie/list?&language=en-US';
    const response = await fetch(genreURL , options);
    const {genres} = await response.json();
    const result = genres.reduce((acc , cur) => {return {...acc , [cur.id]: cur.name}} , {});
    dispatch(setCategories(result));
  }


export const getMoviesBySearch=(value)=> async dispatch=>{
    const data = await  fetch(`https://api.themoviedb.org/3/search/movie?api_key=&query=${value}&vote_count.gte=1000` , options);
    const {results} = await data.json();
    dispatch(setMovies(results));
}

export const FilterMoviesFromServer=({rating , genre})=> async dispatch =>{
    console.log("Genre:", genre, "Rating:", rating); 
    //base url
    let url = `https://api.themoviedb.org/3/discover/movie?`

    url = url+`&with_genres=${genre}`+ `&vote_average.gte=${rating}`
    //fetching the data 
    const data = await fetch(url, options);
    const {results} = await data.json();
    console.log(results);
    dispatch(setMovies(results));

}