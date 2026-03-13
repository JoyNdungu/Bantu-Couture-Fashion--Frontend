import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Signup from "./Signup";
import Login from "./Login";
import Landingpage from "./Landingpage";
import Collection from "./Collection";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route 
          path="*" 
          element={
            <Layout>
              <Landingpage /> 
            </Layout>
          } 
        />

        <Route
          path="/landingpage"
          element={
            <Layout>
              <Landingpage />
            </Layout>
          }
        />
        <Route
          path="/collection"
          element={
            <Layout>
              <Collection />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact/>
            </Layout>
          }
        />

        {/* Auth pages without Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />

      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}