import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import validator from "validator";
import swal from "sweetalert";

function App() {
  const [email, setEmail] = useState("");
  const backendUrL = "https://mtaji-backend.herokuapp.com/app";

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registered = { email: email };
    axios
      .post(backendUrL, registered)
      .then((response) => console.log(response.data));

    setEmail("");
  };
  const handleAlert = () => {
    if (validator.isEmail(email)) {
      swal({
        title: "Congrats!",
        text: "You are an early adopter!",
        icon: "success",
        button: false,
      });
    } else {
    }
  };

  return (
    <>
      <div className="body-wrap boxed-container">
        {/* <div class="site-header">
          <div className="container">
            <nav className="navbar">
              <div>
                <a href="">
                  <img src="dist/images/logo-light.svg" id="nav-logo" />
                </a>
              </div>
            </nav>
          </div>
        </div> */}
        <header class="site-header">
          <div class="container">
            <div class="site-header-inner">
              <div class="brand header-brand">
                <h1 class="navbar">
                  <a href="#">
                    <img src="dist/images/logo-light.svg" alt="Logo" />
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-inner">
                <div className="hero-copy">
                  <h2 className="hero-title mt-0">
                    Invest in Uganda's next unicorn
                  </h2>
                  <p className="hero-paragraph">
                    40% of Ugandan companies cite access to funding as their
                    number one problem
                  </p>

                  <p className="hero-paragraph">
                    <span style={{ color: "#010a0b" }} id="special-line">
                      We are creating access and opportunity to invest in the
                      4th largest population in Africa.{" "}
                    </span>
                  </p>

                  <div>
                    <form className="hero-cta" onSubmit={handleSubmit}>
                      <input
                        type="email"
                        placeholder="Enter your email address to gain access"
                        value={email}
                        onChange={handleChange}
                      />
                      <button
                        className="button button-primary"
                        onClick={handleAlert}
                      >
                        Join Mtaji
                      </button>
                    </form>
                  </div>
                </div>
                <div className="hero-media">
                  <div className="hero-media-illustration">
                    <img
                      className="hero-media-illustration-image asset-light"
                      src="dist/images/hero-media-illustration-light.svg"
                      alt="Hero media illustration"
                    />
                  </div>
                  <div className="hero-media-container">
                    <img
                      className="hero-media-image asset-light"
                      src="dist/images/hero-media-light.svg"
                      alt="Hero media"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
