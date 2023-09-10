import './App.css';
import Chart from "chart.js/auto";
import SideBar from "./components/SideBar/SideBar"
import NavBar from "./components/NavBar/NavBar"
import BarChart from './components/Charts/BarChart';
import Render from './components/Render/Render';

function App() {

  return (
    <>
       <div>
         <NavBar/>
         <div className='flex'>
            <SideBar/>
            <Render/>
           </div>
       </div>
    </>
  );
}

export default App;
