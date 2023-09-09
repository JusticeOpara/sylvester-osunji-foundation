import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import About from './About';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes: React.FC = () => {

    const location = useLocation()
    console.log(location, "--location")

    return (

        <AnimatePresence>

            <Routes location={location} key={location.pathname}>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/project" element={<Project />} />

            </Routes>

        </AnimatePresence>

    )
}
export default AnimatedRoutes
