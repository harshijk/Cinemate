import { Card } from "../components";
import { useFetch } from "../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')
  const { data: movies} = useFetch(apiPath,query);
  
  useEffect(()=>{
    document.title=`Search Results for ${query} || Cinemate`
  })

  
    return (
      <main>
        <section className="py-3 ml-4">
          <p className="text-2xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No Results found for '${query}'` : `Results found for '${query}'`}</p>
        </section>
          <section className="max-w-7xl mx-auto py-5">
              <div className="flex justify-start flex-wrap">
                { movies.map((movie) => (
                  <Card key={movie.id} movie={movie}/>
                ))}
              </div>
          </section>
      </main>
    )
  
}
