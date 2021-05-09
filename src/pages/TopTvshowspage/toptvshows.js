import  axios from "axios";

import { useEffect,useState } from "react";
import TopTvShows from "../../components/tvShows/tvshows";
const TopShows = () => {
  const[movie,setMovie] = useState({answer: false, results: []})
  useEffect(()=> {
    axios.get("https://api.themoviedb.org/3/tv/airing_today?page=1", {
      params: {
        api_key: "8d08d31e1b08de961a19e2ae293de867"
      }
    })
      .then(function (javop) {
        setMovie({answer:true, results: javop.data.results})

      });

  },[])
  return (

    <div className="movie-wrapper">

       {
       movie.answer ? (
        <div className="block">

          {
               movie.results.map((item,index) => (
                 < TopTvShows id = {
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



export default TopShows;