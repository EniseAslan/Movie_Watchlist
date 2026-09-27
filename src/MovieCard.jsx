function MovieCard({ movie, onDelete, onToggleWatched }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-800">{movie.title}</p>
        <p className="text-sm text-gray-500">{movie.genre} · {movie.year}</p>
        <p className="text-sm">{movie.watched ? "İzlendi" : "İzlenmedi"}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggleWatched(movie.id)}
          className={`px-3 py-1 rounded text-sm ${movie.watched ? "bg-gray-300" : "bg-green-500 text-white"}`}
        >
          {movie.watched ? "İzlenmedi olarak işaretle" : "İzlendi olarak işaretle"}
        </button>
        <button
          onClick={() => onDelete(movie.id)}
          className="px-3 py-1 rounded text-sm bg-red-500 text-white"
        >
          Sil
        </button>
      </div>
    </div>
  )
}

export default MovieCard