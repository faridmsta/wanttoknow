import './Aboutme.scss'
import Scene from '../../../../components/Scene/Scene'
import { motion as m } from 'framer-motion'
import useMousePosition from '../../../../hooks/useMousePosition'
import { useRef, useState } from 'react'


function Aboutme() {

    const aboutme = useRef<HTMLElement | null>(null);

    const aboutmetext='Farid Mustafayev is an Azerbaijani developer and founder of Ecolink. He has always had a strong affinity for technology and innovation. His interest in computers began at a young age when he was fascinated by exploring computer, which led him to break it—an event that sparked his passion for the tech world. After high school, Farid joined the Technest scholarship program, where he honed his skills in technology and development. He then focused on Frontend Development, where his expertise in Web Development brought him significant recognition. Farid has worked on notable projects. His work has made an impact in both the tech and ecological sectors, with a passion for sustainability and improving the environment. As a co-founder, Farid has been involved in the Ecolink startup, which addresses ecological issues in the world. He was also part of the winning team at the COP29 IT Hackathon. Farid is also involved in education, teaching web development at a university, where he shares his knowledge of development. With a keen interest in learning and teaching, Farid continues to make strides in the tech industry while balancing his work with his personal life. His journey reflects his dedication to both technological innovation and making a positive impact on the world.'

    const { x, y } = useMousePosition(aboutme)
    const [maskSize, setMaskSize] = useState(0)


    return (
        <section ref={aboutme} className="aboutme"

            onMouseEnter={() => { setMaskSize(50) }}
            onMouseLeave={() => { setMaskSize(0) }}>
            <div className="container">
                <div className="aboutmeInner">
                    <div className="left">
                        { <Scene /> }
                    </div>
                    <div className="right">
                        <div className="info">
                            <h2>Who is Farid Mustafayev</h2>
                            <p>{aboutmetext
                                .split(' ')
                                .map((item, index) => (
                                    <m.span
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: -20

                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0

                                        }}
                                        transition={{
                                            delay: index * 0.02,
                                            type: 'tween',
                                            

                                        }}
                                        viewport={{ once: true }}

                                    >{item}</m.span>
                                ))
                            }</p>
                        </div>
                    </div>
                    <m.div
                        animate={{
                            WebkitMaskPosition: `${x - maskSize / 2}px  ${y - maskSize / 2}px`,
                            WebkitMaskSize: `${maskSize}px`
                        }}
                        transition={{
                            type: 'tween',
                            ease: 'backOut'
                        }}
                        className="righttopWrap">
                        <div className="container">
                            <div className="right rightTop">

                                <div
                                    onMouseEnter={() => { setMaskSize(500) }}
                                    onMouseLeave={() => { setMaskSize(50) }}
                                    className="info">
                                    <h2>Who is Farid Mustafayev</h2>
                                    <p>{aboutmetext
                                        .split(' ')
                                        .map((item, index) => (
                                            <m.span
                                                key={index}
                                                initial={{
                                                    opacity: 0,
                                                    y: -20

                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0

                                                }}
                                                transition={{
                                                    delay: index * 0.02,
                                                    type: 'tween',

                                                }}
                                                viewport={{ once: true }}

                                            >{item}</m.span>
                                        ))
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme