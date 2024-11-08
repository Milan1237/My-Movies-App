import { setMovies } from "../redux/movieSlice";

const url1 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&region=IN';
const url2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&region=IN';
const url3 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&region=IN';
const url4 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&region=IN';
const url5 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&region=IN';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGEyMmU1NDY0MDgzMmVlYTNmNmVhNjEyZGQwYWNkMiIsInN1YiI6IjY0ZmY1YzZjNmEyMjI3MDBjM2I1NzkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o98EDcio2g_ezobRiVoq1m9d9LVg-cpaJMfBNaihYaE'
    }
};

 export const getMovies = () => async dispatch => {
    try{
        const response = await Promise.all([fetch(url1 , options ) , fetch(url2 , options ) ,fetch(url3 , options ) ,fetch(url4 , options ) ,fetch(url5 , options )]) ; 
        const data = await Promise.all(response.map(res=> res.json()));
        const result = data.map(dat=> dat.results).flat(1);
        dispatch(setMovies(result));
    }catch(error){
        console.log(error);
        return error ; 
    }
}