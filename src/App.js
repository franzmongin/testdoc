import { waitForDomChange } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Person from './Person';

export default function App() {
    const [persons, setPersons] = useState([]);
    const [value, setValue] = useState('');
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
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        setPersons([...persons, {id: 10}])
    }
    useEffect(() => {
        getPersons();
        console.log(value);
    }, []);
    useEffect(() => {
        console.log(value);
    }, [value]);
    
    
    return (
        <div className="container source">
            <div className="persons">
            <ul>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="addInput">ajouter personne</label>
                <input type="text" name="addInput" value={value} onChange={(e) => handleChange(e)}/>
                <button type="submit">ajouter</button>
            </form>
                { persons && persons.map((item) => {
                    return(
                        <React.Fragment key={item.id}>
                            <Person person={item} handleDelete={handleDelete}/>
                        </React.Fragment>
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
