import GamesHeader from '../components/GamesComponents/GamesHeader'
import GamesContent from '../components/GamesComponents/GamesContent'
import ContactFooter from '../components/ContactFooter'


import { useEffect } from 'react';

function GamesPage() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
      }, []);

    return (
    <>
        <GamesHeader />
        <GamesContent />
        <ContactFooter />
    </>
    )
}

export default GamesPage