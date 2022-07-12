import React from "react";

function Die(props) {

    const styles = {
        backgroundColor: props.held ? '#b6d94a' : '#add2eb'
    }

    return (
        <div className="die" style={styles} onClick={props.handleClick}>
            <div className="die--num">{props.value}</div>
        </div>
    )
}

export default Die