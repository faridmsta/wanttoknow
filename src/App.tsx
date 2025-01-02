import { useEffect, useState } from 'react';
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as m } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

import Lenis from 'lenis'

import Home from './pages/home/Home'
import Header from './components/header/Header';
import PageAnimator from './components/PageAnimator/PageAnimator';
import LoadingPage from './pages/loadingPage/LoadingPage';




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



  // loading Stuff--------------------

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [fakeProgress, setFakeProgress] = useState<number>(0);

  useEffect(() => {
    const resources = performance.getEntriesByType("resource");
    let loadedResources = 0;

    // Update progress as resources load
    const updateProgress = () => {
      resources.forEach((_resource) => {
        loadedResources++;
        const newProgress = (loadedResources / resources.length) * 100;
        setProgress(newProgress);
      });
    };

    updateProgress(); // Initially update progress

    // Fake progress interval
    const fakeProgressInterval = setInterval(() => {
      setFakeProgress((prev) => Math.min(prev + 1, 101)); // Make sure it doesn't exceed 100
    }, 10);

    // Check for completion and cleanup
    if (progress === 100 && fakeProgress === 101) {
      setIsLoading(false);
      clearInterval(fakeProgressInterval); // Clear the interval when loading is complete
    }

    // Cleanup interval on component unmount
    return () => clearInterval(fakeProgressInterval);

  }, [progress, fakeProgress]); 

  // loading Stuff End-------------

  

  const [visibleSection, setVisibleSection] = useState(null);
  const [isPageTaransition, setIsPageTaransition] = useState(false);
  

  useEffect(()=>{
    setIsPageTaransition(true)
    setTimeout(()=>{
      setIsPageTaransition(false)
      
    },1000)
    
  },[visibleSection])


  return (
    <>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />

      {
        isLoading ? <AnimatePresence mode='wait' ><LoadingPage progress={fakeProgress} /></AnimatePresence>
          :
          <m.div
          initial={{ opacity: 1 }} // Set initial opacity to 1
          animate={{ opacity: isPageTaransition ? 0 : 1 }} // Set opacity based on visibleSection state
          transition={{ duration: 0.5 }} 
           className='app'>
            <AnimatePresence mode='wait' >
              <Header setVisibleSection={setVisibleSection}   />
              <Routes location={location} key={location.pathname} >
                <Route path='/' element={<PageAnimator><Home /></PageAnimator>} />
                <Route path='/*' element={<PageAnimator><Home /></PageAnimator>} />
              </Routes>
            </AnimatePresence>
          </m.div>
      }
    </>
  )
}

export default App
