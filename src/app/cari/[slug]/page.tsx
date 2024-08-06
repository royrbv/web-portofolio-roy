import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function getData(param:string) {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
}

export default async function Detail({params}:{params:{slug:string}}) {
  const user = await getData(params.slug);
  return (
    <div>
      <p>ini detail user : {params.slug}</p>
      <div>
        <img src={user.avatar_url} width={100} height={100} alt='foto dari user'></img>
        <ul>
          <li>Nama : {user.login}</li>
          <li>ID : {user.id}</li>
          <li><Link href={user.html_url}>url : {user.html_url}</Link></li>
        </ul>
      </div>
    </div>
  )
}
