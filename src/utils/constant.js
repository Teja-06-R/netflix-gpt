export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+import.meta.env.VITE_TMDB_KEY,
  }
};
export const bg_Url='https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg';
export const Now_playing_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const Popular_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const Toprated_url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const Upcoming_url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const IMG_CDN="https://image.tmdb.org/t/p/w780";

export const Supported_Languages=[
  {identifier:'en',name:'English'},
  {identifier:'hi',name:'Hindi'},
  {identifier:'te',name:'Telugu'},
];
export const Google_API_KEY=import.meta.env.VITE_GOOGLE_API_KEY
