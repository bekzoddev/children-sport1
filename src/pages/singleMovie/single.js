import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./main.scss";
import { ThemeChanger } from "../../theme/theme";


const SingleMovie = ({ match }) => {
  const [data,lang] = useContext(ThemeChanger)
  const [inform, setInfo] = useState({ IsComeInfo: false, info: [] })
  const [actors, setActors] = useState({ actorIsFetched: false, list: [] })
  const [recommand, setRecommand] = useState({ isRecommand: true, movies: [] })
  const [people,setPeople] = useState({person: []})
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
      params: {
        api_key: "8d08d31e1b08de961a19e2ae293de867"
      }
    })
      .then(function (javop) {
        console.log(javop.data);
        setInfo({
          IsComeInfo: true,
          info: javop.data
        })
      })
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
      params: {
        api_key: "8d08d31e1b08de961a19e2ae293de867"
      }
    })
      .then(function (javop) {
        console.log(javop.data.cast);
        setActors({
          actorIsFetched: true,
          list: javop.data.cast
        })
      })
      axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/recommendations`, {
        params: {
          api_key: "8d08d31e1b08de961a19e2ae293de867"
        }
      })
      .then(function (javop) {
        console.log(javop.data.results);
        setRecommand({
          isRecommand: true,
          movies: javop.data.results
        })


      })


            }, [])

            return (
              <>
      {

        inform.info ? (
          <div >
            <div className="info1">
              <div>
                <a href = {"https://www.monsterhunter.movie"} >
                <nav>
                  <img className="img" src={`https://image.tmdb.org/t/p/w500/${inform.info.poster_path}`} alt="rasm" />
                </nav>
                <img className="bgimg" src={`https://image.tmdb.org/t/p/w500/${inform.info.backdrop_path}`} alt="img" />
                <main>
                  <h2 className="title">{inform.info.original_title}</h2>
                  <p className="inform">{inform.info.overview}</p>
                  <aside>
                    <span className={"date"}>{inform.info.release_date}</span>
                    <span className="budget">
                       {
                         (data.find(item => {
                           if (item.lang == lang) {
                             return item
                           }
                         })).pul
                       }

                        ${inform.info.budget}</span>
                  </aside>
                  <header>
                    <section>
                      < span className = "til" > {
                          (data.find(item => {
                            if (item.lang == lang) {
                              return item
                            }
                          })).til
                        }:

                        </span> <span > {
                          inform.info.original_language
                        } </span>
                    </section>
                    <span className="duration">
                       {
                         (data.find(item => {
                           if (item.lang == lang) {
                             return item
                           }
                         })).time
                       }
                       :

                      {inform.info.runtime}</span>
                  </header>
                  <header>
                    <span className="vote">{inform.info.vote_average}</span>
                    <a href="https://www.monsterhunter.movie">
                       {
                         (data.find(item => {
                           if (item.lang == lang) {
                             return item
                           }
                         })).watch
                       }
                    </a>
                  </header>
                </main>
                </a>
              </div>





                {
            actors.list ? (
                   <div>
                     < h2 className = "aktyor" > {
                       (data.find(item => {
                         if (item.lang == lang) {
                           return item
                         }
                       })).actors
                     } </h2>
                     <div className="actors">
                       {
                         actors.list.map((item, i) => (
                         <Link className="best" to={`/person/${item.id}`}>
                             <div key={i}>
                               <img className="actor" data-actor-id={item.id} src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="rr" />
                               <p>
                                 {
                                   (data.find(item => {
                                     if (item.lang == lang) {
                                       return item
                                     }
                                   })).actor
                                 }
                                    :
                                  <span>{item.name}</span></p>
                               <p>
                                  {
                                    (data.find(item => {
                                      if (item.lang == lang) {
                                        return item
                                      }
                                    })).rol
                                  }
                                  :
                                  <span>{item.character}</span></p>
                             </div>
                         </Link>
                         ))
                       }
                     </div>
                   </div>
                 ) : (
                   <div>dsssssss</div>
                 )
                }

              )

            </div>
            {

             (
             <div id="wrapper">
                  <h1 id="recommand">
                     {
                       (data.find(item => {
                         if (item.lang == lang) {
                           return item
                         }
                       })).recommand
                     }
                  </h1>
                  <div id="movie">
                    {
                      console.log(recommand.movies),
                      recommand.movies ? (
                        recommand.movies.map((item) => (
                         <a href = "https://www.monsterhunter.movie" >
                           <div>
                            <img className="recommand" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                            <main>
                              <h3>{item.original_title}</h3>
                              <p id="text">{item.overview}</p>
                              <aside>
                                <span>{item.release_date}</span>
                                <span>{item.vote_average}</span>
                              </aside>
                            </main>
                          </div>
                         </a>
                        ))
                      ) : (
                        <div>
                          nothing recommand
                        </div>
                      )
                    }
                  </div>
             </div>
             )
            }
          </div>
        ) : (
          <div>loading...</div>
        )

      }

    </>
  )
}
export default SingleMovie;
