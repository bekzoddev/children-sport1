import  "../src/assets/style/main.scss";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
import { useEffect } from "react";
import Header from "./container/header";
import Footer from "./container/footer";
import About from "./pages/about/about";
import SingleMovie from "./pages/singleMovie/single";
import First  from "./pages/first/first";
import PersonMovie from "./pages/person/personMovie";
import LatestMovies from "./pages/latest/latestMovie";
import TopMovies from "./pages/top/topRated";
import TopShows from "./pages/TopTvshowspage/toptvshows";
import  SearchMovies  from "./pages/movies/movies";




const App = () => {
 return (
  <Router>
    <Header/>
       <Switch>
         <Route exact path="/" component={First}/>
         <Route exact path="/popular" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/most" component={TopMovies} />
         <Route exact path="/shows" component={TopShows} />
         <Route exact path="/contact" component={LatestMovies} />
         <Route exact path="/movie/:id" component={SingleMovie}/>
         <Route exact path="/person/:id" component={PersonMovie}/>
         <Route exact path="/movie" component={SearchMovies}/>



       </Switch>
     <Footer/>

  </Router>
 )
  }
export default App;