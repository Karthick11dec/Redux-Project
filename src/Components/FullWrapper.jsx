import React, { Fragment } from 'react';
import Body from './Body';
import Header from './Header';

function FullWrapper() {
    return (
        <Fragment>
            <div className="card-header p-0">
                <Header />
            </div>
            <div className="card-body" id="cardbody-bg">
                <Body />
            </div>
        </Fragment>
    )
}

export default FullWrapper
