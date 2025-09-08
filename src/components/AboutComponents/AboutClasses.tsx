import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/AboutStyles/AboutClasses.module.css";
import { csCourses, engMathCourses, apCourses } from "../../constant-data/courses";
import { csDescriptions, engMathDescriptions, apDescriptions } from "../../constant-data/courses";

type Class = [
    string[], 
    number
]


function AboutClasses() {
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const [topScrollWidth, setTopScrollWidth] = useState(0);
    const [bottomScrollWidth, setBottomScrollWidth] = useState(0);
    const [currentClass, setCurrentClass] = useState<Class>([csCourses, 0]);
    const [currentDescription, setCurrentDescription] = useState<Class>([csDescriptions, 0]);

    useEffect(() => {
        switch (currentClass[0]) {
            case csCourses: 
                setCurrentDescription(prev => [csDescriptions, prev[1]])
                break
            case engMathCourses:
                setCurrentDescription(prev => [engMathDescriptions, prev[1]])
                break
            case apCourses:
                setCurrentDescription(prev => [apDescriptions, prev[1]])
        }
    }, [currentClass])
    

    const topCarousel = [...csCourses, ...csCourses];
    const bottomCarousel = [...engMathCourses, ...apCourses, ...engMathCourses, ...apCourses];

    useLayoutEffect(() => {
        if (topRef.current) {
            setTopScrollWidth(topRef.current.scrollWidth / 2);
        }
        if (bottomRef.current) {
            setBottomScrollWidth(bottomRef.current.scrollWidth / 2);
        }
    }, []);

    return (
        <div className={styles.aboutCourses}>
            <h1>Education</h1>
            <p>A collection of the AP courses I've taken, along with my projected freshman courseload at University of Wyoming.</p>
            <div className={styles.currentClass} key={currentClass[0][currentClass[1]]}>
                <h2>{currentClass[0][currentClass[1]]}</h2>
                {currentDescription[0][currentClass[1]]}
            </div>
            <div className={styles.carouselContainer}>
                <motion.div
                    ref={topRef}
                    className={styles.courseCarousel}
                    animate={{ x: [0, -topScrollWidth] }}
                    transition={{
                        ease: "linear",
                        duration: 50,
                        repeat: Infinity
                    }}
                >
                    {topCarousel.map((course, i) => (
                        <div className={styles.courseItem} key={i} onClick={() => {setCurrentClass([csCourses, 
                        csCourses.indexOf(course)])}}
                        style={{borderColor: currentClass[0][currentClass[1]] == course ? 'yellow' : 'white'}}
                        >
                            {course}
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className={styles.carouselContainer}>
                <motion.div
                    ref={bottomRef}
                    className={styles.courseCarousel}
                    animate={{ x: [-bottomScrollWidth, 0] }}
                    transition={{
                        ease: "linear",
                        duration: 110,
                        repeat: Infinity
                    }}
                >
                    {bottomCarousel.map((course, i) => (
                        <div className={styles.courseItem} key={i} 
                        onClick={() => {setCurrentClass([engMathCourses.indexOf(course) >= 0 ? engMathCourses : apCourses, engMathCourses.indexOf(course) >= 0 ? engMathCourses.indexOf(course) : apCourses.indexOf(course)])}}
                        style={{borderColor: currentClass[0][currentClass[1]] == course ? 'yellow' : 'white'}}
                        >
                            {course}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default AboutClasses;

