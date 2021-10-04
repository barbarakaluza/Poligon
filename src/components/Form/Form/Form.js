import React from "react";

function Form({ handleSubmit, children }) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            {children}
        </form>
    );
}

export default Form;