import React from 'react';
import Modalcalendar from './Modalcalendar';

function getDate(date){
    let currdate=new Date();
    date=new Date(date);
    return !isNaN(Math.ceil((currdate-date) / (1000 * 60 * 60 * 24))) ? Math.ceil((currdate-date) / (1000 * 60 * 60 * 24)) : 0 ;
}
function setDate(e){
    e.stopPropagation();
}

export default function Listitem(props){
    const item=props.item;
    const logo=item.logo+"?text="+item.name;
    const date=getDate(item.date);
    function changeDate(e){
        var value=e.target.value;
        props.changeValue(props.id,value);
    }
    return (
        <tr onClick={(e) => props.showModal(props.item,e)}>
            <td>{item.date} <p>{date >0 ? date+" days ago" : Math.abs(date)+" days later"}</p></td>
            <td>
                <img src={logo} />
                <span>
                    <p>{item.name}</p> <span>{item.location}</span>
                </span> 
            </td>
            <td><i className="fa fa-dollar-sign"></i> <p>View Pricing</p></td>
            <td>
                <p>
                    <i className="fa fa-file"></i>
                    <i className="fa fa-signal"></i>
                    <i className="fa fa-calendar"></i>
                    <input type="date" className="input" onClick={setDate} onChange={changeDate} />
                </p>
            </td>
        </tr>
    );
}