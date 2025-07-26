import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"GptSearch",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
     toggleGptSearchView:(state)=>{
        state.showGptSearch=!state.showGptSearch;
     },
     addgptMovieResult:(state,action)=>{
        const {movieNames,movieResults}=action.payload;
        state.movieNames=movieNames;
        state.movieResults=movieResults;
     }
     
    }
})
export const {toggleGptSearchView,addgptMovieResult}=gptSlice.actions; 
export default gptSlice.reducer;