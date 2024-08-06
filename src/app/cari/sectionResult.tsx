"use client"
import React from 'react'
import useSWR from 'swr'
import Link from "next/link";

const fetcher = (url:string) => fetch(url).then(r => r.json())

interface Props{
  query:string
}
export default function SectionResult({query} : Props) {
  const {data,error} = useSWR(`https://api.github.com/search/users?q=${query}`,fetcher);
  var loading = !data && !error
  return (
    <div>
      <h1>Hasil pencarian : {query}</h1>
      <div>
        {loading && <p>Tunggu sebentar... </p>}
        {data && data.items.map((user:any,index:any) => {
          return(
            <ul key={index}>
              <li><Link href={`/cari/${user.login}`}>Nama : {user.login}</Link></li>
              <li>ID : {user.id}</li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}
