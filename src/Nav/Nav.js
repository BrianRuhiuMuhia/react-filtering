import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./nav.css"
export default function Nav(props)
{
    return (<nav className="nav-bar">
      <div className="nav-div"> <div className="nav-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter your search item."
          value={props.search}
          onChange={(event)=>{
props.setSearch(event.target.value)
          }}
        />
        </div>
        <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div></div>
    </nav>)
}