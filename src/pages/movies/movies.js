import axios from "axios"
import { useEffect, useState } from "react"
const SearchMovies = () => {
  const btn = document.querySelector(".search-btn")
  const searchInput =  document.querySelector(".input")

  const [search,setSearch] = useState("");
  const [result,setResult] = useState({boolen: false,moviesArray: []})

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie/?query=${search}`, {
      params: {
        api_key: "8d08d31e1b08de961a19e2ae293de867"
      }
    }).then(function (javop) {
      console.log(javop);
      setResult({
        boolen: true,
        moviesArray: javop.data.results,
      })
      console.log(result);
    })
  }, [search])
  return (
 <div>
      <label className="label">
        <input type="search" onChange={(e) => setSearch(e.target.value)} className="input"/>
        <button className="search-btn">Search</button>
      </label>
    <div className="search-div1">
      {
        result.boolen ? (
            <a href="https://www.monsterhunter.movie">
             <div className="search-div">
                <div className="kino">
                  {
                    result.moviesArray.length > 0 ? (
                      result.moviesArray.map(item => (
                        <div id="kino">
                          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                          <div>
                            <h2>{item.title}</h2>
                            <p id="overview">{item.overview}</p>
                            <span>{item.release_date}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="white">Hech narsa topilmadi</div>
                    )

                  }
                </div>
             </div>
        </a>
         )

         : (
          <div className="load"> loading ...</div>
        )
      }
    </div>
 </div>
  )

}
export default SearchMovies;