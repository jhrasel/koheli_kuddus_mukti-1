import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import Vidoes from "./Pages/Videos";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Vidoes />} />
      </Routes>
    </Layout>
  );
}
