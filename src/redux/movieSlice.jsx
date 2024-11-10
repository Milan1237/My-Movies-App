import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movies: [] , 
    categories: {},
    searchValue: '', 
    rating: '',
    genre: '',
}
const movieSlice= createSlice({
    name: 'movie',
    initialState ,
    reducers: {
        setMovies: (state , action)=>{
            state.movies = action.payload
        },
        setCategories: (state ,action)=>{
            state.categories = action.payload ; 
        } , 
        setSearch: (state, action)=>{
                state.searchValue = action.payload ; 
        },
        setRating: (state , action) =>{
            state.rating = action.payload ;
        },
        setGenre: (state , action) =>{
            state.genre = action.payload ;
        },

    }
})

export const {setMovies , setCategories , setSearch , setRating , setGenre} = movieSlice.actions ; 
export default movieSlice.reducer ; 