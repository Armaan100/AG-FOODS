import { useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return (
        <div className="user-card">
            <button
            onClick={()=>{
                setCount(count+1);
            }}
            >Click Count
            </button><br/> 
            <button
            onClick={()=>{
                setCount(0);
            }}
            >
                Reset Count
            </button>
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h1>Name: {props.name}</h1>
            <h3>Location: {props.location}</h3>
            <h3>Contact: {props.contact}</h3>
        </div>
    )
}

export default User;