
import MovieCard from './MovieCard'
function MovieList({movies,onDelete}) {
  return (
    <div>
      {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie} onDelete={onDelete}></MovieCard>
      ))}
    </div>
  )
}

export default MovieList
