
import { Link } from "react-router-dom";
import { ThemeChanger } from "../../theme/theme";
import { useContext } from "react";
const LatestPageMovies = ({info,img,title,year,genre,language,id})=> {
  const [data,lang] = useContext(ThemeChanger)
  return (
    < Link to={`/movie/${id}`} >
        <div className="movie-blok">
       <main>
          <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="rasm" />
       </main>
       <aside>
        <p className="info">{info}</p>
       <div>
          <span className="title">{title}</span>
          <span className="year">{year}</span>
       </div>
        <div>
          <span className="genre">{genre}</span>
          <span className="language">{language}</span>
        </div>
        <a href="https://www.kun.uz">
           {
             (data.find(item => {
               if (item.lang === lang) {
                 return item
               }
             })).watch
           }
        </a>
        <Link to={`/movie/${id}`}>
          {(data.find(item => {
              if (item.lang === lang) {
                return item
              }
            })).more
          }
        </Link>
       </aside>

      </div>

    </Link>
  )
}
export default LatestPageMovies;