import React from "react";

function Form2({ data, handleChange }) {
  return (
    <div>
      <label htmlFor="">Message</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        name="message"
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default Form2;
