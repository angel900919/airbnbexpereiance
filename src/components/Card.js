import React from "react"


export default function Card(props) {
    return (
        <div className="card">
            <img src={`./images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}