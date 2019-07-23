export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const initialState = {
    list: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            const newItem = {
                item: action.payload, 
                completed: false, 
                id: new Date.now() 
            }
            return {
            ...state,
             list: [...state.list, newItem]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                list: state.list.map(item => {
                        if(action.payload === item.id){
                            return {...item, completed: !item.completed}
                        }
                        else {return item};
                    }
                )
            }
        default:
            return state
    }
}