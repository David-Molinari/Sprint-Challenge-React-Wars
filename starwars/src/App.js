import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Post from './components/Post';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState([]);

  const Div = styled.div`
    margin: 2%;
    border: 2px solid black;
  `;

  console.log(people);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://swapi.co/api/people/")
      // Which we then set to state
      .then(res => setPeople(res.data.results))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);


  return (
    <Div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map(element => {
        return < Post name = {element.name} hairColor = {element.hair_color}/>})}
    </Div>
  );
}

export default App;
