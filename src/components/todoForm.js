import React, {useReducer, useState} from 'react'



const TodoForm = props => {
    const [newItem, setNewItem] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        setNewItem('');
        props.addItem(e, newItem)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'  placeholder='New Item' value={newItem} onChange={e => setNewItem(e.target.value)}></input>
            <button type='submit'>Add!</button>
        </form>          
    )
}

export default TodoForm