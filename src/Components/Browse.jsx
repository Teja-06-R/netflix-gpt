import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMov';
import useTopRatedMovies from '../Hooks/useTopRatedmovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import MovieDetails from './MovieDetails';
import { Outlet } from 'react-router-dom';

const Browse = () => {
  const showgptSearch=useSelector(store=>store.GptSearch.showGptSearch);
  const showmovieDetails=useSelector(store=>store.movies.movieDetails);
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
  return (
    <div >
      <Header/>
      {
       showmovieDetails?<Outlet/>:
       showgptSearch? <GptSearch/>:       
       <> 
       <MainContainer/>
      <SecondaryContainer/>
      </>
      
      
      }
      
        
      </div>
      
  )
}

export default Browse
