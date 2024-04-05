import "./sidebar.css"
export default function Sidebar(props)
{
   async function reset()
    {
        await props.setData(props.rData)
        return props.data
    }
return (<div className="sidebar">
    <div className="input">    <label>All</label>
<input type="radio" name="input" onClick={()=>{reset()}}></input></div>
<div className="input">    <label>Men</label>
<input type="radio" name="input"></input></div>
<div className="input">    <label>Women</label>
<input type="radio" name="input"></input></div>
<div className="input">    <label>Electronics</label>
<input type="radio" name="input" onClick={()=>{
 if (props.data.length < props.rData.length) {
   reset().then((data)=>{
    console.log(data)
    const electronics=props.data.filter((item)=>{
        return item['category']==="electronics"
            })
            props.setData(electronics)
   })
    
    
}
if(props.data.length===props.rData.length)
{

     const electronics=props.data.filter((item)=>{
        return item['category']==="electronics"
            })
            props.setData(electronics)
}
   
 
}} ></input></div>
<div className="input">    <label>Jewerlry</label>
<input type="radio" name="input"  onClick={()=>{
    const jewerly=props.data.filter((item)=>{
return item['category']==="jewerly"
    })
    props.setData(jewerly)}}></input></div>

</div>)
}