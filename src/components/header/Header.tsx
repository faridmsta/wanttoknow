import { Link } from 'react-router-dom'
import './Header.scss'
import fmlogo from './../icons/fmlogo.png'
import { motion as m } from 'framer-motion'
import { useRef, useState } from 'react'
import useMousePosition from '../../hooks/useMousePosition'

import Pdf from "./../../components/res/faridmustafayevresume.pdf";

function Header({setVisibleSection}:{setVisibleSection:Function}) {

    const header = useRef<HTMLUListElement | null>(null);

    const { x, y } = useMousePosition(header)
    const [maskSize, setMaskSize] = useState(0)

    function OpenCv() {
        window.open(Pdf);
    }

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 
        const targetId = e.currentTarget.getAttribute('href')?.slice(1); 
        if (targetId) {
          setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' }); 
            }
          }, 600); 
        }
      };


    return (
        <m.header

            onMouseEnter={() => { setMaskSize(200) }}
            onMouseLeave={() => { setMaskSize(0) }}

            initial={{
                top:-70
            }}
            animate={{
                top:50
            }}
            transition={{
                duration: 1.5,
                delay:3,
                type:'spring',
                stiffness: 100,
            }}
        >
            <nav>
                <ul className='nonmaskul' >
                    <li className='logo'><Link to="/"><img src={fmlogo} alt="" /></Link></li>
                    <li onClick={() => setVisibleSection("intro")} ><a href='#intro' onClick={handleNavigation}  >Home</a></li>
                    <li onClick={() => setVisibleSection("projects")} ><a href='#projects' onClick={handleNavigation}  >Projects</a></li>
                    <li onClick={() => setVisibleSection("contact")} ><a href='#contact' onClick={handleNavigation} >Contact</a></li>
                    <li><button onClick={OpenCv}>Cv</button></li>
                </ul>
                <m.ul
                    animate={{
                        WebkitMaskPosition: `${x - maskSize / 2}px  ${y - maskSize / 2}px`,
                        WebkitMaskSize: `${maskSize}px`
                    }}
                    transition={{
                        type: 'tween',
                        ease: 'backOut'
                    }}

                    ref={header}
                    className='maskul'>
                    <li className='logo'><Link to="/"><img src={fmlogo} alt="" /></Link></li>
                    <li onClick={() => setVisibleSection("intro")} ><a href='#intro' onClick={handleNavigation}  >Home</a></li>
                    <li onClick={() => setVisibleSection("projects")} ><a href='#projects' onClick={handleNavigation}  >Projects</a></li>
                    <li onClick={() => setVisibleSection("contact")} ><a href='#contact' onClick={handleNavigation} >Contact</a></li>
                    <li><button onClick={OpenCv}>Cv</button></li>
                </m.ul>
            </nav>


        </m.header>
    )
}

export default Header