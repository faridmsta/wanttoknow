import { useState } from 'react'

import './ContactMe.scss'
import { Canvas } from '@react-three/fiber';
import { MailBoxModel } from '../../../components/mailBoxModel/MailBoxModel';
import { OrbitControls } from '@react-three/drei';
import toast from 'react-hot-toast';
import { motion as m } from 'framer-motion';

import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineDone } from "react-icons/md";
import emailValidation from '../../../validations/emailValidation';


function ContactMe() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "84a11761-b4bf-46bd-b936-cdc248aa409a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      console.log(data);
    } else {
      console.log("Error", data);
    }
  };


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (formData.name.trim().length == 0
      || formData.email.trim().length == 0
      || formData.message.trim().length == 0) {
      toast.custom((t) => (
        <m.div
          initial={{
            bottom: 0
          }}
          animate={{
            bottom: 100
          }}
          transition={{
            duration: 3
          }}
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } toaster`}
        >
          <p><RxCrossCircled /> Fill all inputs</p>
        </m.div>
      ))

      return;
    }
    if (!emailValidation(formData.email)) {
      toast.custom((t) => (
        <m.div
          initial={{
            bottom: 0
          }}
          animate={{
            bottom: 100
          }}
          transition={{
            duration: 3
          }}
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } toaster`}
        >
          <p><RxCrossCircled /> Input Real Email</p>
        </m.div>
      ))

      return;
    }




    toast.custom((t) => (
      <m.div
        initial={{
          bottom: 0
        }}
        animate={{
          bottom: 100
        }}
        transition={{
          duration: 3
        }}
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } toaster`}
      >
        <p><MdOutlineDone className='success' /> Success</p>
      </m.div>
    ))
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    await onSubmit(event)
  }

  return (
    <div className="contactMe">
      <div className="container">
        <div className="contactMeInner">
          <h3>Get in touch with me</h3>
          <div className="context">
            {window.innerWidth > 1024 &&
              <div className="left">
                <Canvas camera={{ position: [100, 50, 20] }} >
                  <OrbitControls enableZoom={false}  enablePan={false} />
                  <ambientLight intensity={3} />
                  <MailBoxModel />

                </Canvas>

              </div>
            }
            <div className="right">
              <form action="" onSubmit={handleSubmit} >
                <div className="inputLine">

                  <input
                    required type="text" name="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    placeholder='Name'

                  />
                </div>
                <div className="inputLine">

                  <input
                    required type="email" name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    placeholder='Email'

                  />
                </div>
                <div className="inputLine">

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                    }}
                    placeholder='Message'

                  />
                </div>
                <div className="inputLine">

                  <button type='submit'>Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe