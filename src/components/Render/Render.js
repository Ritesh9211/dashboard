import React ,{useState, useEffect} from 'react'
import "./Render.css"
import BarChart from "../Charts/BarChart"
import LineChart from "../Charts/LineChart"
import PieChart from "../Charts/PieChart"
import EndYear from '../Filters/EndYear'
import { useDispatch, useSelector } from 'react-redux'
import filterSlice from "../store/filterSlice";
//import { setFilter } from "./filterSlice"; 

const Render = () => {

    const dispatch=useDispatch();
    const intensity=useSelector((state) => state.filter.filter);
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const end_year = 2017;
    const start_year = 2017;
    const likelihood = 4;
    const country = "United States of America";
    const region = "Northern America";
    const topic = 'oil';
    const pestle = 'Industries';
    
  const getData = async () => {
    try {
      const response = await fetch('https://datavizualization.onrender.com/getdata');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text(); // Parse the JSON response
      setData(data)
      setLoading(true);
    } catch (error) {
        console.log(error);
    }
};


// console.log("backend data", data); // Use the data from the response

  useEffect(()=>{
        getData();
  },[])

  return (
    <div className="Charts">
  <div className="ChartItem">
    {loading ? <BarChart data={data} /> : <div>Loading</div>}
  </div>
  <div className="ChartItem">
    {loading ? <LineChart data={data} /> : <div>Loading</div>}
  </div>
  <div className="ChartItem">
    {loading ? <LineChart data={data} /> : <div>Loading</div>}
  </div>
  <div className="ChartItem">
    {loading ? <LineChart data={data} /> : <div>Loading</div>}
  </div>
  <div className="ChartItem">
    {loading ? <LineChart data={data} /> : <div>Loading</div>}
  </div>
  <div className="ChartItem">
    {loading ? <LineChart data={data} /> : <div>Loading</div>}
  </div>
  <div className="ChartItem">
    {loading ? <PieChart data={data} /> : <div>Loading</div>}
  <div className="ChartItem">
    {loading ? <LineChart data={data} /> : <div>Loading</div>}
  </div>
  <div className="ChartItem">
    {/* {loading ?  <EndYear data={data} fliter={end_year} type={'end_year'}/> : <div>Loading</div>} */}
    {loading ?  <EndYear data={data} filter={intensity} type={'intensity'}/> : <div>Loading</div>}
  </div>
  </div>
  {/* <div className="ChartItem">
    {loading ? <AnotherChart data={data} /> : <div>Loading</div>}
  </div> */}
</div>
  )
}


export default Render