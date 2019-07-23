import React, {useReducer, useState} from 'react'
import {reducer,
    initialState,
    ADD_ITEM,
    TOGGLE_COMPLETED
} from '../reducers/reducer'


const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newItem, setNewItem] = useState('')

    const addItem = (e, item) => {
        e.preventDefault();
        dispatch({ type: ADD_ITEM, payload: item })
    }



    return (
        <>
            <form onSubmit={newItem => addItem(newItem)}>
                <input type='text'  placeholder='New Item' value={newItem} onChange={e => setNewItem(e.target.value)}></input>
                <button type='submit'>Add!</button>
            </form>
            {state.list.map(listObj => {return <p>{listObj.item}</p>})}
        </>
    )
}

export default TodoList