import  axios from "axios";

import LatestPageMovies from "../../components/latest/latest";
import { useEffect,useState } from "react";
const LatestMovies = () => {
  const[movie,setMovie] = useState({answer: false, results: []})
  useEffect(()=> {
    axios.get("https://api.themoviedb.org/3/movie/top_rated?page=1", {
      params: {
        api_key: "8d08d31e1b08de961a19e2ae293de867"
      }
    })
      .then(function (javop) {
        console.log(javop);
        setMovie({answer:true, results: javop.data.results})
        console.log(movie);

      });
      console.log(movie)
  },[])
  return (

    <div className="movie-wrapper">

       {
       movie.answer ? (

        <div className="block">

          {
               movie.results.map((item,index) => (
                 < LatestPageMovies id = {
                   item.id
                 }
                 info = {
                   item.overview
                 }
                 img = {
                   item.poster_path
                 }
                 title = {
                   item.title
                 }
                 year = {
                   item.release_date
                 }
                 genre={item.vote_average} language={item.original_language}

                key={index}
                />
              ))
         }
        </div>

      

        ) : (
          <div>...Loadingcdddddddddddddddddddddddddddddddddddddd</div>
        )
        }
      </div>

  )
     }



export default LatestMovies;