import Contact from '../contact/Contact'
import Aboutme from './components/aboutme/Aboutme'
import ExperienceNums from './components/experienceNums/ExperienceNums'
// import Intro from './components/intro/Intro'
import Intropage from './components/IntroPage/Intropage'
import Projects from './components/projects/Projects'
import SkillsPage from './components/skillsPage/SkillsPage'

function Home() {
    return (
        <section className="home">
            <Intropage/>
            {/* <Intro /> */}
            <Aboutme />
            <ExperienceNums />
            <Projects />
            <SkillsPage />
            <Contact />




        </section>
    )
}

export default Home