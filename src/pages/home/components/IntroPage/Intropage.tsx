'use client'
import { motion as m, useScroll, useTransform } from "framer-motion"
import {  useRef } from "react"
import './Intropage.scss'

const Intropage = () => {
    const intro = useRef<HTMLDivElement>(null)

    const { scrollY: firstprog } = useScroll({
        target: intro,
    })

    const Y = useTransform(firstprog, [0, 2000], [0, 15])

    return (
        <div id='intro' ref={intro} className="intro">
            <section className="perspective">
                <m.div
                    style={{
                        rotateY: Y,
                        rotateX: Y,
                    }}
                    className="inner"
                >
                    <div className="videoWrapper">
                        <video className="backgroundVideo" controls={false} autoPlay muted loop>
                            <source src="/videos/websiteback.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="context">
                        <span className="role">Frontend Developer</span>
                        <h1 className="name">FARID MUSTAFAYEV</h1>
                    </div>
                </m.div>
            </section>
        </div>
    )
}

export default Intropage
