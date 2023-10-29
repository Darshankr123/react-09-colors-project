import ColorList from "./ColorList";
import Form from "./Form";
import { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const getColors = (color) => {
    // console.log(color);
    try {
      const colorValues = new Values(color).all(10);
      setColors(colorValues);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form getColors={getColors} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
