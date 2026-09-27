
function MovieCard({movie,onDelete}) {
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.genre}</p>
      
      <p>{movie.year}</p>
      <p>{movie.watched ? "İzlendi" : "İzlenmedi"}</p>
      <button onClick={()=>onDelete(movie.id)}>Sil</button>
    </div>
  )
}

export default MovieCard
