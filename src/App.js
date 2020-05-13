import React from 'react';
import Table from './Table';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render(){
    const characters = [
      {
          name:'Naomi',
          job: 'Doctor',
      },
      {
          name:'Erick',
          job: 'Engineer',
      },
      {
          name:'Vera',
          job: 'Teacher',
      },
      {
          name:'Steve',
          job: 'Coder',
      },
  ]
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
