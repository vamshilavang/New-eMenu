import React from 'react';

const Choices = (props) => {
    return (
        <label className="choices radio-inline">
            <input type="radio" className="radio" name={props.qId} value={props.data.value} onChange={()=>props.events(props.qId,props.data.value)} /><span>  {props.data.caption}</span>
        </label>
    )
}

export default Choices