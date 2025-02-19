import { useState } from "react";

const User = ({Name, Location, ContactUs})  => {
const[count, setCount] = useState(0);      
    return(
        <div className="user-component">
            <h2>count = {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Count</button>
            <h2>{ContactUs}</h2>
        </div>
    );
};

export default User;