import { waitForDomChange } from '@testing-library/react';
import React, { useState, useEffect } from 'react'

export default function App() {
    const [persons, setPersons] = useState([]);
    
    const getPersons = async () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json();
        })
        .then( data => {
            setPersons(data);
        })
        
    }
    const handleDelete = (id) => {
        const newPersons = persons.filter(person => person.id !== id)
        setPersons(newPersons)
    }
    useEffect(() => {
        getPersons();
    }, []);
    return (
        <div className="container source">
            <div className="persons">
            <ul>
                
                { persons && persons.map((item) => {
                    return(
                    <li key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                        <button onClick={() => handleDelete(item.id)}>delete</button>
                    </li>
                    )
                })}
            </ul>
            </div>
            <form action="">
            <label htmlFor="personInput"> Nom de la personne</label><br/>
            <input type="text" name="personInput"/><br/>
            <button type="submit">fetch data mothafucka</button>
            </form>
        </div>
    )
}
