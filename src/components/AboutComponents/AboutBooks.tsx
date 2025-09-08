import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Book } from "../../types/booksType";
import { academicBooks, literatureBooks } from "../../constant-data/books";
import styles from "../../styles/AboutStyles/AboutBooks.module.css";
import amazonImage from '../../assets/amazon.png'

function AboutBooks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [currentABook, setCurrentABook] = useState<Book>(academicBooks[0]);

    let firstBookCarousel = [...academicBooks, ...academicBooks]; 
    let secondBookCarousel = [...literatureBooks, ...literatureBooks]

    useLayoutEffect(() => {
        if (containerRef.current) {
            setScrollWidth(containerRef.current.scrollWidth / 2); 
           
        }
    }, []);

    return (
        <div className={styles.aboutBooks}>
            <div className={styles.carouselContainer}>
                <motion.div
                    ref={containerRef}
                    className={styles.bookCarousel}
                    animate={{ x: [0, -scrollWidth] }}
                    transition={{
                        ease: "linear",
                        duration: 100,
                        repeat: Infinity
                    }}
                >
                    {firstBookCarousel.map((book, i) => (
                        <div className={styles.bookItem} key={i}>
                            <img src={book["Image"]} 
                                 onClick={() => {setCurrentABook(book)}}
                                 style={{borderColor: currentABook == book ? 'yellow' : 'white'}}
                            
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
            <h1>{firstBookCarousel.indexOf(currentABook) >= 0 ? 'Academic Catalog' : 'Literature Catalog'}</h1>
            <div className={styles.bookDisplay} key={currentABook["PublishedDate"]} >
                    <div>
                        <img src={currentABook["Image"]} className={styles.bookImage}></img>
                    </div>
                    <div>
                        <h1>{currentABook["Title"]}</h1>
                        <p>{currentABook["Description"]}</p>
                        <div className={styles.bookDetails}>
                            <a href={currentABook["Amazon"]}><img src={amazonImage} className={styles.amazonButton}></img></a>
                            <span>Written by {currentABook["Author"]}</span>
                            <span>Published in {currentABook["PublishedDate"]}</span>

                        </div>
                    </div>
            </div>
            <motion.div
                    ref={containerRef}
                    className={styles.bookCarousel}
                    animate={{ x: [0, -scrollWidth] }}
                    transition={{
                        ease: "linear",
                        duration: 100,
                        repeat: Infinity
                    }}
                >
                    {secondBookCarousel.map((book, i) => (
                        <div className={styles.bookItem} key={i}>
                            <img src={book["Image"]} 
                                 onClick={() => {setCurrentABook(book)}}
                                 style={{borderColor: currentABook == book ? 'yellow' : 'white'}}
                            
                            />
                        </div>
                    ))}
                </motion.div>
        </div>
    );
}

export default AboutBooks;
