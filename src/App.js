//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState,  } from 'react';
 const App = ()=> {
  const [myData, setMYData] = useState([]);
  const [weData, setWeData] = useState([]);
  const fetchData= async()=>{
    let res = await axios.get(process.env.REACT_APP_API);
    setMYData(res.data.data);
    setWeData(res.data.source);
    //console.log(res.data.source[0].annotations, "tyhfghfgh");
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='main'>
      <h1>{process.env.REACT_APP_FIRSTQ}</h1>
    <div className='mains'>
      {myData.map((data, index)=>{
          const {Nation, Population, Year} = data;
          return (
            <>
              <div className = 'card' key={index}>
                 <div className='close'> <h3>{process.env.REACT_APP_NATION} </h3> <h4>{Nation}</h4> </div>
                 <div className='close'> <h3>{process.env.REACT_APP_YEAR} </h3> <h4>{Year}</h4> </div>
                 <div className='close'> <h3>{process.env.REACT_APP_POPULATION}</h3> <h4>{Population}</h4> </div>
              </div>
            </>
          )
      })} 
    </div>
    {/* second */}
    <div className='main'>
      <h1>{process.env.REACT_APP_FIRSTE}</h1>
    <div className='mains'>
        {weData.map((datae, index) => {
          const {annotations, name} = datae;
          return (
              <div className='card1' key={index}>
                <div className='close'> <h3>{process.env.REACT_APP_SOURCE} </h3><h4>{annotations.source_name}</h4> </div>
                <div className='close'> <h3>{process.env.REACT_APP_NAME} </h3><h4>{name}</h4> </div>
                <div className='close'> <h3>{process.env.REACT_APP_SOURCE_DES} </h3><h4>{annotations.source_description.slice(0,39)}...</h4> </div>
                <div className='close'> <h3>{process.env.REACT_APP_DATASET} </h3><h4>{annotations.dataset_name} </h4> </div>
                <div className='close'> <h3>{process.env.REACT_APP_SOURCE_LINK} </h3> <h4> {annotations.dataset_link} </h4> </div>
                <div className='close'> <h3>{process.env.REACT_APP_SOURCE_TABLE}</h3><h4>{annotations.table_id}</h4> </div>
                <div className='close'> <h3>{process.env.REACT_APP_SOURCE_TOPIC}</h3><h4>{annotations.topic} </h4> </div>
                <div className='close'> <h3>{process.env.REACT_APP_SOURCE_SUB}</h3><h4>{annotations.subtopic}</h4> </div>
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
