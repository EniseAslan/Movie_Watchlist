import { useState } from 'react'
import './App.css'
import MovieList from './MovieList'
import MovieForm from './MovieForm'

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Resident Evil", genre: "Horror", year: "2026", watched: true },
    { id: 2, title: "Odyssey", genre: "Action", year: "2026", watched: true },
    { id: 3, title: "Doctor Strange İn The Multiverse Of Madness", genre: "Adventure", year: "2026", watched: false },
  ])
  const [filter, setFilter] = useState("all")

  const [form,setForm]=useState({title:"", genre:"",year:""})

  function handleAdd(newMovie) {
    setMovies((prev) => [...prev, newMovie])
  }

  function handleDelete(id) {
    setMovies((prev) => prev.filter((movie) => movie.id !== id))
  }

  function handleToggleWatched(id) {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    )
  }

  const filteredMovies = movies.filter((movie) => {
    if (filter === "watched") return movie.watched
    if (filter === "unwatched") return !movie.watched
    return true
  })

  const watchedCount = movies.filter((movie) => movie.watched).length

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Movie Watchlist</h1>
        <p className="text-gray-500 mb-6">{watchedCount} / {movies.length} izlendi</p>

        <MovieForm form={form} onChange={setForm} onAdd={handleAdd} />

        <div className="flex gap-2 my-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Tümü
          </button>
          <button
            onClick={() => setFilter("watched")}
            className={`px-3 py-1 rounded ${filter === "watched" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            İzlenenler
          </button>
          <button
            onClick={() => setFilter("unwatched")}
            className={`px-3 py-1 rounded ${filter === "unwatched" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            İzlenmeyenler
          </button>
        </div>

        <MovieList
          movies={filteredMovies}
          onDelete={handleDelete}
          onToggleWatched={handleToggleWatched}
        />
      </div>
    </div>
  )
}

export default App