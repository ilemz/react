import React from "react";

function Body(){
    /* const numA = 1;
    const numB = 2;
    return (
        <div>
        <h1>Body</h1>
        <h2>{numA + numB}</h2>
        </div>
    ); */
    /* const strA = "안녕";
    const strB = "리액트";
    return (
        <div>
        <h1>Body</h1>
        <h2>{strA + strB}</h2>
        </div>
    ); */
    /* const boolA = true;
    const boolB = false;
    return (
        <div>
        <h1>Body</h1>
        <h2>{String (boolA || boolB)}</h2>
        </div>
    ); */
    /* const objA = {
        a: 1,
        b: 2,
    };
    return (
        <div>
            <h1>body</h1>
            <h2>a: {objA.a}</h2>
            <h2>b: {objA.b}</h2>
        </div>
    ); */
    return (
        <React.Fragment>
          <div>div 1</div>
          <div>div 2</div>
        </React.Fragment>
    );
}

/* const Body = () => {
    return(
        <div>
            <h1> Body </h1>
        </div>
    );
} */

export default Body;