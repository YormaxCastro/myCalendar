const TodoReducer = ( state = [ ], action)=> {
    switch (action.type) { // set all action here and return its payload  
        case "ADD_TODO":
            state = 
            [
                 ...state,
                 {
                     id: action.payload.id,
                     text: action.payload.text,
                     completed: false
                 }
                ]
            break;
    }
    return state
    }
export default TodoReducer