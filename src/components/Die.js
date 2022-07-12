import React from "react";

function Die(props) {
    return (
        <div className="die--container">
            <div className="die"><div className="die--num">{props.value[0]}</div></div>
            <div className="die"><div className="die--num">{props.value[1]}</div></div>
            <div className="die"><div className="die--num">{props.value[2]}</div></div>
            <div className="die"><div className="die--num">{props.value[3]}</div></div>
            <div className="die"><div className="die--num">{props.value[4]}</div></div>
            <div className="die"><div className="die--num">{props.value[5]}</div></div>
            <div className="die"><div className="die--num">{props.value[6]}</div></div>
            <div className="die"><div className="die--num">{props.value[7]}</div></div>
            <div className="die"><div className="die--num">{props.value[8]}</div></div>
            <div className="die"><div className="die--num">{props.value[9]}</div></div>
        </div>
    )
}

export default Die