import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { token, cID } from "../App";
import { allTasks, Editor } from '../Store/Actions';
import { convert } from "./function";
import pic from "../Asset/images.jpg";

function Loader() {

    const dispatch = useDispatch();

    const tasks = useSelector(state => state.headReducer.allTasks);

    //get all tasks
    useEffect(() => {

        fetch(`https://stage.api.sloovi.com/task/lead_0a44acf4b9e94fbab7f865c42436d409?company_id=${cID}`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                if (res.status === "success") {
                    dispatch(allTasks(res.results));
                }
            })
            .catch(e => {
                console.log(e);
            })

    }, [dispatch]);

    //edit a single task
    const Edit = (id) => {

        fetch(`https://stage.api.sloovi.com/task/lead_0a44acf4b9e94fbab7f865c42436d409/${id}?company_id=${cID}`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                if (res.status === "success") {
                    res.results.deleteID = id;
                    dispatch(Editor(res.results));
                }
            })
            .catch(e => {
                console.log(e);
            })

    };


    return (
        <div>
            {tasks.length > 0 && tasks.map((i, ind) => (
                <div className="card card-body m-2" key={ind}>

                    <div className="container">

                        <div className="row">
                            <div className="col-2 my-auto mx-auto">
                                <img className="pic" src={pic} alt="loading.."></img>
                            </div>
                            <div className="col-6">
                                <div className="fw-bold">{i.task_msg}</div>
                                <div className="text-danger">{convert(i.task_date)}</div>
                            </div>
                            <div className="col-2 text-center my-auto">
                                <button className="border" onClick={() => { Edit(i.id) }}>
                                    <i className="fas fa-pencil-alt"></i>
                                </button>
                            </div>
                            <div className="col-2 text-left my-auto">
                                <div className="btn-group">
                                    <button className="border">
                                        <i className="fas fa-bell"></i>
                                    </button>
                                    <button className="border">
                                        <i className="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            )
            )}
        </div>
    )
}

export default Loader
