import {useState, useRef} from 'react'
import axios from 'axios';
import styles from '../styles/ContactFooter.module.css'
import { socialMedia } from '../constant-data/socialMedia';

interface SocialMediaImage {
    "Social": string, 
    URL: string, 
}

function ContactFooter() {
    let submitForm = useRef<HTMLFormElement>(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log({ name, email, message });
  try {
    const response = await axios.post(
      'https://php-backend-new.onrender.com',
      { name, email, message },
      { headers: { 'Content-Type': 'application/json' } }
    );
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
  reset();
};

const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
}


    let socialMediaImages = socialMedia.map((item: SocialMediaImage) => (

        <div><a href={item.URL} key={item.URL}><img src={item["Social"]} alt="" /></a></div>
    ));

    return (
<>
    <section className={styles.footerSection}>
        <footer className={styles.footerBody}>
            <h1>Contacts</h1>
            <div className={styles.personalContacts}>
                <p>abdallaelokely@gmail.com | 267-230-6761</p>
            </div>
            <div className={styles.footerForm}>
                <hr />
                <span>Leave a message here.</span>
                <form onSubmit={(e) => {handleSubmit(e)}} ref={submitForm} >
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required></input>
                    <br></br>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <textarea placeholder="What projects are you currently working on?" 
                              value={message} onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                    <span><button type="submit" className={styles.submitButton}>Submit</button></span>
                </form>
            </div>
        </footer>    
    </section>
    <div className={styles.socialMedia}>
            {socialMediaImages}
    </div>   
</>
    );
}

export default ContactFooter