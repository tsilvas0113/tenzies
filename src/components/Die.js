import React from "react";

function Die(props) {
    return (
        <div className="die--container">
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
            <div className="die"><div className="die--num">{props.value}</div></div>
        </div>
    )
}

export default Die