import Movie from '../components/Movie.js';
import {useEffect, useState} from "react";
import "./Home.css";
function Home() {
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies)
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <span>Loading...</span>
        </div>
      ) : (<div className="movies">{movies.map(movie =>
        <Movie id={movie.id} key={movie.id} coverImg={movie.medium_cover_image} year={movie.year} title={movie.title} summary={movie.summary} genres={movie.genres} ></Movie>)}</div>)}
    </div>
  );
}

export default Home;