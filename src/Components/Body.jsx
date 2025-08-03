
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetails from './MovieDetails';




const Body = () => {



   const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>,
      children: [
        {
          path: "/browse/movie/:movieId",
          element: <MovieDetails />,
        },
      ],
    },
   
   ])

  return (
    <div>
     <RouterProvider router={approuter}/>
    </div>
    
  )
}

export default Body;