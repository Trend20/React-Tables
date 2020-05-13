import React from 'react';
import Table from './Table';

class App extends React.Component{
    state={
        characters: [],
    }
  removeCharacter = (index) =>{
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) =>{
        return i !== index
      })
    }) 
  }
  render(){
    return (
      <div className="App">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;
