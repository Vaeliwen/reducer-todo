import React, {useReducer} from 'react'
import {reducer, initialState} from '../reducers/reducer'


const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_ITEM',  })
    }

    return (
        <>
            <form>
                <input type='text' placeholder='New Item'></input>
                <button type='submit'>Add!</button>
            </form>
            {state.list.map(listObj => {return <p>{listObj.item}</p>})}
        </>
    )
}

export default TodoList