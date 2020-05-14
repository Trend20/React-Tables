import React, { Component } from 'react';
import Table from './components/Table';
 
class App extends Component {
    state={
        characters: [
            {
                name: 'Java',
                job: 'Android',
            },
            {
                name: 'Javascript',
                job: 'Web Apps',
            },
            {
                name: 'Python',
                job: 'Machine Learning',
            },
            {
                name: 'Swift',
                job: 'Apple',
            }
        ]
    }

    removeCharacter = (index) =>{
        const { characters } = this.state
        this.setState({
            characters: characters.filter((character, i) =>{
                return i !== index
            })
        })
    }
    render() { 
        const { characters } = this.state;
        return (
            <div>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        );
    }
}
 
export default App;