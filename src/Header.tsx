import React, { useState } from "react"
import { Link } from "react-router-dom"

function Header(){
    const [ linksVisible, setLinksVisible ] = useState(false)

    function handleClick(event : React.MouseEvent<HTMLInputElement>): void {
        setLinksVisible(!linksVisible)
        console.log(event)
        return 
    }

    return(
    <div className="header">
        <div className="header-left">
        <Link className="header-logo" to={"/"}><img className="logo" src="TWLogo.png"/></Link>
        <div className="my-name">Throsby Wells</div>
        </div>
        <div className="header-right">
            {linksVisible && <div className="links"><Link className="header-about" to={"/about"}>About</Link>
            <Link className="header-home" to={"/"}>Home</Link>
            <Link className="header-contact" to={"/contact"}>Contact</Link></div>}
            <div className="header-button">
                <div onClick={handleClick}><img className="hamburger" src="hamburger.png"/></div>
            </div>
        </div>
    </div>)
}

export default Header;