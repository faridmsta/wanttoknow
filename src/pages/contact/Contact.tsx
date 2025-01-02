import './Contact.scss'
import ContactMe from './ContactMe/ContactMe'
import SocialMedias from './SocialMedias/SocialMedias'


function Contact() {



  return (
    <section id='contact' className="contact">
      <SocialMedias />
      <ContactMe/>
    </section>
  )
}

export default Contact