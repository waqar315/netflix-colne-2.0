import Row from './Row';
import React from 'react';
import './App.css';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';



function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
     <h2>Creating Netflix Clone using React Js</h2>
     <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     {/* https://api.themoviedb.org/3//trending/all/week?api_key=${API_KEY}&language=en-US */}
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
