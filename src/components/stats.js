import React from "react";
import NavBar from "./navabar";

export default function Stats() {
  return (
    <>
      <NavBar />
      <div className="container4">
        <div
          className="container card"
          style={{ width: "25rem", height: "10rem" }}
        >
          <p className="Num">2930</p>
          <div className="card-body">
            <hr className="divider" />
            <p className="card-text">Total</p>
          </div>
        </div>
        <div
          className="container card"
          style={{ width: "25rem", height: "10rem" }}
        >
          <p className="Num">2930</p>
          <div className="card-body">
            <hr className="divider" />
            <p className="card-text">Issued</p>
          </div>
        </div>
        <div
          className="container card"
          style={{ width: "25rem", height: "10rem" }}
        >
          <p className="Num">2930</p>
          <div className="card-body">
            <hr className="divider" />
            <p className="card-text">Available</p>
            <div><h1>asdada</h1></div>
          </div>
        </div>
      </div>
    </>
  );
}
