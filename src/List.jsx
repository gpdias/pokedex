import React from "react"
import description from "./pokemon-info"
import "./index.css"
import Cards from "./Cards";


function createCards(pokemon) {
    return (
        <Cards
        name=   {pokemon.name}
        species= {pokemon.species}
        type1 = {pokemon.type[0]}
        type2 = {pokemon.type[1]}
        />
        
    
    ); }

function List() {
    return(
    <div className= "card">{description.map(createCards)}</div> 
    )
}


export default List;