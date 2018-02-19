import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      planets: [],
    };
   }

   componentWillMount() {
    const promises = [];
    for (let i = 1; i <= 30; i++) {
      promises.push(fetch(`https://swapi.co/api/planets/${i}/`).then(result => result.json()));
    }
Promise.all(promises).then(planets => this.setState({ planets }));
  }
  
  render() {
    const { planets } = this.state;
    return (
      <div className="wrapper">
      <h1>Galaxy Tourism</h1>
        <div className="planetBox">
          { planets.map((planet, i) => {return (
            <div className="itemBox" key={i}>
              <h2>{planet.name}</h2>
              <p><strong>Terrain:</strong><span>{planet.terrain}</span></p>
              <p><strong>Climate:</strong><span>{planet.climate}</span></p>
              <p><strong>Days in a year:</strong> <span>{planet.orbital_period}</span></p>
              <p><strong>Population:</strong> <span>{planet.population}</span></p>
            </div>
          );
          }) }
        </div>
      </div>
    );
  }
}

export default App;
