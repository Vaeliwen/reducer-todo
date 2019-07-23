import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/todoForm'
import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED } from './reducers/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: item })
}

  const toggleItem = (item) => {
    dispatch({ type: TOGGLE_COMPLETED, payload: item.id })
  }
  const clearItems = e => {
    e.preventDefault()
    dispatch({ type: CLEAR_COMPLETED });
  }

  return (
    <div>
      <TodoForm addItem={addItem} />
      <button onClick={clearItems}>Clear Completed</button>
      {state.list.map(listObj => {return <p className={`todo${listObj.completed ? ' completed' : ''}`} onClick={() => toggleItem(listObj)}>{listObj.item}</p>})}
    </div>
  );
}

export default App;
