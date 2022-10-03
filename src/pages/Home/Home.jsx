import React from "react";
import HeroSection from "src/assets/images/hero-section.png";
import WhyJoin from "src/assets/images/why-join.svg";
import OnsiteClass from "src/assets/images/onsite-class.svg";
import ExpertTutor from "src/assets/images/expert-tutor.svg";
import ApprenticeProgram from "src/assets/images/apprentice-program.svg";
import HedonEstateLogo from "src/assets/images/hedon-estate-logo.png";
import LingotalkLogo from "src/assets/images/lingotalk-logo.png";
import StartupStudioLogo from "src/assets/images/startup-studio-logo.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container d-flex align-items-center">
            <div className="hero-left pe-0 pe-lg-3 d-flex flex-column align-items-center align-items-lg-start">
              <h1 className="h1 mb-4 fw-bold text-gray-600 text-center text-lg-start">
                Kickstart Your{" "}
                <span className="px-2 py-1 text-white">Career</span> With Hedon
                Ways
              </h1>
              <img
                src={HeroSection}
                alt=""
                className="mb-4 d-block d-lg-none"
              />
              <h3 className="h3 mb-4 fw-normal">
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
        <section className="partner d-block d-md-none">
          <div className="container">
            <h3 className="h3 mb-4 fw-bold text-info text-center">
              OUR PARTNERS
            </h3>
            <div className="d-flex align-items-center justify-content-center">
              <div className="partner-image">
                <img src={HedonEstateLogo} alt="" />
              </div>
              <div className="partner-image mx-4">
                <img src={LingotalkLogo} alt="" />
              </div>
              <div className="partner-image">
                <img src={StartupStudioLogo} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <h3 className="h3 mb-4 fw-bold text-info text-center">
              OUR UNIQUE SERVICES
            </h3>
            <h2 className="h2 mb-4 fw-bold text-gray-600 text-center">
              Why Join Hedon Digital Academy
            </h2>
            <div className="d-flex align-items-center py-3">
              <div className="services-left d-flex justify-content-center d-none d-md-block">
                <img src={WhyJoin} alt="" />
              </div>
              <div className="services-right d-flex flex-column align-items-center">
                <div class="card mb-4 border-0 shadow-lg rounded-4">
                  <div class="card-body px-4 py-3 d-flex">
                    <div className="services-right-image me-3">
                      <img src={OnsiteClass} alt="" />
                    </div>
                    <div className="services-right-detail">
                      <h3 className="h3 mb-2 text-main fw-bold">
                        On-site Class
                      </h3>
                      <p className="h5 m-0 text-justify">
                        Metode pembelajaran langsung di dalam ruang kelas yang
                        nyaman dengan fasilitas yang lengkap.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card mb-4 border-0 shadow-lg rounded-4">
                  <div class="card-body px-4 py-3 d-flex">
                    <div className="services-right-image me-3">
                      <img src={ExpertTutor} alt="" />
                    </div>
                    <div className="services-right-detail">
                      <h3 className="h3 mb-2 text-main fw-bold">
                        Expert Tutor
                      </h3>
                      <p className="h5 m-0 text-justify">
                        Tutor dari background pendidik serta praktisi expert
                        dibidangnya untuk membantu kalian memahami pembelajaran.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card mb-4 border-0 shadow-lg rounded-4">
                  <div class="card-body px-4 py-3 d-flex">
                    <div className="services-right-image me-3">
                      <img src={ApprenticeProgram} alt="" />
                    </div>
                    <div className="services-right-detail">
                      <h3 className="h3 mb-2 text-main fw-bold">
                        Apprentice Program
                      </h3>
                      <p className="h5 m-0 text-justify">
                        Kami bekerja sama dengan StartUp Studio Indonesia yang
                        sedang mencari talenta-talenta baru.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
