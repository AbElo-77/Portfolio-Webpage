import {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router'
import styles from '../../styles/ProjectsStyles/ProjectsHeader.module.css'

function ProjectsHeader() {
    const SectionRef = useRef<HTMLDivElement>(null)
      const [dimensions, setDimensions] = useState({ width: 0, height: 0, offsetTop: 0, left: 0 });
    
      useEffect(() => {
        const element = SectionRef.current;
        if (!element) return;
    
        const update = () => {
          const rect = element.getBoundingClientRect();
          setDimensions({
            width: rect.width,
            height: element.offsetHeight,
            offsetTop: rect.top + window.scrollY, 
            left: rect.left
          });
        };
    
        update();
    
        window.addEventListener('resize', update);
        window.addEventListener('scroll', update);
    
        return () => {
          window.removeEventListener('resize', update);
          window.removeEventListener('scroll', update);
        };
      }, []);

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