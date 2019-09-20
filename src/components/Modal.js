import React from 'react';
export default function Modal (props){
    const item=props.item;
    const logo=item.logo+"?text="+item.name;
    return (
        <div className="modal">
            <img src={logo}></img>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <button onClick={props.close}>Close</button>
        </div>
    );
}