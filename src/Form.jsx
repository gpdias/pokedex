import React from 'react'

function Form(){
    return (
    <form>
        <label htmlFor="Name">Name</label>
        <textarea name="Name" id="Name" cols="30" rows="10"></textarea>
        <button type="submit">Buscar</button>

    </form>
    )
}

export default Form;