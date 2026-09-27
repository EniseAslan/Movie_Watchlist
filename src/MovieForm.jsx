import { useState } from "react"


function MovieForm({onAdd}) {



    const [form,setForm]=useState({ title: "", genre: "", year: "" });
    function handleSubmit(){
        const newMovie= {id:Date.now(), title:form.title, genre:form.genre,year:form.year, watched:false }
        onAdd(newMovie)
        setForm({title:"",genre:"",year:""})
    }
  return (
    <div>
      <input type="text" value={form.title}
      onChange={(e)=>setForm({...form, title: e.target.value})}className="border border-gray-400 rounded px-2 py-1"/>
       <input type="text" value={form.genre}
      onChange={(e)=>setForm({...form, genre: e.target.value})} className="border border-gray-400 rounded px-2 py-1"/>
       <input type="text" value={form.year}
      onChange={(e)=>setForm({...form, year: e.target.value})} className="border border-gray-400 rounded px-2 py-1"/>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-1 rounded">Ekle</button>
    </div>
  )
}

export default MovieForm
