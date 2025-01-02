import Ajax from './img/AJAX.png'
import Ant from './img/ant-design.png'
import Bootstrap from './img/bootstrap.webp'
import Css from './img/css.png'
import Git from './img/Git.png'
import Github from './img/github.png'
import Headless from './img/headless-ui.png'
import Html from './img/html.png'
import Js from './img/JavaScript.png'
import Ts from './img/typescript.svg'
import Jquery from './img/jQuery.png'
import Json from './img/JSON.png'
import Matui from './img/material-ui.png'
import Npm from './img/npm.png'
import Python from './img/pythonlogo.png'
import Router from './img/react-router.png'
import Reactlogo from './img/React.png'
import Responsive from './img/Responsive.png'
import Tailwind from './img/Tailwind.png'
import Vite from './img/vite.png'
import Spline from './img/spline.png'
import Scss from "./img/scss.png"
import Cpp from "./img/cpp.png"
import Redux from "./img/redux-logo-vector.svg"

import { useState } from 'react';
import './SkillsPage.scss';
import { motion as m } from 'framer-motion';

function SkillsPage() {
    const [isHovered, setIsHovered] = useState(false); // State to track hover
    const [_isHovered2, setIsHovered2] = useState(false); // State to track hover

    const listUp = [
        Ant, Headless, Git, Bootstrap, Github, Js, Ts, Python,
        Cpp, Npm, Jquery, Matui
    ];
    const listDown = [
        Html, Css, Scss, Ajax, Json,
        Reactlogo, Vite, Router, Redux, Responsive, Tailwind, Spline
    ];

    return (
        <section className="skills">
            <div
                className="skillsWrap"

            >
                <div className="slide"
                    onMouseEnter={() => setIsHovered(true)} // Stop animation on hover
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {[...Array(3)].map((_, index) => (
                        <m.div
                            key={index}
                            initial={{ x: '0' }}
                            animate={{ x: '-100%' }} // Stop animation when hovered
                            transition={{ duration: 10, ease: 'linear', repeat: isHovered ? 0 : Infinity }}
                            className="logos">
                            {listUp.map((logo, index) => (
                                <div key={index} className="logo">
                                    <img
                                        loading="lazy"
                                        src={logo} alt="logo" />
                                </div>
                            ))}
                        </m.div>
                    ))}
                </div>
                <div className="slide"
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    {[...Array(3)].map((_, index) => (
                        <m.div
                            key={index}
                            initial={{ x: '-100%' }}
                            animate={{ x: '0' }}
                            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                            className="logos">
                            {listDown.map((logo, index) => (
                                <div key={index} className="logo">
                                    <img
                                        loading="lazy"
                                        src={logo} alt="logo" />
                                </div>
                            ))}
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsPage;

