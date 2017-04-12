import React from 'react';
import Choice from './choices'

const Question = (props) => {
    return (
        <div className="greyFont">
            <div>{props.data.caption}</div>
            <div className="control-group">
                {
                    props.data.choices.map((c, i) => {
                        return <Choice key={i} data={c} qId={props.qId} events={props.events} />
                    })
                }
            </div>
        </div>
    )
}

export default Question;