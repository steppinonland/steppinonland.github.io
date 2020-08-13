
import React, { Component } from "react";
import About from "./About";
import Intro from "./Intro";
import Slideshow from "./Slideshow";
import Name from "./Name";
import Approach from "./Approach";
import Skills from "./Skills";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

class Container extends Component {

  render() {
    return (
      <div>
        <Intro />
        <Slideshow />
        <Name />
        <Approach />
        <About />
        <Skills />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Container;
