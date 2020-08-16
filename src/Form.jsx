import React from 'react'

function Form(){
    return (
    <form>
        <label htmlFor="Name">Name</label>
        <input type="text" name="Name" id="Name" cols="30" rows="10"/>
        <button type="submit">Buscar</button>

    </form>
    )
}

export default Form;