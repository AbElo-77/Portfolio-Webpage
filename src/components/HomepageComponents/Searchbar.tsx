import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/HomepageStyles/Searchbar.module.css';
import SearchModal from './SearchModal';
import expandIcon from '../../assets/expandIcon.png';
import microphoneIcon from '../../assets/microphoneIcon.png'
import upArrow from '../../assets/upArrow.png'

function Searchbar() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); 
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    dialogRef.current?.close();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.addEventListener('close', closeModal);
    return () => dialog.removeEventListener('close', closeModal);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    let queryCopy = query;
    setSearchTerm(queryCopy); 
    setQuery('');         
    openModal();
  };

  return (
    <>
      <SearchModal dialogRef={dialogRef} query={searchTerm} />
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <button type="button" className={styles.expandButton} aria-label="Expand" onClick={openModal}>
          <img src={expandIcon}></img>
        </button>
        <button type="button" className={styles.microphoneButton} aria-label="Microphone">
          <img src={microphoneIcon}></img>
        </button>
        <input
          type="text"
          value={query}
          placeholder="Search for specific projects, games, or tools..."
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.submitButton} aria-label="Submit">
          <img src={upArrow}></img>
        </button>
      </form>
    </>
  );
}

export default Searchbar;
