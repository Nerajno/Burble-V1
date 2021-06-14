import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import {Button, Dropdown} from 'react-bootstrap';
import { useDebounce } from 'use-debounce';
// import ReactDom from 'react-dom';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [ debouncedSearchTerm ] = useDebounce(searchTerm, 2000);



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


  useEffect(() => {
    // console.log("We worked", debouncedSearchTerm);
    if(debouncedSearchTerm){getMovies(process.env.REACT_APP_SEARCH_API+ debouncedSearchTerm)}
  }, [debouncedSearchTerm]);

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
      {/* <Form className="sortnBox">
        <Form.Check type="switch" id="custom-switch" label="Sort Movies "/>
      </Form> */}
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort Movies
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">A - Z</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Z - A</Dropdown.Item>
            <Dropdown.Item href="/action-3"> Ratings : 0 - 10</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Ratings : 10 - 0</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown> */}
      {/* *TODO
      Add to dropdown to this app that works
      - http://fraserxu.github.io/react-dropdown/
      - https://github.com/fraserxu/react-dropdown
      - https://www.npmjs.com/package/react-css-dropdown
      - https://www.npmjs.com/package/react-bootstrap-dropdown-menu

      

      
      
      
       */}

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
