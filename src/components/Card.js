import "./card.css"
export default function Card(props)
{
    return (<div className="card">
        <img src={props.image} className="card-image"></img>
        <div className="card-text">
            <span>{props.title.substring(0,10)}</span>
            {/* <span>Price:{props.price}</span> */}
        </div>
    </div>)

}