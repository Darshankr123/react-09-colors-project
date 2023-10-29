import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import ColorList from "./ColorList";

const Form = ({ getColors }) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getColors(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-input"
        />
        <input
          type="text"
          value={color}
          placeholder="#f1f0f5"
          onChange={(e) => setColor(e.target.value)}
        />

        <button
          type="submit"
          className="btn"
          style={{
            background: color,
          }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
