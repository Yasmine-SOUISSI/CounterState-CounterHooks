import React from "react";
import "./Form.css";
const Form = ({
    handleChangeNam,
    setFirstName,
    setLastName,
    firstName,
    lastName,
}) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter firstName ..."
                className="inputs"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Enter lastName ..."
                className="inputs"
                value={lastName}
                onChange={handleChangeNam}
            />
            <button
                onClick={() => {
                    setLastName("");
                    setFirstName("");
                }}
                className="btn btn-primary+"
            >
                Reset
            </button>
        </div>
    );
};

export default Form;
