import "./sidebar.css"
export default function Sidebar(props)
{
 
return (<div className="sidebar">
    <div className="input">    <label>All</label>
<input type="radio" name="input" onClick={()=>{props.reset()}}></input></div>
<div className="input">    <label>Men</label>
<input type="radio" name="input"  onClick={()=>{
props.filter("men's clothing") 
}}></input></div>
<div className="input">    <label>Women</label>
<input type="radio" name="input" onClick={()=>{
props.filter("women's clothing") 
}}></input></div>
<div className="input">    <label>Electronics</label>
<input type="radio" name="input" onClick={()=>{
props.filter("electronics") 
}} ></input></div>
<div className="input">    <label>Jewerlry</label>
<input type="radio" name="input"  onClick={()=>{
    props.filter("jewelery")
}}></input></div>

</div>)
}