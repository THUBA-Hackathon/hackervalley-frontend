import './App.css';
import Hackathon from './component/hackathon/hackathon'
import HackathonList from './component/hackathon/hackathonList';
import React from "react";

let list = [
  {
      url: '../../assets/example.png',
      name: '2021 DFINITY x IAF 中国首次黑客松',
      sponsor: 'DFINITY x IAF',
      startdate: '2020-03-01',
      enddate: '2021-05-24'
  },
  {
      url: '../../assets/example.png',
      name: '2021 DFINITY x IAF 中国首次黑客松',
      sponsor: 'DFINITY x IAF',
      startdate: '2020-03-01',
      enddate: '2021-05-24'
  },
  {
      url: '../../assets/example.png',
      name: '2021 DFINITY x IAF 中国首次黑客松',
      sponsor: 'DFINITY x IAF',
      startdate: '2020-03-01',
      enddate: '2021-05-24'
  },
]
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <Hackathon />
      </div>
    );
  };
  
}

export default App;
