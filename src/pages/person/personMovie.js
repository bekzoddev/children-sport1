import { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import axios from "axios";
import "./main.scss";


const PersonMovie = ({ match }) => {
  console.log(match);
  const [person, setPerson] = useState({ isPerson: false, personData: [] })
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${match.params.id}/movie_credits`, {
      params: {
        api_key: "8d08d31e1b08de961a19e2ae293de867"
      }

    })
      .then(function (javop) {
        console.log(javop);
        setPerson({
          isPerson: true,
          personData: javop.data.cast
        })
      })
  }, [])
  return (
    <div id="person">
      {


        person.personData.map(item => (
        <a href ="https://www.monsterhunter.movie" >
            <div>
            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
            <main>
              <h2>{item.title}</h2>
              <p>{item.overview}</p>
              <header>
                <span>{item.release_date}</span>
                <span className="til">language {item.original_language}</span>

              </header>
              <header>
                <span className="duration">duration{item.runtime}</span>
                <span className="vote">{item.vote_average}</span>
              </header>
              <a id="link" href="https://www.monsterhunter.movie">Watch movie</a>
            </main>
          </div>
        </a>
        ))

      }
    </div>
  )
}
export default PersonMovie;