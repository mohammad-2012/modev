import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";
import LoadingSpinner from "./ui/LoadingSpinner";
import PageNotFound from "./ui/PageNotFound";
import ScrollToTop from "./ui/ScrollToTop.";

const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Skills = lazy(() => import("./pages/Skills"));
// const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Certificates = lazy(() => import("./pages/Certificates"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about-me"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <AboutMe />
                </Suspense>
              }
            />
            <Route
              path="/certificates"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Certificates />
                </Suspense>
              }
            />
            <Route
              path="/skills"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Skills />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  {/* <Projects /> */}
                  <ComingSoon />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/comingSoon"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <ComingSoon />
                </Suspense>
              }
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}
