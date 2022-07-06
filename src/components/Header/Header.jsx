import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img
            className="d-inline-block align-text-top"
            src="https://i.imgur.com/ERSyV8v.png"
            alt=""
            width="60px"
          />
          <b className="ms-3">Valorant APP</b>
          <div className="d-flex  justify-content-center">
            <b className="text-center ms-4">
              <a className="nav-link active" href="#f">
                Agents
              </a>
            </b>
            <b className="text-center ms-4">
              <a className="nav-link " href="#f">
                Maps
              </a>
            </b>
            <b className="text-center ms-4">
              <a className="nav-link " href="#f">
                Buddies
              </a>
            </b>
          </div>
        </div>
      </div>
    </nav>
  );
}
