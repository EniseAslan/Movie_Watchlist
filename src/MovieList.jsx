import MovieCard from './MovieCard'

function MovieList({ movies, onDelete, onToggleWatched }) {
  if (movies.length === 0) {
    return <p className="text-gray-400 italic">Bu filtrede film bulunmamaktadır.</p>
  }

  return (
    <div className="flex flex-col gap-3">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onToggleWatched={onToggleWatched}
        />
      ))}
    </div>
  )
}

export default MovieList