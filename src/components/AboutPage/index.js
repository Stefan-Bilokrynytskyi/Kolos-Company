import React from "react"
import Footer from "../Footer";
import Header from "../Header";
import About from "./About";
import classes from "./AboutPage.module.scss"

function AboutPage() {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default AboutPage;