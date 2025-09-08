import {useEffect, useRef, useState} from 'react'
import styles from '../styles/Modal.module.css'
import type { Project } from '../types/projectType'
import GitHubImage from '../assets/GithubLogo.png'

type ModalProps = {
    currentProject: Project | undefined
    dialogRef: React.RefObject<HTMLDialogElement | null>
}

function Modal({ currentProject, dialogRef }: ModalProps) {
    if (!currentProject || !dialogRef) return;
    

    const [dimensions, setDimensions] = useState({ width: 0, height: 0, offsetTop: 0, left: 0 });


      useEffect(() => {
    const element = dialogRef.current;
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