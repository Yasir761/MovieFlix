import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
      <div className="app">
        <Nav />
        <Banner />

        <Row
          title="MovieFlix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romanace Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
};

export default App;
