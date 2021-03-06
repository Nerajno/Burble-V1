import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import {Button, Form} from 'react-bootstrap'


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

  return (
    <>
     
    <header>

      <form onSubmit={handleOnSubmit}>
      <Button variant="primary">Burble</Button>{' '}
      <Button variant="primary">Github</Button>{' '}
      <Form.Check type="switch" label="Sort Movies" id="disabled-custom-switch" />
      <input className="search" type="search" value={searchTerm} onChange={handleOnChange} placeholder="Search...." />
      </form>
    </header>
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
    </>
  );
}

export default App;
