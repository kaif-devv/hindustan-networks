import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { MotionPreferencesProvider, useMotionPreferences } from "@/lib/MotionPreferences";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Home } from "@/pages/Home";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { IndustriesPage } from "@/pages/IndustriesPage";
import { ClientsPage } from "@/pages/ClientsPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

function ScrollToTop() {
  const location = useLocation();
  const { reduced } = useMotionPreferences();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
  }, [location.pathname, reduced]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const { reduced } = useMotionPreferences();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={reduced ? false : { opacity: 0, y: 10, filter: "blur(3px)" }}
        animate={{ opacity: 1, y: 0, filter: "none" }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(2px)" }}
        transition={{ duration: reduced ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="route-stage"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <MotionPreferencesProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <div className="app-shell min-h-screen">
              <ScrollToTop />
              <Navbar />
              <main className="pt-28 lg:pt-32">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </MotionPreferencesProvider>
      </MotionConfig>
    </HelmetProvider>
  );
}
