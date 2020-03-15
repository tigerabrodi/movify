import React from 'react';
import spinner from "../../assets/spinner.gif"
import "./Spinner.scss"
const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinner} alt="spinner"/>
        </div>
    );
}

export default Spinner;
