import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topratedmovies:null,
        trailerVideo:null,
        upcomingMovies:null,
        movieDetails:false,
        movieinfo:null,
        castDetails:null,

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
          state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
          state.topratedmovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
         state.trailerVideo=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
          state.upcomingMovies=action.payload;
        },
        showmovieDetails:(state)=>{
          state.movieDetails=!state.movieDetails;
        },
        addMovieDetails:(state,action)=>{
        state.movieinfo=action.payload;
        },
        addCastInfo:(state,action)=>{
        state.castDetails=action.payload;
        },  
    }
})
export const {addNowPlayingMovies,addPopularMovies,addTrailerVideo,addTopRatedMovies,addUpcomingMovies,showmovieDetails,addCastInfo,addMovieDetails}=moviesSlice.actions;
export default moviesSlice.reducer;