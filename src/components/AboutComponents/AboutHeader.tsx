import { Link } from 'react-router-dom'
import styles from '../../styles/AboutStyles/AboutHeader.module.css'

function AboutHeader() {

    return (
    <div>
        <nav className={styles.aboutNav}>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/games'>Games</Link>
        </nav>
        <div className={styles.aboutHeader}>
            <h1>About.</h1>
            <p>Please take a moment to explore my interests and ideals, within or beyond my academic foci, through the Book and Education Catalogs.</p>
        </div>
    </div>
    )
}

export default AboutHeader