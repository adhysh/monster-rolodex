import React from "react";
import { CardList } from "./components/card-list/card-list.components";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <button className="App">
        <CardList name="Adi">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))}
        </CardList>
      </button>
    );
  }
}

export default App;
