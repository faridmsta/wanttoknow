import Contact from '../contact/Contact'
import Aboutme from './components/aboutme/Aboutme'
import ExperienceNums from './components/experienceNums/ExperienceNums'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import SkillsPage from './components/skillsPage/SkillsPage'

function Home() {
    return (
        <section className="home">
            <Intro />
            <SkillsPage />
            <Aboutme />
            <ExperienceNums />
            <Projects />
            <Contact />




        </section>
    )
}

export default Home