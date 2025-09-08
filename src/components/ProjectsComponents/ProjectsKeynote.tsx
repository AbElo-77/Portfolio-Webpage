import { useState } from 'react';
import type { Project } from '../../types/projectType';
import { projects } from '../../constant-data/projects';
import styles from '../../styles/ProjectsStyles/ProjectsKeynote.module.css';

function ProjectsKeynote() {
    let [firstVideo, setfirstVideo] = useState<string>('');

    setfirstVideo("");


    const keynoteProjects =  projects.filter((item) => {
        return item["Major"];
    })
    const [curKeynote, setCurKeynote] = useState<Project>(keynoteProjects[0]);
   
    return (
        <>
            {firstVideo.length > 1 ?
                <div className={styles.keynoteSection}>
                    <h1>The Keynote</h1>
                    <p>The Keynote denotes the collection of my most major projects, each one signifying unqiue advancements in my understanding of computer science and its applications. The two keynotes for this academic year are the 'Molecular Modeler' and 'Compiler in C'.</p>
                    <div className={styles.keynoteProject}>
                        <h1>{curKeynote["Title"]}</h1>
                        <div><video src={''} controls={true}>Video documentation for keynotes coming September.</video></div>
                    </div>
                    <div className={styles.keynoteSelector}>
                        <button onClick={() => {setCurKeynote(keynoteProjects[0])}} 
                                style={{backgroundColor: curKeynote == keynoteProjects[0] ? 'rgba(255, 151, 250, 0.5)' : 'rgba(255, 255, 255, 0.5)' }}></button>
                        <button onClick={() => {setCurKeynote(keynoteProjects[1])}}
                                style={{backgroundColor: curKeynote == keynoteProjects[1] ? 'rgba(255, 151, 250, 0.5)' : 'rgba(255, 255, 255, 0.5)' }}></button>
                    </div>
                </div>
                : <div></div>
            }
        </>
    )
}

export default ProjectsKeynote