import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
