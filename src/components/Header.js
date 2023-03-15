import React from "react"
import Globe from "../icons/globe.png"

function Header(){
    return(
        <div>
            <header className="header">
                <p> <img src={Globe}/> Israel's Travel Journal</p>
            </header>
        </div>
    )
}

export default Header