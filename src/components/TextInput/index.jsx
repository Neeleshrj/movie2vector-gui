import React from "react";
import "./index.css";

export default function TextInput({input,setInput}) {
  

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Movie description, genre, etc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-box"
      />
      
    </div>
  );
}
