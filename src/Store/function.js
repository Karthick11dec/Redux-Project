export const timeconvert = (data) => {

    let time = data.task_time / 60;
    let hour = (time / 60).toFixed(2).split(".");
    return hour.join(":");

}

export const dateconvert = (data) => {

    let full = data.task_date.split("-");
    let [a, b, c] = full;
    let dates = new Date(a, b - 1, c, "00", "00", "00", "00");
    return dates;

}