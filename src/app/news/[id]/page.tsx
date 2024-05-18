
// import type { InferGetStaticPropsType, GetStaticProps } from 'next'

// export async function GetStaticProps() {
//   const res = await fetch('http://al-abrar.com/wp-json/wp/v2/posts/')

//   const pages = await res.json()
 
//   return pages.map((page) => ({
//     id: page.id
//   }))
// }


async function getData(id:any) {
  const res = await fetch(`http://malabarvarthakal.com/wp-json/wp/v2/posts/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

 async function Page({ params }:any) {

  console.log(params.slug)
  const res = await getData(params.slug);
  return (

<>

 <h1> {res.title.rendered}</h1>

<div
      dangerouslySetInnerHTML={{__html: res.content.rendered}}
    /> *
</>

  )
}


export async function generateStaticParams() {
  const posts = await fetch('http://malabarvarthakal.com/wp-json/wp/v2/posts').then((res) => res.json());
  return posts.map((post:any) => ({
    id: post.slug,
  }))
}



export default Page


/*

import { notFound } from "next/navigation"

export const dynamicParams = true // default val = true

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()
 
  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}


export default async function TicketDetails({ params }) {
  // const id = params.id
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}




*/










