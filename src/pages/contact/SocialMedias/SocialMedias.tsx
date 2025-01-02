import './SocialMedias.scss'
import { motion as m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import metaFarid from './../../../components/img/metaFarid.png'
import gitbg from './../../../components/img/gitbg.png'
import linkedin from './../../../components/img/linkedin.jpg'
import instagram from './../../../components/img/instagram.jpg'
import X from './../../../components/img/X.jpg'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialMedias() {
  const contactref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: contactref,

  })

  const mainOpacity1 = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const mainOpacity2 = useTransform(scrollYProgress, [0.45, 1], [0, 1])
  const mainZIndex1 = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const mainZIndex2 = useTransform(scrollYProgress, [0.9, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 7])
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const socials = [
    {

      image: linkedin,
      scale: scale1,
      text: 'Linkedin'
    },
    {
      image: metaFarid,
      scale: scale2,
      text: 'Youtube'

    },
    {
      image: instagram,
      scale: scale3,
      text: 'Instagram'
    },
    {
      image: gitbg,
      scale: scale4,
      text: 'Github'
    },
    {
      image: X,
      scale: scale5,
      text: 'X'
    },
  ]

  const socialIcons = [
    {
      logo: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/faridmustafayev/',
    },
    {
      logo: <FaInstagram />,
      link: 'https://www.instagram.com/faridmsta/',
    },
    {
      logo: <FaYoutube />,
      link: 'https://www.youtube.com/@Faridmusta',
    },
    {
      logo: <FaGithub />,
      link: 'https://github.com/faridmsta',
    },
    {
      logo: <FaXTwitter />,
      link: 'https://x.com/faridmsta',
    },
  ]
  return (
    <div ref={contactref} className="socialMediasScroll">
      <div className="socialMediasFrame">
        <div className="socialMediaContainer">
          {socials.map((social, index) => (
            <m.div
              key={index}
              style={{
                scale: social.scale
              }}
              whileHover={{
                background: 'red'
              }}
              className="socialMediaWrapper">
              <div className="imageWrap">
                <div className="image">
                  <img src={social.image} alt="" />
                </div>
                <div className="image">
                  <h2>{social.text}</h2>
                </div>
              </div>
            </m.div>
          ))}
          <m.div
            style={{
              scale: scale
            }}

            className="socialMediaWrapperMiddle">
            <div className="imageWrapMiddle">
              <m.div
                style={{
                  opacity: mainOpacity1,
                  zIndex:mainZIndex1
                }}
                className="image">
                Contact Me
              </m.div>
              <m.div
                style={{
                  opacity: mainOpacity2,
                  zIndex:mainZIndex2
                }}
                className="image">
                <h3>Click To Visit</h3>
                <div className="socialMediasIcons">
                  {
                    socialIcons.map((item) => (
                      <a href={item.link} target='_blank'>
                        <div className="icon">
                          {item.logo}
                        </div>
                      </a>
                    ))
                  }
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  )
}

export default SocialMedias