import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router";
import Canvas from '../components/Canvas'
import { projects } from '../constant-data/projects'
import styles from '../styles/ProjectsStyles/ProjectDocs.module.css'
import LArrow from '../assets/LArrow.png'
import RArrow from '../assets/RArrow.png'

function ProjectDocs() {
    const params = useParams();
    const curIndex = projects.findIndex((item) => item["Title"] === params.projectName);
    const curProject = projects[curIndex] || {};

    const maxSizer = Math.max(0, projects.length - 3);

    const [sizer, setSizer] = useState(() => {
        return Math.min(
            Math.max(0, curIndex - 1),
            maxSizer
        );
    });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
    }, []);
    
    return (
        <div className={styles.projectPage}>
            <Canvas 
                width={window.innerWidth}
                height={window.innerHeight}
                offset={0}
                cloudNum={10}
            />
            <nav className={styles.projectsNavigator}>
                <img 
                    src={LArrow} 
                    onClick={() => setSizer(prev => Math.max(0, prev - 1))} 
                />
                {projects
                    .slice(sizer, sizer + 3)
                    .map((item) => (
                        <Link 
                            key={item.Title}
                            to={`/projects/${item.Title}`} 
                            style={{ color: curIndex === projects.indexOf(item) ? 'yellow' : 'rgb(71, 144, 255)' }}
                        >
                            {item.Title}
                        </Link>
                    ))}
                <img 
                    src={RArrow} 
                    onClick={() => setSizer(prev => Math.min(maxSizer, prev + 1))} 
                />
            </nav>
            <h1>{curProject.Title}</h1>
            <span className={styles.projectInformation}>
                <p>
                    <label>Timeline</label>
                    {curProject.Timeline}
                </p>
                <p className={styles.techStack}>
                    <label>Tech Stack</label>
                    {curProject.Framework} - {Array.isArray(curProject.Languages)
                        ? curProject.Languages.join(' - ')
                        : ''}
                </p>
            </span>
        </div>
    )
}

export default ProjectDocs

