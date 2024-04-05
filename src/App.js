import Navigation from "./Nav/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar";
import {useState,useEffect} from 'react'
import getData from "./db/db.js"
import "./app.css"
function App() {
  const [data,setData]=useState([])
  const [search,setSearch]=useState("")
  const [rData,setRData]=useState([])
  useEffect(()=>{
    getData().then((result)=>{
    setData(result)
    setRData(result)
    })
        },[])
  return (
    <div className="app">
   <Navigation setSearch={setSearch} search={search}/>
   <Sidebar rData={rData} data={data} setData={setData}/>
   <Products data={data} setData={setData} search={search}/>
   <Recommended/>
   
    </div>
  );
}

export default App;
