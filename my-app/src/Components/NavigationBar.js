import React from "react";
import "./../StyleComponent/Navigation.css";
function NavigationBar() {
  //NAvigationBar is the component
  return (
    <>
      <link
        href="../StyleComponents/Navigation.css"
        rel="stylesheet"
        type="text/css"
      />
      <header>
        <nav>
          {/* <!-- Left side of the navigation bar --> */}
          <div className="left">HPC Quantum Simulator</div>
          {/* <!-- Right side of the navigation bar with links --> */}
          <div className="right">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#simulator">Simulator</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;
