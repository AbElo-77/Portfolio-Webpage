import Navbar from '../components/HomepageComponents/Navbar'
import HeaderContent from '../components/HomepageComponents/HeaderContent'
import Skills from '../components/HomepageComponents/Skills'
import OnProjects from '../components/HomepageComponents/OnProjects'
import ContactFooter from '../components/ContactFooter'

import { useEffect } from 'react'

function HomePage() {

useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
  }, []);

    return (
    <>
        <Navbar />
        <HeaderContent />
        <Skills />
        <OnProjects /> 
        <ContactFooter />
    </>
    )
}

export default HomePage