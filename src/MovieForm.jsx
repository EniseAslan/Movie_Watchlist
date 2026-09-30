import { useState } from "react";

function MovieForm({ form, onChange, onAdd }) {
  const [error, setError] = useState("");

  function handleSubmit() {
    if (
      form.title.trim() === "" ||
      form.genre.trim() === "" ||
      form.year.trim() === ""
    ) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    setError("");

    const newMovie = {
      id: Date.now(),
      title: form.title,
      genre: form.genre,
      year: form.year,
      watched: false,
    };
    onAdd(newMovie);
    onChange({ title: "", genre: "", year: "" });
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Film adı"
          value={form.title}
          onChange={(e) => onChange({ ...form, title: e.target.value })}
          className="border border-gray-400 rounded px-2 py-1"
        />
      
        <input
          type="text"
          placeholder="Yıl"
          value={form.year}
          onChange={(e) => onChange({ ...form, year: e.target.value })}
          className="border border-gray-400 rounded px-2 py-1"
        />
        <select
          value={form.genre}
          onChange={(e) => onChange({ ...form, genre: e.target.value })}
          className="border border-gray-400 rounded px-2 py-1"
        >
          <option value="">Tür seçiniz</option>
          <option value="Sci-Fi">Sci-fi</option>
          <option value="Macera">Macera</option>
          <option value="Gerilim">Gerilim</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Ekle
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default MovieForm;
