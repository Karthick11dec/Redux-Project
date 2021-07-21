const headState = {
    Tasks: 0,
    Adder: false,
    allTasks: [],
    deletor: false
}


const headReducer = (state = headState, action) => {
    switch (action.type) {

        case "allTasks":
            return {
                ...state,
                allTasks: action.payload
            }

        case "Success":
            return {
                ...state,
                Adder: false
            }

        case "Cancel":
            return {
                ...state,
                Adder: false,
                deletor: false
            }

        case "Adder":
            return {
                ...state,
                Adder: true,
                deletor: false
            }

        case "Editor":
            return {
                ...state,
                Adder: true,
                deletor: true
            }

        default:
            return state;

    }
}
export default headReducer;