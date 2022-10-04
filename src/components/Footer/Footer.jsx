import React from "react";
import LogoHedonDigital from "src/assets/images/hedon-digital-logo.png";
import Instagram from "src/assets/icons/instagram.svg";
import Mail from "src/assets/icons/mail.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-between">
            <div className="footer-info pe-4">
              <img src={LogoHedonDigital} alt="" />
              <h4 className="h4 m-0 text-gray-600 text-justify">
                Language and IT Courses Institute Based On Surabaya, Indonesia
              </h4>
            </div>
            <div className="footer-desc">
              <h4 className="h4 mb-3 text-gray-600">
                <span className="fw-bold">HEDON ESTATE SURABAYA</span>
                <br /> <br /> Jl. Ngagel Timur. No.23, Pucang Sewu, Kec. Gubeng,
                Kota SBY, Jawa Timur 60283
              </h4>
              <a
                href="/"
                className="mb-2 d-none d-lg-flex align-items-center text-decoration-none"
              >
                <img src={Instagram} alt="" />
                <h4 className="h4 ms-2 mb-0 text-gray-600">@hedondigital</h4>
              </a>
              <a
                href="/"
                className="mb-2 d-none d-lg-flex align-items-center text-decoration-none"
              >
                <img src={Mail} alt="" />
                <h4 className="h4 ms-2 mb-0 text-gray-600">
                  halo@hedondigital.com
                </h4>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row mb-3 mb-lg-0">
              <div className="col-4 col-md-6 col-lg-4 mb-2">
                <a
                  href="/"
                  className="h4 text-gray-600 text-decoration-none fw-bold"
                >
                  Tentang Hedon
                </a>
              </div>
              <div className="col-4 col-md-6 col-lg-4 mb-2">
                <a
                  href="/"
                  className="h4 text-gray-600 text-decoration-none fw-bold"
                >
                  Kelas Hedon
                </a>
              </div>
              <div className="col-4 col-md-6 col-lg-4 mb-2">
                <a
                  href="/"
                  className="h4 text-gray-600 text-decoration-none fw-bold"
                >
                  Program Hedon
                </a>
              </div>
              <div className="col-4 col-md-6 col-lg-4 mb-2">
                <a
                  href="/"
                  className="h4 text-gray-600 text-decoration-none fw-bold"
                >
                  Company Program
                </a>
              </div>
              <div className="col-4 col-md-6 col-lg-4 mb-2">
                <a
                  href="/"
                  className="h4 text-gray-600 text-decoration-none fw-bold"
                >
                  FAQ
                </a>
              </div>
            </div>
            <div className="footer-social d-flex d-lg-none justify-content-center">
              <a href="/" className="mx-4">
                <img src={Instagram} alt="" />
              </a>
              <a href="/" className="mx-4">
                <img src={Mail} alt="" />
              </a>
              <a href="/" className="mx-4">
                <img src={Instagram} alt="" />
              </a>
              <a href="/" className="mx-4">
                <img src={Mail} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
