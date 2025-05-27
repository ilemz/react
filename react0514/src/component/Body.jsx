import ButtonA from "./ButtonA";
import ButtonB from "./ButtonB";
import { useState } from "react";

function Body(){
    
    /* function handleOnClick() {
        alert("버튼을 클릭하셨군요!");
    }

    return(
        <div>
            <h1> Body </h1>
            <button onClick={handleOnClick}>클릭하세요</button>
        </div>
    ); */

    /* function handleOnClick(e) { 
        console.log(e);
        console.log(e.target.name);
    }

    return (
        <div>
        <button name="A버튼" onClick={handleOnClick}>
            A 버튼
        </button>
        <button name="B버튼" onClick={handleOnClick}>
            B 버튼
        </button>
        </div>
    ); */

    /* return(
        <>
            <ButtonA />
            <ButtonB />
        </>
    ) */

    const[count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count+1);
    };

    return(
        <div>
            <h2>{count}</h2>
            <button onClick = {onIncrease}> + </button>
        </div>
    );
}

export default Body;