import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function CounterFunction() {
    const [count, setCount] = useState(0);
    const handleClickPlus = () => {
        setCount(count + 1);
    };
    //Component did Mount && will mount
    useEffect(() => {
        console.log("Component did mount");
    }, []);
    //update only when the counter is updated
    useEffect(() => {
        alert("update");
    }, [count]);
    //Component will unmount
    useEffect(() => {
        return () => {
            alert("goodbye");
        };
    }, []);
    return (
        <div>
            <Button
                variant="success"
                onClick={handleClickPlus}
                className="addMinusBtn"
            >
                +
            </Button>
            <h2>{count}</h2>
            <Button
                variant="success"
                className="addMinusBtn"
                onClick={() => {
                    count > 0 && setCount(count - 1);
                }}
            >
                -
            </Button>
        </div>
    );
}

export default CounterFunction;
