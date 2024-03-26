import React, { useState } from "react";

function SelectUsername({ onInput }) {
  const [username, setUsername] = useState("");

  const isValid = username.length > 2;

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onInput(username);
    }
  };

  return (
    <div className="select-username" style={{ width: "300px", margin: "200px auto 0" }}>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your username..."
        />
        <button disabled={!isValid}>Send</button>
      </form>
    </div>
  );
}

export default SelectUsername;
