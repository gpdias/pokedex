import React from "react"
import "./index.css"


function Cards(props) {
    
    const imagem = `http://img.pokemondb.net/artwork/`

    return (
    
    
<div className="term">
        <h3>{props.name}</h3>
        <h5>{props.species}</h5>
        <img src = {`${imagem}${props.name.toLowerCase()}.jpg`} alt="image_pokemon"/>
        <h5>{props.type1}</h5>
        <h5>{props.type2}</h5>

    </div>
    )}

export default Cards;

