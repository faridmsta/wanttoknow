import { motion as m } from 'framer-motion'
import './LoadingPage.scss'


function LoadingPage({ progress }: { progress: number }) {
  return (
    <m.div
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="loading">
      <span>{progress}%</span>
      <div
        style={{
          width:`${progress}%`
        }}
       className="loadingBar"></div>
    </m.div>
  )
}

export default LoadingPage