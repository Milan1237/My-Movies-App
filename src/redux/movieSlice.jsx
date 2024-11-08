import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../api/movies";
const initialState = {
    movies: []
}
const movieSlice= createSlice({
    name: 'movie',
    initialState ,
    reducers: {
        setMovies: (state , payload)=>{
            state.movies = payload
        }  
    }
})

export const {setMovies} = movieSlice.actions ; 
export default movieSlice.reducer ; 