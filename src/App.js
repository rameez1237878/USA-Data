//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState,  } from 'react';
 const App = ()=> {
  const [myData, setMYData] = useState([]);
  const [weData, setWeData] = useState([]);
  const fetchData= async()=>{
    let res = await axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    setMYData(res.data.data);
    setWeData(res.data.source);
    //console.log(res.data.source[0].annotations, "tyhfghfgh");
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='main'>
      <h1>USA Data</h1>
    <div className='mains'>
      {myData.map((data, index)=>{
          const {Nation, Population, Year} = data;
          return (
            <>
              <div className = 'card' key={index}>
                 <div className='close'> <h3>Nation : </h3> <h4>{Nation}</h4> </div>
                 <div className='close'> <h3>Year : </h3> <h4>{Year}</h4> </div>
                 <div className='close'> <h3>Population :  </h3> <h4>{Population}</h4> </div>
              </div>
            </>
          )
      })} 
    </div>
    {/* second */}
    <div className='main'>
      <h1>USA Source</h1>
    <div className='mains'>
        {weData.map((datae, index) => {
          const {annotations, name} = datae;
          return (
              <div className='card1' key={index}>
                <div className='close'> <h3>Source Name : </h3><h4>{annotations.source_name}</h4> </div>
                <div className='close'> <h3>Name : </h3><h4>{name}</h4> </div>
                <div className='close'> <h3>Source Description : </h3><h4>{annotations.source_description.slice(0,39)}...</h4> </div>
                <div className='close'> <h3>Dataset Name : </h3><h4>{annotations.dataset_name} </h4> </div>
                <div className='close'> <h3>Dataset Link : </h3> <h4> {annotations.dataset_link} </h4> </div>
                <div className='close'> <h3>Table ID : </h3><h4>{annotations.table_id}</h4> </div>
                <div className='close'> <h3>Topic : </h3><h4>{annotations.topic} </h4> </div>
                <div className='close'> <h3>Subtopic : </h3><h4>{annotations.subtopic}</h4> </div>
              </div>
            );
        })}
      </div>
      </div>

    {/* first div end */}
    </div>
  );
}

export default App;
