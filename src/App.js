import React, { useState } from "react";
import CounterFunction from "./Components/CounterFunction";
import Form from "./Components/Form";
import { Button } from "react-bootstrap";
import Counter from "./Components/Counter";
function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [show, setShow] = useState(false);
    const handleChangeNam = (e) => {
        setLastName(e.target.value);
    };
    const handleShow = () => {
        setShow(!show);
    };
    return (
        <div>
            <Form
                setLastName={setLastName}
                setFirstName={setFirstName}
                handleChangeNam={handleChangeNam}
                firstName={firstName}
                lastName={lastName}
            />
            <h3>
                {firstName}
                {lastName}
            </h3>
            <Button variant="succes" onClick={handleShow}>
                {show ? "Hide Counter" : "Show Counter"}
            </Button>
            <h2>Hooks Counter</h2>
            {show && <CounterFunction />}
            <h1>State Counter</h1>
            {show && <Counter />}
        </div>
    );
}

export default App;
