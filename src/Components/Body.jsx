import React, { Fragment } from 'react'
import Footer from './Footer';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setDescript, sethour, setminute, setName, setTimer, setValue, Success } from "../Store/Actions";
import { cID, token } from '../App';

function Body() {

    const dispatch = useDispatch();

    const Value = useSelector(state => state.bodyReducer.Value);
    const Timer = useSelector(state => state.bodyReducer.Timer);
    const hour = useSelector(state => state.bodyReducer.hour);
    const minute = useSelector(state => state.bodyReducer.minute);
    const Descript = useSelector(state => state.bodyReducer.Descript);
    const Name = useSelector(state => state.bodyReducer.Name);
    const deletor = useSelector(state => state.headReducer.deletor);
    const deleteID = useSelector(state => state.bodyReducer.deleteID);


    const Deletor = (id) => {

        fetch(`https://stage.api.sloovi.com/task/lead_0a44acf4b9e94fbab7f865c42436d409/${id}?company_id=${cID}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.status === "success") {
                    alert("Task deleted successfully.");
                    dispatch(Success());
                }
            })
            .catch(e => {
                console.log(e);
            })

    }

    return (
        <Fragment>
            <div className="container-fluid">

                <div className="row row-pad">
                    <div className="heading">Task Description</div>
                    <div className="input-group input-group-sm">
                        <input
                            type="text"
                            className="w-100 fs-6 text-capitalize"
                            value={Descript}
                            onChange={(e) => { dispatch(setDescript(e)) }}
                        />
                    </div>
                </div>

                <div className="row row-pad">
                    <div className="col-6">
                        <div className="heading">Date</div>
                        <div className="input-group input-group-sm">
                            <DatePicker
                                className="w-100 overlay"
                                format={"MM/dd/y"}
                                monthPlaceholder="04"
                                dayPlaceholder="26"
                                yearPlaceholder="2021"
                                clearIcon={null}
                                calendarIcon={null}
                                value={Value}
                                onChange={(e) => { dispatch(setValue(e)) }}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="heading">Time</div>
                        <div className="input-group input-group-sm">
                            <TimePicker
                                className="w-100 overlay"
                                format={"hhmm"}
                                hourPlaceholder={hour}
                                minutePlaceholder={minute}
                                clearIcon={null}
                                clockIcon={null}
                                value={Timer}
                                onChange={(e) => { dispatch(setTimer(e)) }}
                                onClick={() => { dispatch(sethour("hh"), dispatch(setminute("mm"))) }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row row-pad">
                    <div className="col-12">
                        <div className="heading">Assign User</div>
                        <div className="input-group input-group-sm">
                            <input
                                type="text"
                                className="w-100 fs-6 text-capitalize"
                                value={Name}
                                onChange={(e) => { dispatch(setName(e)) }}
                            />
                        </div>
                    </div>

                    <span>
                        <i className="fas fa-sort" id="sort-move"></i>
                    </span>
                    <span>
                        <i className="fas fa-download" id="down-move"></i>
                    </span>
                    <span>
                        <i className="far fa-clock" id="clock-move"></i>
                    </span>
                    <span>
                        <i className="far fa-calendar-alt" id="date-move"></i>
                    </span>

                </div>

                <div className="row row-pad pb-3 pt-3">
                    <div className="col-6 my-auto">
                        {
                            deletor &&
                            <div type="button" onClick={() => { Deletor(deleteID) }}>
                                <i className="fas fa-trash-alt" style={{ marginLeft: "12px" }}></i>
                            </div>
                        }
                    </div>
                    <div className="col-6">
                        <Footer />
                    </div>
                </div>

            </div>

        </Fragment>
    )

}

export default Body
