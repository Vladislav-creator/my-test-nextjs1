import Image from "next/image";
async function getData () {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts',{
      next: {
        revalidate: 60
      }
    });
    const  result = data.json();
    return result;
  }

export default async function About() {
    const res = await getData ();
    console.log(res);
  return (
    <>
    <h1>About</h1>
    <p>Lorem</p>
    </>
    
  )
}