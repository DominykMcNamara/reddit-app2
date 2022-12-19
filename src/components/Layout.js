import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <div className="container-fluid bg-primary">
      <header>
        <Header />
      </header>
      <main className="App">
        <Outlet />
      </main>
    </div>
  );
};
