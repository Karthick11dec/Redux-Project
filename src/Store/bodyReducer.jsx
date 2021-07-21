const States = {
    Descript: "Follow Up",
    Value: new Date(),
    Timer: "",
    hour: "Time",
    minute: "",
    Name: "Username",
    Save: "Save",
    deleteID: ""
}


const bodyReducer = (state = States, action) => {
    switch (action.type) {

        case "Des":
            return {
                ...state,
                Descript: action.payload
            }

        case "Val":
            return {
                ...state,
                Value: action.payload
            }

        case "Timer":
            return {
                ...state,
                Timer: action.payload
            }

        case "hour":
            return {
                ...state,
                hour: action.payload
            }

        case "min":
            return {
                ...state,
                minute: action.payload
            }

        case "name":
            return {
                ...state,
                Name: action.payload
            }

        case "Cancel":
            return {
                ...state,
                Descript: "Follow Up",
                Value: new Date(),
                Timer: "",
                hour: "Time",
                minute: "",
                Name: "Username",
                deleteID: ""
            }

        case "Adder":
            return {
                ...state,
                Descript: "Follow Up",
                Value: new Date(),
                Timer: "",
                hour: "Time",
                minute: "",
                Name: "Username",
                Save: "Save",
                deleteID: ""
            }

        case "Editor":
            return {
                ...state,
                Descript: action.payload.task_msg,
                Value: action.payload.task_date,
                Timer: action.payload.task_time,
                Name: action.payload.assigned_user_name,
                Save: "Update",
                deleteID: action.payload.deleteID
            }

        case "Success":
            return {
                ...state,
                Descript: action.payload,
                Value: action.payload,
                Timer: action.payload,
                Name: action.payload,
                deleteID: ""
            }

        default:
            return state;

    }
}

export default bodyReducer;