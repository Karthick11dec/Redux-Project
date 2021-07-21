import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cancel, Success } from '../Store/Actions';
import { token, cID } from "../App";
import { getDate, seconds, timeTosec } from './function';

function Footer() {

    const dispatch = useDispatch();

    const Descript = useSelector(state => state.bodyReducer.Descript);
    const Value = useSelector(state => state.bodyReducer.Value);
    const Timer = useSelector(state => state.bodyReducer.Timer);
    const Name = useSelector(state => state.bodyReducer.Name);
    const Save = useSelector(state => state.bodyReducer.Save);
    const deleteID = useSelector(state => state.bodyReducer.deleteID);


    const Add = (value) => {

        if (value === "Save") {

            fetch(`https://stage.api.sloovi.com/task/lead_0a44acf4b9e94fbab7f865c42436d409?company_id=${cID}`,
                {
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        assigned_user: Name,
                        task_date: getDate(Value),
                        task_time: timeTosec(Timer),
                        is_completed: 1,
                        time_zone: seconds(new Date()),
                        task_msg: Descript
                    })
                }
            )
                .then(res => res.json())
                .then(res => {
                    // console.log(res);
                    if (res.status === "success") {
                        alert("Task added Successfully.");
                        dispatch(Success());
                    }
                })
                .catch(e => {
                    console.log(e);
                })

        }
        else if (value === "Update") {

            fetch(`https://stage.api.sloovi.com/task/lead_0a44acf4b9e94fbab7f865c42436d409/${deleteID}?company_id=${cID}`, {
                method: "PUT",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    assigned_user: Name,
                    task_date: getDate(Value),
                    task_time: timeTosec(Timer),
                    is_completed: 1,
                    time_zone: seconds(new Date()),
                    task_msg: Descript
                })
            })
                .then(res => res.json())
                .then(res => {
                    // console.log(res);
                    if (res.status === "success") {
                        alert("Updated successfully.");
                        dispatch(Success());
                    }
                })
                .catch(e => {
                    console.log(e);
                })

        }

    }

    return (
        <Fragment>
            <div className="d-flex flex-row float-end">
                <div
                    className="btn-class"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Cancel Task"
                    onClick={() => { dispatch(Cancel()) }}
                >
                    Cancel
                </div>
                <div
                    className="btn-class btn-success"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Save Task"
                    onClick={() => { Add(Save) }}
                >
                    {Save}
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
