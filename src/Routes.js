import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import Careers from "containers/pages/Careers";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
	const location = useLocation()

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Error404/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/casos" element={<Cases/>} />
        <Route path="/servicios" element={<Services/>} />
        <Route path="/nosotros" element={<About/>} />
        <Route path="/carreras" element={<Careers/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contacto" element={<Contact/>} />
	</Routes>

    </AnimatePresence>
  )
}

export default AnimatedRoutes