import Navigation from "./Nav/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import {useState,useEffect} from 'react'
import getData from "./db/db.js"
import "./style/app.css"
function App() {
  const [data,setData]=useState([])
  const [search,setSearch]=useState("")
  const [rData,setRData]=useState([])
  function reset()
  {
    setData(rData)
  }
  function filter(category)
  {
const tempData=[...rData]
    const itemCategory=tempData.filter((item)=>{
      return item["category"]===category
          })
          setData(itemCategory)
          
        }
  
  useEffect(()=>{
    getData().then((result)=>{
    setData(result)
    setRData(result)
    })
        },[])
  return (
    <div className="app">
   <Navigation setSearch={setSearch} search={search}/>
   <Sidebar reset={reset} filter={filter}/>
   <Products data={data} setData={setData} search={search}/>
 
   
    </div>
  );
}

export default App;
