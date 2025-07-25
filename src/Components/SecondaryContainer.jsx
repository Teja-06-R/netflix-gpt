import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const  SecondaryContainer = () => {
  const movies=useSelector((state)=>state.movies);
  return (
    <div className='bg-black'>
    <div className='-mt-45 relative z-10 pl-12'> 
      <Movielist title={"Now playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Top Rated"} movies={movies.topratedmovies} />
      <Movielist title={"Popular"} movies={movies.popularMovies} />
      <Movielist title={"Upcoming"} movies={movies.upcomingMovies} />
      {/*
      Movielist - popular
        Moviecards*n
      Movielist - now playing
      Movielist -
      Movielist -  
      */}
    </div>
    </div>
  )
}

export default  SecondaryContainer