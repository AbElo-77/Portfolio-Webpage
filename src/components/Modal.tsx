import styles from '../styles/Modal.module.css'
import type { Project } from '../types/projectType'
import GitHubImage from '../assets/GithubLogo.png'

type ModalProps = {
    currentProject: Project | undefined
    dialogRef: React.RefObject<HTMLDialogElement | null>
}

function Modal({ currentProject, dialogRef }: ModalProps) {
    if (!currentProject || !dialogRef) return;
    

    return (
    <>
      {currentProject && <dialog className={styles.projectModal} ref={dialogRef}>
        <div>
           <img src={currentProject["BackgroundImage"]} className={styles.modalImage}></img>
           <h1>{currentProject["Title"]}</h1>
           <main className={styles.projectWriteUp}>
              {currentProject["WriteUp"]}
           </main>
           <div className={styles.techStackFooter}>
             <span>Languages: {currentProject["Languages"].reduce((prev, cur) => `${prev} - ${cur}`)}</span>
             <div>
              <span>Framework and Tools: {currentProject["Framework"] + " - " + currentProject["Tools"].reduce((prev, cur) => `${prev} - ${cur}`)}</span>
              <a href={currentProject["GitHub Docs"]}><img src={GitHubImage}></img></a> 
             </div>
           </div>
        </div>
      </dialog>}
    </>
    )
}

export default Modal