import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {projects} from '../../constant-data/projects'
import styles from '../../styles/ProjectsStyles/ProjectsList.module.css'


function ProjectsList() {
    const completes = ['Complete', 'Ongoing']
    const types = ['Web', 'Backend', 'ML'];
    const [completeFilter, setCompleteFilter] = useState<string>('');
    const [typeFilter, setTypeFilter] = useState<string>('');


    const handleClick = (index: number, curFilter: string) => {
    if (curFilter === 'complete') {
        setCompleteFilter(prev => prev === completes[index] ? '' : completes[index]);
    } else {
        setTypeFilter(prev => prev === types[index] ? '' : types[index]);
    }
    };


    useEffect(() => {
        console.log(typeFilter + completeFilter);
    }, [typeFilter, completeFilter]);

    return (
        <div className={styles.projectsList}>
            <div className={styles.projectsFilter}>
                <div className={styles.typeSelect}>
                    <button style={{color: typeFilter === 'Web' ? 'yellow' : 'white', transition: "color 0.3s ease"}} 
                            onClick={ () => {handleClick(0, "type")}}>Web Development</button>
                    <span> - </span>
                    <button style={{color: typeFilter === 'Backend' ? 'yellow' : 'white', transition: "color 0.3s ease"}}
                            onClick={() => {handleClick(1, "type")}}>Backend Engineering</button>
                    <span> - </span>
                    <button style={{color: typeFilter === 'ML' ? 'yellow' : 'white', transition: "color 0.3s ease"}} 
                            onClick={() => {handleClick(2, "type")}}> Machine Learning</button>
                </div>
                <div className={styles.completeSelect}>
                    <button onClick={() => {handleClick(0, 'complete')}}
                            style={{color: completeFilter === 'Complete' ? 'yellow' : 'white'}}>
                        Completed</button>
                    <span> - </span>
                    <button onClick={() => {handleClick(1, 'complete')}}
                            style={{color: completeFilter === 'Ongoing' ? 'yellow' : 'white'}}>
                         Ongoing </button>
                </div>
            </div>
            <div className={styles.projectsContainer}>
                {projects.filter(project => {
                    return (project["Complete"] == (completeFilter == 'Complete' ? true : false) || !completeFilter)
                            &&
                           (project["Type"] == typeFilter || !typeFilter)
                }).map((project, index) => (
                <>
                    <Link to={`/projects/${project["Title"]}`}>
                        <div key={index} className={styles.projectCard} style={{backgroundColor: project["Major"] ? 'rgba(255, 87, 233, 0.75)' : project["Complete"] ? 'rgba(196, 255, 141, 0.5)' : 'rgba(148, 162, 255, 0.6)' }}>
                        <h3>
                            {project["Title"]}
                            <br></br>
                            <span>{project["Type"]}</span>
                        </h3>
                        <span>{(project["Complete"] ? "Complete" : "Ongoing")}</span>
                        </div>
                    </Link>
                </>
                ))}
            </div>
        </div>
    )
}

export default ProjectsList