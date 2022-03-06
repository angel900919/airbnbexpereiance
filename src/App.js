import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import './style.css'

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/
export default function App() {
    // <Hero />
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}  //{...item} will send the item we can use props.id (on App.js) instead of props.item.id
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )

}