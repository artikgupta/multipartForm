import React from "react";

function Form1({ user, handleChange }) {
  return (
    <div>
      <h1>Signup</h1>
      <div className="flex justify-between  ">
        <div>
          <label>FirstName</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={user.firstName}
            className="border border-gray-800"
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={user.lastName}
            className="border border-gray-800"
          />
        </div>
      </div>
      <div className="flex justify-between   ">
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            onChange={handleChange}
            value={user.dateOfBirth}
            className="border border-gray-800"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            className="border border-gray-800"
          />
        </div>
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={user.address}
          className="border border-gray-800"
        />
      </div>
    </div>
  );
}

export default Form1;
