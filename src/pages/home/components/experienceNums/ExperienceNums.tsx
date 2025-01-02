import NumberCounter from '../../../../components/numberCounter/numberCounter'
import './ExperienceNums.scss'

function ExperienceNums() {
    return (
        <section className="experienceNums">
            <div className="container">
                <div className="experiencenumsInner">
                    
                    <div className="exp">
                        <span>
                            {<NumberCounter from={0} to={30} speed={100} />}
                            +
                        </span>
                        <p>Projects</p>
                    </div>
                    <div className="exp">
                        <span>
                        {<NumberCounter from={0} to={1} speed={100} />}
                            +
                        </span>
                        <p>Year Experience</p>
                    </div>
                    <div className="exp">
                        <span>
                        {<NumberCounter from={0} to={40} speed={70} />}+
                        </span>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceNums