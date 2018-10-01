import React from "react";

const Wrapper = props => (
    <div onMouseDown={() => {props.closeModal()}}>{props.children}</div>
)

export default Wrapper;

