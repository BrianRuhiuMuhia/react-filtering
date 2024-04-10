import "./products.css"

import Spinner from "../components/spinner/Spinner"
import Card from "../components/Card"
export default function Products(props)
{ let items=undefined
    

if(!Array.isArray(props.data))
{
    return (
        <Spinner/>
    )
}
else{
    const tempData=[...props.data]
    items=tempData.filter((item)=>{
return item["title"].toLowerCase().includes(props.search.toLowerCase())
    }).map((obj)=>{
        return <Card title={obj['title']} category={obj['category']} image={obj['image']} price={obj['price']}/>
        })
}

    return (
        <div className="card-container">
        {items.length<=0 ? <h1>No Item Found</h1>:items}
                </div>
        
    )
}