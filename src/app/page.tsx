import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

// async function getData() {
//   const res = await fetch('http://al-abrar.com/wp-json/wp/v2/posts/')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }




// async function NewsList() {
//   // Wait for the playlists
//   const res = await getData()

//   return (
//     <ul>
//       {res.map((items:any,id) => (

//        <li key={id}> <Link href="/dashboard"> {items.title.rendered} </Link></li>
//       ))}
//     </ul>
//   )
// }



export default async function Home() {
 
  //const data = await res.json();

  return (
<div>
latest News




</div>
  );
}
