import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { commonWords } from '../../constant-data/commonWords';
import Search, { type SearchResult } from '../../utility/searchAlgorithm';
import styles from '../../styles/HomepageStyles/SearchModal.module.css';
import XSymbol from '../../assets/XSymbol.png';
import MinusSymbol from '../../assets/MinusSymbol.png';
import microphoneicon from '../../assets/microphoneIcon.png';
import upArrow from '../../assets/upArrow.png';

type SearchMProps = {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  query: string;
};

export default function SearchModal({ dialogRef, query }: SearchMProps) {
  const [modalQuery, setModalQuery] = useState('');
  const [queriesMade, setQueriesMade] = useState<string[]>([]);
  const [queryResults, setQueryResults] = useState<SearchResult[][]>([]);
  const searchRef = useRef<HTMLFormElement>(null);

  const stopwordsSet = new Set(commonWords);

  useEffect(() => {
    if (dialogRef.current && !queriesMade.length) {
      const greeting = "Hi there! This search function has not realized its full potential. There will be an AI companion soon to assist with more detailed search results. For now, this algorithm will search for projects, games, and external links that best fit your query.";
      setQueriesMade([greeting]);
      setQueryResults([[]]); 
    }
  }, [dialogRef]);

  useEffect(() => {
    if (query.trim() && !queriesMade.includes(query)) {
      const timeoutId = setTimeout(() => {
        processQuery(query);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [query]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!modalQuery.trim()) return;
    processQuery(modalQuery);
    setModalQuery('');
  };

  const processQuery = (curQuery: string) => {
    if (queriesMade.includes(curQuery)) return;

    const tokens = curQuery
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(word => !stopwordsSet.has(word.toLowerCase()));

    const response = Search(tokens);

    setQueriesMade(prev => [...prev, curQuery]);
    setQueryResults(prev => [...prev, response]);
  };

  const closeModal = () => {
    dialogRef.current?.close();
    searchRef.current?.reset();
    setModalQuery('');
    setQueriesMade([]);
    setQueryResults([]);
  };

  const minimizeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog className={styles.searchModal} ref={dialogRef}>
      <nav className={styles.navElement}>
        <div>
          <button type="button" className={styles.minimizeButton} onClick={minimizeModal}>
            <img src={MinusSymbol} alt="Minimize" />
          </button>
          <button type="button" className={styles.exitButton} onClick={closeModal}>
            <img src={XSymbol} alt="Close" />
          </button>
        </div>
      </nav>

      <section className={styles.searchBody}>
        <div className={styles.queryResult}>
          {queriesMade.map((item, index) => (
            <div key={index}>
              <p className={styles.queryItem}>{item}</p>
              {queryResults[index]?.length ? <p className={styles.responseHeader}><i>These are the most relevant results: </i></p> : null}
              <br />
              {queryResults[index]?.length ? (
                queryResults[index].map((result, i) => {
                  const entry = result.item;

                  if (entry.type === "project") {
                    return (
                      <Link
                        key={i}
                        to={`/projects/${entry.Title!}`}
                        className={styles.resultLink}
                      >
                        {entry.Title}
                      </Link>
                    );
                  }

                  if (entry.type === "profile-link-social-media") {
                    return (
                      <a
                        key={i}
                        href={entry.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resultLink}
                      >
                        {entry.Name}
                      </a>
                    );
                  }

                  if (entry.type === "game-fun") {
                    return (
                      <p key={i} className={styles.resultLink}>
                        {entry.Title ?? "Unnamed Game"}
                      </p>
                    );
                  }

                  return null;
                })
              ) : (
                index !== 0 && (
                  <p style={{ color: 'white', fontFamily: 'Poppins', fontSize: '1.5rem', padding: 0, margin: 0 }}>
                    There are no matches for this query! Please try again.
                  </p>
                )
              )}
            </div>
          ))}
        </div>

        <div className={styles.searchBarContainer}>
          <form
            className={styles.searchBar}
            onSubmit={handleSubmit}
            ref={searchRef}
          >
            <button type="button" className={styles.microphoneButton}>
              <img src={microphoneicon} alt="Mic" />
            </button>
            <input
              type="text"
              value={modalQuery}
              placeholder="Search for specific projects, games, or tools..."
              onChange={handleSearch}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.submitButton}>
              <img src={upArrow} alt="Submit" />
            </button>
          </form>
        </div>
      </section>
    </dialog>
  );
}
