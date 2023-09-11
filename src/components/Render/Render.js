import React ,{useState, useEffect} from 'react'
import "./Render.css"
import BarChart from "../Charts/BarChart"
import PieChart from "../Charts/TopicPieChart"
import EndYear from '../Filters/EndYear'
import { useDispatch, useSelector } from 'react-redux'
import filterSlice from "../store/filterSlice";
import Likelihood from '../Filters/Likelihood'
import Country from '../Filters/Country'
import Intensity from '../Filters/Intensity'
import Topic from '../Filters/Topic'
import Relevance from '../Filters/Relevance'
import Region from '../Filters/Region'
import RelevanceChart from '../Charts/RelevanceChart'
import LikelihoodChart from '../Charts/LikelihoodChart'
import EndYearChart from '../Charts/EndYearChart'
import TopicPieChart from '../Charts/TopicPieChart'
import CountryChart from '../Charts/CountryChart'
import RegionChart from '../Charts/RegionChart'
// import LikelihoodChart from '../Charts/LikelihoodChart'

const Render = () => {

    const dispatch=useDispatch();

    // const [selectedComponent, setSelectedComponent] = useState('intensity');
    const selectedComponent = useSelector((state) => state.filter.selectedComponent);

    const intensity=useSelector((state) => state.filter.filter);
    const endYear=useSelector((state) => state.filter.End_year);
    const likelihood = useSelector((state) => state.filter.likelihood);
    const country = useSelector((state) => state.filter.country);
    const topic = useSelector((state) => state.filter.topic);
    const relevance = useSelector((state) => state.filter.relevance);
    const region = useSelector((state) => state.filter.region);
    const [data,setData] = useState([""]);
    const [loading,setLoading] = useState(false);

    const renderSelectedComponent = () => {
      switch (selectedComponent) {
        case 'intensity':
          return loading ? <Intensity data={data} filter={intensity} type={'intensity'} /> : <div>Loading</div>;
        case 'end_year':
          return loading ? <EndYear data={data} filter={endYear} type={'end_year'} /> : <div>Loading</div>;
        case 'likelihood':
          return loading ? <Likelihood data={data} filter={likelihood} type={'likelihood'} /> : <div>Loading</div>;
        case 'relevance':
          return loading ? <Relevance data={data} filter={relevance} type={'relevance'} /> : <div>Loading</div>;
        case 'region':
          return loading ? <Region data={data} filter={region} type={'region'} /> : <div>Loading</div>;
        case 'country':
          return loading ? <Country data={data} filter={country} type={'country'} /> : <div>Loading</div>;
        case 'topic':
          return loading ? <Topic data={data} filter={topic} type={'topic'} /> : <div>Loading</div>;
        default:
          return null;
      }
    };

    const renderChart = () => {
      switch (selectedComponent) {
        case 'intensity':
          return loading ? <BarChart data={data} /> : <div> Loading Api's will take Time</div>
        case 'end_year':
          return loading ? <EndYearChart data={data} /> : <div>Loading</div>;
        case 'likelihood':
          return loading ? <LikelihoodChart  data={data} /> : <div>Loading</div>;
        case 'relevance':
          return  loading ? <RelevanceChart data={data} /> : <div>Loading</div>
        case 'region':
          return  loading ? <RegionChart data={data} /> : <div>Loading</div>
        case 'country':
          return  loading ? <CountryChart data={data} /> : <div>Loading</div>
        case 'topic':
          return  loading ? <TopicPieChart data={data} /> : <div>Loading</div>
        default:
          return null;
      }
    };
    
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
      {renderChart()}
      <div className="ChartItem">
        {renderSelectedComponent()}
      </div>
 
</div>
  )
}


export default Render