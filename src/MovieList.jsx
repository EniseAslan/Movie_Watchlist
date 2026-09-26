
import MovieCard from './MovieCard'
function MovieList({movies}) {
  return (
    <div>
      {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
    </div>
  )
}

export default MovieList
