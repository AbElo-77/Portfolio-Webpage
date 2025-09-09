import {useRef} from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/ProjectsStyles/ProjectsHeader.module.css'

function ProjectsHeader() {
    const SectionRef = useRef<HTMLDivElement>(null)

    return (
    <div ref={SectionRef} className={styles.headerPage}>
        <nav className={styles.projectsNav}>
            <Link to='/'>Home</Link>
            <Link to='/games'>Games</Link>
            <Link to='/about'>About</Link>
        </nav>
        <div className={styles.headerSection}>
            <h1>Projects.</h1>
            <span>Complete and ongoing projects encompassing an array of computer science fields, including Web Development, UI/X Design, Database Management, and ML Algorithms. </span>
        </div>
    </div>
    )
}

export default ProjectsHeader