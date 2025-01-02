import { motion as m } from "framer-motion"
import React from "react"


function PageAnimator({ children }: { children: React.ReactNode }) {
    return (
        <m.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 1,
            }}
            className="animatepage"

        >
            
            {children}
        </m.div>
    )
}

export default PageAnimator