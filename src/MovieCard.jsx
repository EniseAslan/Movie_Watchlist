
function MovieCard({movie}) {
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.genre}</p>
      <p>{movie.year}</p>
      <p>{movie.watched ? "İzlendi" : "İzlenmedi"}</p>
    </div>
  )
}

export default MovieCard
