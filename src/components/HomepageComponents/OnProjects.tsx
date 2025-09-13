import {useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types/projectType'
import {projects} from '../../constant-data/projects'
import Modal from '../Modal'
import styles from '../../styles/HomepageStyles/OnProjects.module.css'
import coverVideo from '../../assets/3129957-uhd_3840_2160_25fps.mp4'

function OnProjects() {
  const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined);
  const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {

    if (!currentProject) return;

    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
    dialogRef.current?.addEventListener('close', closeModal)
    

    return () => {
      dialogRef.current?.removeEventListener('close', closeModal)
    }
  }, [currentProject]);

  const closeModal = () =>{
    document.body.style.overflow = 'auto';
    dialogRef.current?.close();
    setCurrentProject(undefined);
  }

 const projectsList = projects.map(item => {
  if (!item["Complete"] && item["BackgroundImage"]) {
    return (
      <div className={styles.projectItem} onClick={() => {setCurrentProject(item)}}>
        <div className={styles.projectImage} style={{backgroundImage: `url(${item.BackgroundImage})`}}></div>
        <div className={styles.projectDes}>
          <header className={styles.itemTitle}>{item["Title" as keyof typeof item]}</header>
        </div>
      </div>
    );
  }
  return null;
});

    return (
      <>
        <div className={styles.projectSection}>
            <div className={styles.headingSection}>
                <div>
                  <h1>Ongoing <br></br> Projects</h1>
                  <p>Projects in varying stages of development, whether in UI/UX design, ML algorithms, or database management.
                     Although encompassing a wide range of applications and CS concepts, all of these are 
                     dynamic, scalable, and, most importantly, unique!
                  </p>
                  <Link to="/projects">View complete projects here!</Link>
                </div>
                <div>
                  <video src={coverVideo} autoPlay={true} loop={true}></video>
                </div>
            </div>
        </div>
        {currentProject && <div className={styles.backdropFilter}></div>}
        <Modal 
        currentProject={currentProject}
        dialogRef={dialogRef}
        />
        <div className={styles.projectGrid}>
             {...projectsList}
        </div>
      </>
    )
}

export default OnProjects
