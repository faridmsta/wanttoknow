import './Projects.scss'
import { AnimatePresence, motion as m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import edoc from './sites/e-docsaztu.webp'
import adminpanel from './sites/adminpanel.webp'
import aeroclimaaz from './sites/aeroclimaaz.webp'
import bloggy from './sites/bloggy-me.webp'
import booking from './sites/booking.webp'
import boomerangCV from './sites/boomerangCv.webp'
import calendar from './sites/calendar.webp'
import educaste from './sites/educaste.webp'
import rpc from './sites/rpc.webp'
import starbucks from './sites/starbuks.webp'
import turboaz from './sites/turboaz.webp'
import unipage from './sites/unipage.webp'
import ecolink from './sites/ecolink.webp'
import calculatorExpo from './sites/calculatorExpo.webp'

import useMousePosition from '../../../../hooks/useMousePosition'
import toast from 'react-hot-toast'

import { RxCrossCircled } from "react-icons/rx";
import { TfiArrowTopRight } from "react-icons/tfi";

function Projects() {
  const projects = [
    {
      id: 1,
      image: edoc,
      title: "E-Docs Koica - AzTU",
      link: 'https://sso.aztu.edu.az/',
      githubLink: ''
    },
    {
      id: 1,
      image: aeroclimaaz,
      title: "Aeroclima.az",
      link: 'https://aeroclima.az/',
      githubLink: ''
    },
    {
      id: 2,
      image: boomerangCV,
      title: "Vacancy platform",
      link: '',
      githubLink: ''
    },
    {
      id: 3,
      image: starbucks,
      title: "Starbucks",
      link: 'https://starbucks-dusky.vercel.app/',
      githubLink: ''
    },
    {
      id: 4,
      image: adminpanel,
      title: "Admin Panel",
      link: 'https://adminpanel-black.vercel.app/',
      githubLink: 'https://github.com/faridmsta/adminpanel'
    },
    {
      id: 5,
      image: bloggy,
      title: "Blog site",
      link: '',
      githubLink: 'https://github.com/faridmsta/bloggyme'
    },
    {
      id: 6,
      image: unipage,
      title: "Uni page",
      link: 'https://site-for-university.vercel.app/',
      githubLink: ''
    },
    {
      id: 7,
      image: turboaz,
      title: "Turbo.az",
      link: 'https://fake-car-selling-site.vercel.app/',
      githubLink: ''
    },

    {
      id: 8,
      image: rpc,
      title: "Rpc",
      link: '',
      githubLink: ''
    },
    {
      id: 9,
      image: educaste,
      title: "Educaste",
      link: '',
      githubLink: ''
    },

    {
      id: 10,
      image: calendar,
      title: "Calendar",
      link: 'https://faridmsta.github.io/Calendar/',
      githubLink: ''
    },
    {
      id: 11,
      image: booking,
      title: "Booking",
      link: 'https://reservation-booking-black.vercel.app/',
      githubLink: ''
    },
    {
      id: 12,
      image: ecolink,
      title: "EcoLink App",
      link: '',
      githubLink: ''
    },
    {
      id: 13,
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
