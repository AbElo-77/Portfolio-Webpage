import { useState, useEffect } from 'react';
import SearchBar from './Searchbar'
import styles from '../../styles/HomepageStyles/HeaderContent.module.css';
import backgroundImage from '../../assets/WyoImage.jpg'
import myFace from '../../assets/myFace.png';
import { jobDescription } from '../../constant-data/descriptions';

function HeaderContent() {
const [visibility, setVisibility] = useState(1);

useEffect(() => {
    const timer = setInterval(() => {
        setVisibility(prev => prev === 1 ? 0 : 1);
    }, 750);
    return () => clearInterval(timer);
}, []);

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {}, 50);

    const handleTyping = () => {
      const currentText = jobDescription[index];

      if (isDeleting) {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          setText(currentText.substring(0, currentIndex - 1));
          timeout = setTimeout(handleTyping, 50);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % jobDescription.length);
          timeout = setTimeout(handleTyping, 25); 
        }
      } else {
        if (currentIndex < currentText.length) {
          setCurrentIndex(currentIndex + 1);
          setText(currentText.substring(0, currentIndex + 1));
          timeout = setTimeout(handleTyping, 50);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 30000); 
        }
      }
    };

    timeout = setTimeout(handleTyping, 50);

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting, index]);

    return (
        <div className={styles.headerBody}>
            <div className={styles.headerImage} 
                 style={{backgroundImage: `url(${backgroundImage})`, 
                        }}
              >
                <div>
                    <div className={styles.faceImage}>
                      <img src={myFace} alt="Abdalla Elokely" />
                    </div>
                    <h1>ABDALLA ELOKELY</h1>
                    <p><span className={styles.selfBuildingText}>{text}</span><span className={styles.carret} style={{opacity: visibility}}>|</span></p>
                    <SearchBar />
                </div>
                <div className={styles.buttons}>
                    <a href='#portfolioStart'>Go to Portfolio</a>
                </div>
            </div>
        </div>
    )
    
}




export default HeaderContent;