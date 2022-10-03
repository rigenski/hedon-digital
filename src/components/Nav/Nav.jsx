import React from "react";
import LogoHedonDigital from "src/assets/images/hedon-digital-logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg w-100 p-0 position-fixed bg-white shadow-sm">
        <div class="container">
          <a class="navbar-brand me-2 p-0" href="#">
            <img src={LogoHedonDigital} alt="" />
          </a>
          <button
            class="navbar-toggler p-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-start align-items-lg-center">
              <li class="nav-item">
                <a
                  class="nav-link active h5 me-0 me-lg-2 mb-0 px-3 py-2"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 me-0 me-lg-2 mb-0 px-3 py-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item h5" href="#">
                      Course 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item h5" href="#">
                      Course 2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 me-0 me-lg-2 mb-0 px-3 py-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company Programs
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item h5" href="#">
                      Program 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item h5" href="#">
                      Program 2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link h5 me-0 me-lg-2 mb-0 px-3 py-2" href="#">
                  FAQ
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center justify-content-lg-start align-items-start align-items-lg-center mb-3 mb-lg-0">
              <button className="btn btn-secondary rounded-pill me-2 mb-2 mb-lg-0">
                Login
              </button>
              <button className="btn btn-app rounded-pill">SignUp</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
