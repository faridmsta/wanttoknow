import './Projects.scss'
import { AnimatePresence, motion as m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import adminpanel from './sites/adminpanel.png'
import aeroclimaaz from './sites/aeroclimaaz.png'
import bloggy from './sites/bloggy-me.png'
import booking from './sites/booking.png'
import boomerangCV from './sites/boomerangCv.png'
import calendar from './sites/calendar.png'
import educaste from './sites/educaste.png'
import rpc from './sites/rpc.png'
import starbucks from './sites/starbuks.png'
import turboaz from './sites/turboaz.png'
import unipage from './sites/unipage.png'
import ecolink from './sites/ecolink.png'
import calculatorExpo from './sites/calculatorExpo.png'

import useMousePosition from '../../../../hooks/useMousePosition'
import toast from 'react-hot-toast'

import { RxCrossCircled } from "react-icons/rx";
import { TfiArrowTopRight } from "react-icons/tfi";

function Projects() {
  const projects = [
    {
      id: 2,
      image: aeroclimaaz,
      title: "Aeroclima.az",
      link: 'https://aeroclima.az/',
      githubLink: ''
    },
    {
      id: 1,
      image: boomerangCV,
      title: "Vacancy platform",
      link: '',
      githubLink: ''
    },
    {
      id: 1,
      image: starbucks,
      title: "Starbucks",
      link: 'https://starbucks-dusky.vercel.app/',
      githubLink: 'https://github.com/faridmsta/Starbucks'
    },
    {
      id: 1,
      image: adminpanel,
      title: "Admin Panel",
      link: 'https://adminpanel-black.vercel.app/',
      githubLink: 'https://github.com/faridmsta/adminpanel'
    },
    {
      id: 4,
      image: bloggy,
      title: "Blog site",
      link: '',
      githubLink: 'https://github.com/faridmsta/bloggyme'
    },
    {
      id: 1,
      image: unipage,
      title: "Uni page",
      link: 'https://site-for-university.vercel.app/',
      githubLink: 'https://github.com/faridmsta/Site-for-University'
    },
    {
      id: 1,
      image: turboaz,
      title: "Turbo.az",
      link: 'https://fake-car-selling-site.vercel.app/',
      githubLink: 'https://github.com/faridmsta/Fake-Car-Selling-Site'
    },

    {
      id: 1,
      image: rpc,
      title: "Rpc",
      link: 'https://faridmsta.github.io/RockPaperScissors/',
      githubLink: 'https://github.com/faridmsta/RockPaperScissors?tab=readme-ov-file'
    },
    {
      id: 1,
      image: educaste,
      title: "Educaste",
      link: 'https://education-site-homepage.vercel.app/',
      githubLink: 'https://github.com/faridmsta/EducationSiteHomepage '
    },

    {
      id: 1,
      image: calendar,
      title: "Calendar",
      link: 'https://faridmsta.github.io/Calendar/',
      githubLink: 'https://github.com/faridmsta/Calendar'
    },
    {
      id: 1,
      image: booking,
      title: "Booking",
      link: 'https://reservation-booking-black.vercel.app/',
      githubLink: 'https://github.com/faridmsta/Reservation-Booking '
    },
    {
      id: 1,
      image: ecolink,
      title: "EcoLink App",
      link: '',
      githubLink: ''
    },
    {
      id: 1,
      image: calculatorExpo,
      title: "Calculator App",
      link: '',
      githubLink: 'https://github.com/faridmsta/calculator-react-native'
    },

  ]

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])


  return (
    <div id='projects' ref={projectsRef} className="projectsRelative">
      <section className="projects">
        <div className="projectsInner">
          <m.div
            style={{
              x
            }}
            className="sites">
            {projects.map((project, index) => (

              <SiteCard key={index} item={project} />
            ))}
            <div className="sitesAfter">
              <a target='_blank' href="https://github.com/faridmsta">
                check more on GitHUB
                <TfiArrowTopRight />
              </a>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  )
}

export default Projects


const SiteCard = ({ item }: { item: any }) => {
  const siteCardRef = useRef<HTMLDivElement | null>(null);
  const gitRef = useRef<HTMLAnchorElement | null>(null);
  const { x, y, visible } = useMousePosition(siteCardRef);

  return (
    <div key={item.id} className="siteWrap">
      <a
        target="_blank"
        onClick={(e) => {
          if (!item.link) {
            e.preventDefault();
            toast.custom((t) => (
              <m.div
                initial={{ bottom: 0 }}
                animate={{ bottom: 100 }}
                transition={{ duration: 3 }}
                className={`${t.visible ? 'animate-enter' : 'animate-leave'} toaster`}
              >
                <p>
                  <RxCrossCircled /> Sorry, this link is not available
                </p>
              </m.div>
            ));
          }
        }}
        href={item.link}
        className="site"
      >
        <m.div ref={siteCardRef}
          animate={
            visible?{
            y: -y * 0.05,
            x: -x * 0.05,
          }:{
            y: 0,
            x: 0,
          }
        }
          className="image">
          <AnimatePresence>
            {visible && (
              <m.div
                className="customCursor"
                style={{
                  top: y,
                  left: x,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'tween',
                  duration: 0.3,
                }}
              >
                {item.link ? 'Click to visit Site' : 'Not available'}
              </m.div>
            )}
          </AnimatePresence>
          <img loading='lazy' src={item.image} alt={item.title} />
        </m.div>
        <h4>{item.title}</h4>
      </a>

      <a
        onClick={(e) => {
          if (!item.githubLink) {
            e.preventDefault();
            toast.custom((t) => (
              <m.div
                initial={{ bottom: 0 }}
                animate={{ bottom: 100 }}
                transition={{ duration: 3 }}
                className={`${t.visible ? 'animate-enter' : 'animate-leave'} toaster`}
              >
                <p>
                  <RxCrossCircled /> Sorry, no GitHub link available for this project
                </p>
              </m.div>
            ));
          }
        }}
        target="_blank"
        ref={gitRef}
        href={item.githubLink}
        className="githubLink"
      >
        <div className="githubLinkInner">
          {item.githubLink ? 'Check on GitHub' : 'Is not Open Source'}
        </div>
      </a>
    </div>
  );
};
