import React from 'react'

export default function Person(props) {
    const {id, name, username, email} = props.person;
    return (
        <li>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <button onClick={() => props.handleDelete(id)}>delete</button>
        </li>
    )
}
