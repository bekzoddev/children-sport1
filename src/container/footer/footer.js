import { Link } from "react-router-dom";
import  "./main.scss";
import { ThemeChanger } from "../../theme/theme";
import { useContext } from "react";
const Footer = ()=> {
  const [data,lang] = useContext(ThemeChanger)
  return (
   <div className="footer-wrapper">
      <div className="footer">
        <Link to="/">
      <p>
          {
            (data.find(item => {
              if (item.lang === lang) {
                return item
              }
            })).home
          }
      </p>
        </Link>
        <Link to="/about">
          <p>
          {
            (data.find(item => {
              if (item.lang === lang) {
                return item
              }
            })).about
          }
      </p>
        </Link>
        <Link to="/contact">
             <p>
          {
            (data.find(item => {
              if (item.lang === lang) {
                return item
              }
            })).aloqa
          }
      </p>
        </Link>
        <Link to="/popular">
             <p>
          {
            (data.find(item => {
              if (item.lang === lang) {
                return item
              }
            })).popular
          }
      </p>
        </Link>
        <Link to="/most">
           <p>
          {
            (data.find(item => {
              if (item.lang === lang) {
                return item
              }
            })).top
          }
      </p>
        </Link>
        <Link to="/top">
           <p>
          {
            (data.find(item => {
              if (item.lang === lang) {
                return item
              }
            })).shows
          }
      </p>
        </Link>

          <select name="movies" id="movies">
            < option value = ""
            defaultValue disabled > {
              (data.find(item => {
                if (item.lang === lang) {
                  return item
                }
              })).janr
            }</option>
            < option value = "crime" > {
              (data.find(item => {
                if (item.lang === lang) {
                  return item
                }
              })).crime
            } </option>
            < option value = "sport" > {
              (data.find(item => {
                if (item.lang === lang) {
                  return item
                }
              })).sport
            } </option>
            < option value = "documentary" > {
              (data.find(item => {
                if (item.lang === lang) {
                  return item
                }
              })).hujjat
            } </option>
            < option value = "romantic" > {
              (data.find(item => {
                if (item.lang === lang) {
                  return item
                }
              })).romantik
            } </option>
            < option value = "biography" > {
              (data.find(item => {
                if (item.lang === lang) {
                  return item
                }
              })).bio
            } </option>
            < option value = "drama" > {
              (data.find(item => {
                if (item.lang === lang) {
                  return item
                }
              })).drama
            } </option>
            < option value = "history" > {
              (data.find(item => {
                if (item.lang === lang) {
                  return item
                }
              })).tarixiy
            } </option>
          </select>


      </div>
   </div>
  )
}
export default Footer;