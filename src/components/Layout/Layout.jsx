import React from "react";
import AgentsManager from "../AgentsMananger/AgentsManager";
import Header from "../Header/Header";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <AgentsManager />
    </div>
  );
}
