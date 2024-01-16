import React, { useState } from "react";
import AuthComponent from "./AuthComponent";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  )
};

export default App;
