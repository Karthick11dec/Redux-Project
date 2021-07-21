import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import TitleWrapper from './TitleWrapper';
import FullWrapper from "./FullWrapper";
import Loader from './Loader';


function Wrapper() {

    const Adder = useSelector(state => state.headReducer.Adder);

    return (
        <Fragment>
            <div className="d-flex justify-content-center mt-5">
                <div className="card mb-5" style={{ width: "35rem" }}>
                    {Adder ? (
                        <FullWrapper />
                    ) : (
                        <Fragment>
                            <TitleWrapper />
                            <Loader />
                        </Fragment>
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default Wrapper
