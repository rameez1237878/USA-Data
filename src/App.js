//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState,  } from 'react';
 const App = ()=> {
  const [myData, setMYData] = useState([]);
  const [weData, setWeData] = useState([]);
  const [drilldown, setDrilldown] = useState('Nation');
  const [year, setYear] = useState('');
  const fetchData= async()=>{
    let url = `${process.env.REACT_APP_API}=${drilldown}&measures=Population&year=${year}`;
    let res = await axios.get(url);
    setMYData(res.data.data);
    setWeData(res.data.source);
    //console.log(res.data.source[0].annotations, "tyhfghfgh");
  }
   useEffect(() => {
    if (drilldown || year) {
      fetchData();
    }
  }, [drilldown, year]);

  return (
    <div className='main'>
      <div className="drops">
      <div className='dropdown'>
        <select name="" id="" value={drilldown} onChange={(e)=>setDrilldown(e.target.value)}>
          <option className="red" value="Nation">Nation</option>
          <option className="red" value="State">State</option>
        </select>
       </div>
        <div className='dropdown'>
        <select value={year} onChange={(e)=>setYear(e.target.value)}>
          <option className="red" value="">select year</option>
          <option  className="red" value="2013">2013</option>
          <option className="red" value="2014">2014</option>
          <option className="red" value="2015">2015</option>
          <option className="red" value="2016">2016</option>
          <option className="red" value="2017">2017</option>
          <option className="red" value="2018">2018</option>
          <option className="red" value="2019">2019</option>
          <option className="red" value="2020">2020</option>
          <option className="red" value="2021">2021</option>
          <option className="red" value="2022">2022</option>
        </select>
        </div>
      </div>
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
