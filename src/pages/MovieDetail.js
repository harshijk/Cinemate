import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import Backup from '../assets/backup.jpg';

export const MovieDetail = () => {
  const params = useParams();
  const [movies , setMovies ] = useState({});


  useEffect(()=>{
      async function fetchMovies(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f64f9281588f483259afeabed7fadc34&language=en-US`);
        const json=  await response.json();
        setMovies(json)
      }
      fetchMovies();
    },); 

  const images = movies.poster_path ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}` : Backup ;



  return (
<main>
<section className="flex justify-around flex-wrap py-5">
  <div className="max-w-sm rounded">
    <img src={images} alt={`${movies.title}`} />
  </div>
  <div className="max-w-2xl text-gray-700 text-lg dark:text-gray-200">
    <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movies.title}</h1>
    <p className="my-4">{movies.overview}</p>
    { movies.genres ? (
     <p className="flex flex-wrap my-7 gap-2">
     { movies.genres.map((genre) => (
     <span className="mr-2 border border-gray-200 rounded dark:border-gray-700 p-2" key={genre.id} >{genre.name}</span>
       ))}
       </p>) :
        ""}
       <div class="flex items-center">
      <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
      <p class="ms-2 font-bold text-gray-900 dark:text-white">{movies.vote_average}</p>
      <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
      <span class="font-medium text-gray-900  dark:text-white">{movies.vote_count} reviews</span>
        </div>
        <p className="my-4">
          <span className="mr-2 font-bold">Runtime : </span>
          <span>{movies.runtime} min</span>
        </p>

        <p className="my-4">
          <span className="mr-2 font-bold">Budget : </span>
          <span>{movies.budget}</span>
        </p>

        <p className="my-4">
          <span className="mr-2 font-bold">Revenue : </span>
          <span>{movies.revenue}</span>
        </p>

        <p className="my-4">
          <span className="mr-2 font-bold">Release date : </span>
          <span>{movies.release_date}</span>
        </p>

        <p className="my-4">
          <span className="mr-2 font-bold">IMDB : </span>
          <a href={`https://www.imdb.com/title/${movies.imdb_id}`} target='_blank' rel="norefferer"><span className="underline hover:no-underline">{movies.imdb_id}</span></a>
        </p>

  </div>
</section>
</main>  
)
}
