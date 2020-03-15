import React from 'react';

export default (props) => {
        return (
            <div>
                <p>Car name: {props.name || "Без имени"}</p>
                <div>Год {props.year}</div>
                { props.children}
                <button onClick={props.onChangeTitle}>Click</button>
            </div>
        )
    };