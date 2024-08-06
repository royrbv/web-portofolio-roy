"use client"
import React, { useState } from 'react'
import SectionResult from './sectionResult';

export default function Cari() {
  const [query,setQuery] = useState("");
  const handleSubmit = (e:any) => {
      e.preventDefault();
      const inputSearch = e.target[0].value;
      setQuery(inputSearch);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Cari User'/>
        <button>Cari</button>
      </form>
      {query && <SectionResult query={query}/>}
    </div>
  )
}
