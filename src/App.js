import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStats from './components/global';
import CountriesStats from './components/countriesStats';

import Search from './components/search';

function App() {
  
  const [globalStats, setglobalStats] = useState('')
  const [countriesStats, setCountriesStats] = useState([])

  useEffect(()=> {
    console.log('hhh');
    let url = "https://api.covid19api.com/summary";
    fetch(url).then((response) => response.json()).then((data)=>{
      console.log(data);
       setglobalStats(data.Global)

       setCountriesStats(data.Countries)
    })   
  

  }, [])

    const searchCountry = ((text)=> {
      let value=text.toLower()

      let result=[];

      if(result===''){
        return (value)
      }

      result=countriesStats.filter((countries)=>{
        return countries.Country.toLowerCase().indexOf(value)!==-1
      })
        setCountriesStats(result);
    }) 
  
  return (
    <div className="App">
     
      <GlobalStats global={globalStats}/>
      <Search search={searchCountry} />
      { <CountriesStats countries={countriesStats}/> }
       
    </div>
  );
}

export default App;
