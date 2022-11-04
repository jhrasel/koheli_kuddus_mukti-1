import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";

export default function App() {
  const [appSettings, setAppSettings] = useState({});

  async function fetchAppSettings() {
    try {
      const response = await axios.get(
        "http://koheli.sscquizcontest.com/api/application-settings"
      );
      setAppSettings(response.data.data);
    } catch (error) {
      //
    }
  }

  useEffect(() => {
    fetchAppSettings();

    //   SET APP TITLE
    document.title = appSettings.app_name
      ? appSettings.app_name
      : "কোহেলী কুদ্দুস মুক্তি";
  }, [appSettings]);
  return (
    // <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home appSettings={appSettings} />} />
      </Routes>
    </Layout>
    // {/* </> */}
  );
}
