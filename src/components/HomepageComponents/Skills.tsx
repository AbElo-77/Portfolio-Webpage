import { useState, useCallback, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'
import styles from '../../styles/HomepageStyles/Skills.module.css';
import {skillsInformation} from '../../constant-data/skillsInformation';
import {projects} from '../../constant-data/projects'
import Canvas from '../Canvas'
import sunImage from '../../assets/sunny.png'
import LArrowImage from '../../assets/LArrow.png';
import RArrowImage from '../../assets/RArrow.png'
import cloudButton from '../../assets/cloud.png.png';


function Skills() {
  const initialOrder: string[] = ['Languages', "Frameworks", "Databases", "Tools"];
  const [currentID, setcurrentID] = useState(0);
  const [techStackOrder, setTechStackOrder] = useState(initialOrder);
  const SectionRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, offsetTop: 0, left: 0 });

  useEffect(() => {
    const element = SectionRef.current;
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

  const handleClick = useCallback((clickedItem: string) => {
    event?.stopPropagation();
    setTechStackOrder((prevOrder) => {
      const index = prevOrder.indexOf(clickedItem);
      const firstElement = prevOrder[0]; 
      const newOrder = [...prevOrder];
      newOrder[0] = clickedItem;
      newOrder[index] = firstElement;
      return newOrder;
    });
  }, []);

  const getClassFromIndex = (index: number) => {
    const classes = ['first', 'second', 'third', 'fourth'];
    return styles[classes[index]];
  };

  const handleButton = (id: number): void => {
    setcurrentID(id);
  } 


  const skillChart = skillsInformation.map((outerItem, outerIndex) => (
      currentID == outerItem.id && <div className={styles.overallContainer}>
      <a onClick={() => {handleButton(((currentID) > 0 ? currentID - 1 : 2) % 3)}}><img src={LArrowImage}></img></a>
      <div className={styles.skillsContainer}>
        <div className={styles[outerItem['Title'].substring(0,1)]}>
          <h2>{skillsInformation[outerIndex]['Title']}</h2>
          <div className={styles.techStack}>
            {techStackOrder.map((item, index) => (
              <p
                key={item}
                onClick={() => handleClick(item)}
                className={getClassFromIndex(index)}
              >
                <h3>{index < 1 && item}</h3>
                <div>
                {index < 2 ? 
                (outerItem[item as keyof typeof outerItem] as string[]).map((item) =>
                  <>
                    <img src={item}></img>
                  </>
                  
                ) : <>
                      <img src={(outerItem[item as keyof typeof outerItem] as string[])[0]}  className={styles.smallerImage}></img>
                    </> }
                </div>
            </p>
            ))}
          </div>
          <div className={styles.skillsDescription}>
            <div>
              {outerItem['Description']}
              <p>Here is a project I'm working on! →</p>
            </div>
            <div className={styles.imageContainer}>
              <Link to={`/projects/${projects[outerIndex]["Title"]}`}><img src={projects[outerIndex]['BackgroundImage']} className={styles.DesImage}></img></Link>
              <p className={styles.imageTitle} style={{backgroundColor: "#e0ff70b9"}}>{projects[outerIndex]['Title']}</p>
            </div>
          </div>
        </div>
      </div>
      <a onClick={() => {handleButton((currentID + 1) % 3)}}><img src={RArrowImage}></img></a>
      </div>
  ));

  return (
  <>
    <div ref={SectionRef} className={styles.thisPage}>
      <img src={sunImage}></img>
      <Canvas 
        width = {dimensions.width}
        height = {dimensions.height}
        offset = {0}
        cloudNum = {20}
      />
      <div className={styles.generalContainer}>
        <section className={styles.skillsSection}>
            <h1 className={styles.skillsHeader} id="portfolioStart">My Expertise</h1>
            {skillChart}      
        </section>
      </div>
      <div className={styles.sliderButton}>
        <ul>
          <img src={cloudButton} className={styles.firstButton} onClick={() => handleButton(0)} style={{opacity: currentID == 0 ? 1 : 0.7}}/>
          <img src={cloudButton} className={styles.secondButton} onClick={() => handleButton(1)} style={{opacity: currentID == 1 ? 1 : 0.7}}/>
          <img src={cloudButton} className={styles.thirdButton} onClick={() => handleButton(2)} style={{opacity: currentID == 2 ? 1 : 0.7}}/>
        </ul>
      </div>
    </div>
  </>
  )
}

export default Skills;
