import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import {Button, Form} from 'react-bootstrap';
// import { Link } from 'react-router-dom';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  const getMovies = (API) =>{
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    setMovies(data.results);
    });
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_FEATURED_API, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      getMovies(process.env.REACT_APP_SEARCH_API+ searchTerm)
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  function refreshPage(){
    window.location.reload(false)
  }

  return (
    <>
    <header>
      <div className="navBtns">      
      <Button onClick={refreshPage} variant="primary">Burble</Button>{' '}
      <Button className="gitHubLink" variant="link" href="https://github.com/Nerajno/Burble" target="_blank"  rel="noopener noreferrer">Github</Button>{' '}
      <Form className="sortnBox">
        <Form.Check type="switch" id="custom-switch" label="Sort Movies "/>
      </Form>
      </div>
      <form onSubmit={handleOnSubmit}>
      <input className="search" type="search" value={searchTerm} onChange={handleOnChange} placeholder="Search...." />
      </form>
    </header>
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
    <Footer />
    </>
  );
}

export default App;
