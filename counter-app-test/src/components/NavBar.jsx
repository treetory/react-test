import React from "react";

export default function NavBar(props) {
    return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          <p style={{color: "black", fontSize: 20}}>{props.totalCounters}</p>
        </span>
        Items
      </div>
    </nav>
    )
}