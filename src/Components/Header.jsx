import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Adder } from '../Store/Actions';

function Header() {

    const dispatch = useDispatch();

    const allTasks = useSelector(state => state.headReducer.allTasks);

    return (
        <Fragment>
            <div className="container-fluid">

                <div className="row">
                    <div
                        className="col-11 text-start padder1 cursor"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Task Count"
                    >
                        TASKS {allTasks.length}
                    </div>
                    <div
                        className="col-1 text-center padder2"
                        id="btn"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="New Task"
                        onClick={() => { dispatch(Adder()) }}
                    >
                        +
                    </div>
                </div>

            </div>
        </Fragment >
    )

}

export default Header
