export const convert = (d) => {
    let full = d.split("-");
    let [a, ...b] = full;
    return b.concat(a).join("/");
}

export const seconds = (dt) => {
    return -dt.getTimezoneOffset() * 60;
}

export const timeTosec = (t) => {
    let take = t.split(":");
    let [a, b] = take;
    return ((a * 60) * 60) + (b * 60);
}

export const getDate = (v) => {

    let process = v.toString().split(" ").splice(1, 3);
    let cut = process.splice(0, 2);

    switch (cut[0]) {
        case "Jan": cut[0] = "01";
            break;
        case "Feb": cut[0] = "02";
            break;
        case "Mar": cut[0] = "03";
            break;
        case "Apr": cut[0] = "04";
            break;
        case "May": cut[0] = "05";
            break;
        case "Jun": cut[0] = "06";
            break;
        case "Jul": cut[0] = "07";
            break;
        case "Aug": cut[0] = "08";
            break;
        case "Sep": cut[0] = "09";
            break;
        case "Oct": cut[0] = "10";
            break;
        case "Nov": cut[0] = "11";
            break;
        case "Dec": cut[0] = "12";
            break;
        default:
            break;
    }
    let store = process.concat(cut).join("-");
    return store;
}