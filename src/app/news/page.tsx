'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
 
export default function Page() {
  const [data, setData] = useState([])
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://malabarvarthakal.com/wp-json/wp/v2/posts?per_page=100')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    }
 
    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })
  }, [])
 
  return (
<ul>
      {data?.map((items:any,id) => (

       <li  key={id}> <Link href={"news/"+items.slug }key={id}> {items.title.rendered} </Link></li>
      ))}
    </ul>


  )
}



