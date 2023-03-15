import React from "react"
import Map from "../icons/map.png"


function Main(props) {
   return(
    <div className="container">
        <div className="location-img flex-grow-1">
            <img src={props.item.imageUrl}/>
        </div>

        <div className="flex-grow-2">
            
                <span className="location"> <img src={Map} /> <span className="spacing">{props.item.location} </span><a href={props.item.googleMapsUrl}>View on Google Map</a> </span>
                <h2>{props.item.title}</h2>
                <p className="dates">{props.item.startDate} {"-"} {props.item.endDate}</p>
                <p>{props.item.description}</p>
       
            
        </div>
    
    </div>
   )
}

export default Main