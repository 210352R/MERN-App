import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="nevBarContainer">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="/">Posts</a> */}
          <Link to={"/home"} className="navbar-brand">
            Posts
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
