import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Cars from './components/Cars';
import Home from './components/Home';
import VideoP from './components/VideoP';
import { AnimatePresence } from 'framer-motion'

function App() {
      const Location = useLocation();
      return (
            <AnimatePresence exitBeforeEnter initial={false}>
                  <Routes location={Location} key={Location.pathname}>
                        <Route exact path="/mercedesbenz" element={<Home />} />
                        <Route path="/video" element={<VideoP />} />
                        <Route path="/cars" element={<Cars />} />
                  </Routes>
            </AnimatePresence>
      )
}

export default App