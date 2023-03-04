import { useState } from "react";

export const SButton = ()=>{
    let [age,setAge] = useState(0);
    let [inputValue,setInputValue] = useState("");
    const handleChange =(event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }
    const increaseAge = () => {
        setAge(age++);
    }

    return (
        <div>
            {age}
            <button onClick={increaseAge}>Increase age</button><br/>
            <input type="text" onChange={handleChange} />
            {inputValue}<br/>
            {/* <p style={{ display:isShow?"":"none" }} >Show hide text</p> */}
        </div>
    );
};