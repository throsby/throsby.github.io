import React, { MouseEvent , useState } from "react"
import { Link } from "react-router-dom"
import About from "./About/About.tsx/About"

function Header(){
    const [ linksVisible, setLinksVisible ] = useState(false)

    function handleClick(event : React.MouseEvent<HTMLInputElement>): void {
        setLinksVisible(!linksVisible)
        console.log(event)
        return 
    }

    return(
    <div className="header">
        <img className="logo" src="TWLogo.png" height={"75px"}/>Throsby Wells
        <div onClick={handleClick}>Header</div>
        
        {linksVisible && <div><Link to={"/about"}>About</Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link></div>}
        
    </div>)
}

export default Header;