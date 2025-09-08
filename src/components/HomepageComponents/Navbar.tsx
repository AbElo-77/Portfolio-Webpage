import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import styles from '../../styles/HomepageStyles/Navbar.module.css'

function Navbar() {
   const navvy = useRef<HTMLDivElement>(null);
   const navSec = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let navBar = navvy.current;
    let navv = navSec.current;
    const handleScroll = () => {
    if (window.scrollY > 100) {
      if (navv && navBar) {
        navv.classList.add(styles.isScrolledN)
        navBar.classList.add(styles.isScrolledB)
      }
    }
    else {
      if (navv && navBar) {
        navv.classList.remove(styles.isScrolledN)
        navBar.classList.remove(styles.isScrolledB)
      }
    }
  
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav ref={navvy} className={styles.navbar}>
        <div ref={navSec} className={styles.navContent}>
          <p>Abdalla Elokely</p>
          <ul className={styles.navLinks}>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to='/games'>Games</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
