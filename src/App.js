import React from "react";
import CountryList from "./components/CountryList";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <CountryList></CountryList>
    </div>
  );
}
