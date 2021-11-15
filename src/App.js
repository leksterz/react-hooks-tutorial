import React, { useState } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

  return (
    <div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <div></div>
      </>
    </div>
  );
};

export default App;
