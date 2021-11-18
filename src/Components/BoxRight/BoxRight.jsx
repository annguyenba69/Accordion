import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
BoxRight.propTypes = {
    value : PropTypes.array
};

BoxRight.defaultProps = {
    value : {}
}

function BoxRight(props) {
    const [showInfo, SetShowInfo] = useState(false);
    const {value} = props;
    function handleButtonInfo(){
        SetShowInfo(!showInfo);
    }
    return (
        <div className="col-12">
            <div className="box-right">
                <div className="box-right-title d-flex justify-content-between py-2">
                    <h5>{value.title}</h5>
                    <button className="button" onClick={handleButtonInfo}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
                </div>
                <div className="box-right-content">
                    {showInfo ? <p>{value.info}</p> : null}
                </div>
            </div>
        </div>
    );
}

export default BoxRight;