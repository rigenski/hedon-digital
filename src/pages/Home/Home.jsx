import React from "react";
import HeroSection from "src/assets/images/hero-section.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container d-flex align-items-center">
          <div className="hero-left pe-0 pe-lg-3 d-flex flex-column align-items-center align-items-lg-start">
            <h1 className="h1 fw-bold text-gray-600 mb-4 text-center text-lg-start">
              Kickstart Your{" "}
              <span className="px-2 py-1 text-white">Career</span> With Hedon
              Ways
            </h1>
            <img src={HeroSection} alt="" className="d-block d-lg-none mb-4" />
            <h3 className="h3 fw-normal mb-4">
              Mulai langkah awal untuk mempersiapkan karirmu bersama{" "}
              <span className="fw-bold">Hedon Digital Academy.</span> Dengan
              metode on-site learning, memudahkan kalian untuk fokus dalam
              belajar~
            </h3>
            <button className="btn btn-app btn-lg rounded-pill">
              SEE OUR CLASSES
            </button>
          </div>
          <div className="hero-right ps-0 ps-lg-3 d-none d-lg-block">
            <img src={HeroSection} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
