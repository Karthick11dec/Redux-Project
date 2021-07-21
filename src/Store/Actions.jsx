import { dateconvert, timeconvert } from "./function"


//for body dispatching

export const setDescript = (e) => {
    return {
        type: "Des",
        payload: e.target.value
    }
}

export const setValue = (e) => {
    return {
        type: "Val",
        payload: e
    }
}

export const setTimer = (e) => {
    return {
        type: "Timer",
        payload: e
    }
}

export const sethour = (e) => {
    return {
        type: "hour",
        payload: e
    }
}

export const setminute = (e) => {
    return {
        type: "min",
        payload: e
    }
}

export const setName = (e) => {
    return {
        type: "name",
        payload: e.target.value
    }
}


//for gettasks,save,cancel,delete

export const allTasks = (data) => {
    return {
        type: "allTasks",
        payload: data
    }
}

export const Adder = () => {
    return {
        type: "Adder"
    }
}

export const Cancel = () => {
    return {
        type: "Cancel"
    }
}

export const Save = () => {
    return {
        type: "Save"
    }
}

export const Success = () => {
    return {
        type: "Success"
    }
}

export const Editor = (data) => {

    data.task_time = timeconvert(data);
    data.task_date = dateconvert(data);

    return {
        type: "Editor",
        payload: data,
    }
}

export const Delete = () => {
    return {
        type: "Delete"
    }
}