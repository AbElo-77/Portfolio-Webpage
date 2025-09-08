import AboutHeader from '../components/AboutComponents/AboutHeader'
import AboutBooks from '../components/AboutComponents/AboutBooks'
import AboutClasses from '../components/AboutComponents/AboutClasses'
import ContactFooter from "../components/ContactFooter"

import { useEffect } from 'react'

function AboutPage() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
      }, []);

    return (
        <div style={{background: "linear-gradient(#A1C4fd, rgba(216, 166, 255, 0.75))", margin: "0", padding: "0", minWidth: "0", minHeight: "0", height: '100%'}}>
            <AboutHeader />
            <AboutBooks />
            <AboutClasses />
            <ContactFooter />
        </div>
    )
}

export default AboutPage