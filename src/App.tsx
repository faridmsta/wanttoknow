import { useEffect, useState } from 'react';
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as m } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import Lenis from 'lenis'

import Home from './pages/home/Home'
import Header from './components/header/Header';
import PageAnimator from './components/PageAnimator/PageAnimator';




function App() {

  const location = useLocation()




  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
      toast.custom(
        (t) => (
          <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
              } customNotificationfirst`}
          >
            ⚠️ This site may experience lag during scrolling due to high-resolution 3D models and intensive animations. <br /> <br />
            For a smoother experience, try using the scroll bar instead of the mouse wheel, or consider viewing the site on a higher-performance computer. <br />
            Alternatively, you can visit the
            <a href="https://wanttoknow.vercel.app/" target="_blank" rel="noopener noreferrer"> older version (v1.0)</a>.
          </div>



        ));

  }, [])






  const [visibleSection, setVisibleSection] = useState(null);
  const [isPageTaransition, setIsPageTaransition] = useState(false);


  useEffect(() => {
    setIsPageTaransition(true)
    setTimeout(() => {
      setIsPageTaransition(false)

    }, 1000)

  }, [visibleSection])


  return (
    <>
        <Toaster

          position="bottom-center"
          reverseOrder={false}
        />

      {
        // isLoading ? <AnimatePresence mode='wait' ><LoadingPage progress={fakeProgress} /></AnimatePresence>
        //   :
        <m.div
          initial={{ opacity: 1 }} // Set initial opacity to 1
          animate={{ opacity: isPageTaransition ? 0 : 1 }} // Set opacity based on visibleSection state
          transition={{ duration: 0.5 }}
          className='app'>
          <AnimatePresence mode='wait' >
            <Header setVisibleSection={setVisibleSection} />
            <Routes location={location} key={location.pathname} >
              <Route path='/' element={<PageAnimator><Home /></PageAnimator>} />
            </Routes>
          </AnimatePresence>
        </m.div>
      }
    </>
  )
}

export default App
