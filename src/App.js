import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './styles.css';
import "./App.css"

import Header from "./sections/Header/Header";
import AboutMe from "./sections/AboutMe/AboutMe";
import Skills from "./sections/SkillsAndEdu/Skills";
import Edu from "./sections/SkillsAndEdu/Edu";
import Footer from "./sections/Footer/Footer";
import ContactMe from "./sections/ContactMe/ContactMe";

export default function App() {
    return(
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/MyPortfolio" element={<AboutMe />}/>
                    <Route path="/MyPortfolio/about" element={<AboutMe />}/>
                    <Route path="/MyPortfolio/skills" element={<Skills />}/>
                    <Route path="/MyPortfolio/edu" element={<Edu />}/>
                    <Route path="/MyPortfolio/contact" element={<ContactMe />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}