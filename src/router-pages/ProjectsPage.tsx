import ContactFooter from "../components/ContactFooter"
import ProjectsHeader from "../components/ProjectsComponents/ProjectsHeader"
import ProjectsList from "../components/ProjectsComponents/ProjectsList"

import { useEffect } from "react"

function ProjectsPage() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
      }, []);

    return (
        <div style={{background: "linear-gradient(#A1C4fd, rgba(216, 166, 255, 0.75))", margin: "0", padding: "0", minWidth: "0", minHeight: "0", height: '100%'}}>
            <ProjectsHeader />
            <ProjectsList />
            <ContactFooter />
        </div>
    )
}

export default ProjectsPage