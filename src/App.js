import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStats from './components/global';
import CountriesStats from './components/countriesStats';

import Search from './components/search';

function App() {
  
  const [globalStats, setglobalStats] = useState('')
  const [countriesStats, setcountriesStats] = useState('')

  useEffect(()=> {

    let url = "https://api.covid19appi.com/summary";
    fetch(url).then((response) => response.json().then((data)=>{
      console.log(data);
      setglobalStats(data.Global)

      setCountriesStats(data.Countries)
    }))   
  

  }, [])
  
  return (
    <div className="App">
     
      <GlobalStats global={globalStats}/>
      <Search />
      <CountriesStats countries={countriesStats}/>
       
    </div>
  );
}

export default App;
