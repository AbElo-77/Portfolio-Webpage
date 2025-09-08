import type {Book} from '../types/booksType.ts'
import BarberBook from '../assets/barberBook.jpg';
import CramerBook from '../assets/cramerBook.jpg';
import TanenbaumBook from '../assets/tanenbaumBook.jpg';
import PattersonBook from '../assets/pattersonBook.jpg';
import LevenspielBook from '../assets/levenspielBook.jpg';
import AtkinsBook from '../assets/atkinsBook.jpg';
import BerentenBook from '../assets/GruyterBook.jpg'
import UncutLeach from '../assets/UncutLeach.jpg'
import GehrkeBook from '../assets/GehrkeBook.jpg'
import DragonBook from '../assets/dragonBook.jpg';

import HamletCover from '../assets/hamlet.jpg';
import AntonyCleopatraCover from '../assets/antonyCleopatra.jpg';
import MuchAdoCover from '../assets/muchAdo.jpg';
import MerryWivesCover from '../assets/merryWives.jpg';
import CanterburyCover from '../assets/canterburyTales.jpg';
import ParadiseLostCover from '../assets/paradiseLost.jpg';
import PridePrejudiceCover from '../assets/pridePrejudice.jpg';
import TheirEyesCover from '../assets/theirGod.jpg';
import PeterRuggCover from '../assets/peterRugg.jpg';

export let academicBooks: Book[] = [
  {
    "Title": "Batabase Management Systems",
    "Description": "A clear, example-driven guide to designing, implementing, and managing efficient and reliable database systems, covering SQL, query optimization, transactions, and advanced topics.",
    "Amazon": "https://www.amazon.com/gp/product/0072465638",
    "Image": GehrkeBook,
    "Author": "Raghu Ramakrishnan and Johannes Gehrke",
    "PublishedDate": "2002"
  },
  {
    "Title": "Compilers: Principles, Techniques, and Tools",
    "Description": "A classic text on compiler construction, covering lexical analysis, parsing, semantic analysis, optimization, and code generation.",
    "Amazon": "https://www.amazon.com/Compilers-Principles-Techniques-Tools-2nd/dp/0321486811",
    "Image": DragonBook,
    "Author": "Alfred Aho and Jeffrey Ullman",
    "PublishedDate": "2006"
  },
  {
    "Title": "Bayesian Reasoning and Machine Learning",
    "Description": "An introduction to Bayesian methods for machine learning, with theory and practical algorithms.",
    "Amazon": "https://www.amazon.com/Bayesian-Reasoning-Machine-Learning-Barber/dp/0521518148",
    "Image": BarberBook,
    "Author": "David Barber",
    "PublishedDate": "2012"
  },
  {
    "Title": "Modern Operating Systems",
    "Description": "Detailed coverage of operating system concepts including processes, memory management, file systems, and security.",
    "Amazon": "https://www.amazon.com/Modern-Operating-Systems-Andrew-Tanenbaum/dp/013359162X/",
    "Image": TanenbaumBook,
    "Author": "Andrew S. Tanenbaum and Herbert Bos",
    "PublishedDate": "2014"
  },
  {
    "Title": "Computer Organization and Design",
    "Description": "A foundational text covering the architecture and organization of computer systems using MIPS as the example architecture.",
    "Amazon": "https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0128201096/",
    "Image": PattersonBook,
    "Author": "David A. Patterson and John L. Hennessy",
    "PublishedDate": "2020"
  },
  {
    "Title": "Chemical Reaction Engineering",
    "Description": "A widely-used reference for chemical reaction engineering principles, reactor design, and kinetics.",
    "Amazon": "https://www.amazon.com/Chemical-Reaction-Engineering-Octave-Levenspiel/dp/047125424X",
    "Image": LevenspielBook,
    "Author": "Octave Levenspiel",
    "PublishedDate": "1998"
  },
  {
    "Title": "Essentials of Computational Chemistry",
    "Description": "Covers theoretical foundations and computational methods for chemistry, including quantum chemistry and molecular mechanics.",
    "Amazon": "https://www.amazon.com/Essentials-Computational-Chemistry-Theories-Models/dp/0470091827",
    "Image": CramerBook,
    "Author": "Christopher J. Cramer",
    "PublishedDate": "2013"
  },
  {
    "Title": "Molecular Modelling: Principles and Applications",
    "Description": "An introduction to molecular modeling techniques and their applications in chemistry and biology.",
    "Amazon": "https://www.amazon.com/Molecular-Modelling-Principles-Applications-2nd/dp/0582382106",
    "Image": UncutLeach,
    "Author": "Andrew R. Leach",
    "PublishedDate": "2001"
  },
  {
    "Title": "Molecular Quantum Mechanics",
    "Description": "Explores quantum theory applied to molecular systems, including spectroscopy and chemical bonding.",
    "Amazon": "https://www.amazon.com/Molecular-Quantum-Mechanics-Peter-Atkins/dp/0199541426",
    "Image": AtkinsBook,
    "Author": "Peter Atkins and Ronald Friedman",
    "PublishedDate": "2009"
  },
  {
    "Title": "Data Science for Chemistry",
    "Description": "Introduces data science methods and machine learning in the context of chemistry and chemometrics.",
    "Amazon": "https://www.amazon.com/Data-Science-Chemistry-Intelligence-Chemometrics-ebook/dp/B08MYPMXCH",
    "Image": BerentenBook,
    "Author": "Thorstein Gressling",
    "PublishedDate": "2020"
  }
];

export let literatureBooks: Book[] = [
  {
    "Title": "Hamlet",
    "Description": "A Shakespearean tragedy about Prince Hamlet’s quest for revenge against his uncle, who has murdered his father, the King of Denmark.",
    "Amazon": "https://www.amazon.com/Hamlet-Thrift-Editions-William-Shakespeare/dp/0486272788/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.-EFOJS-Cf3fuy5U8o3B-1D4fU9z1XDygpFqzKZhOP20-uzvxNA0cRZy7ppp2Ei40O9h7YW4aEU02794wHDBaDo70VZvcXnd7PgTJfC9tsp5cADnn1k_yJfvKsqK1AFya-e2gPDoaRXZigYS0n1V09l9wpxxl1uy7jhF9M6FTkLsPIebpy2oUNwm_mIjx4RIdBzSzM2mTSIJj--y40UshE8OSfSoHs8Rpfb9AtqIR_JI.Edz3B09nVXf6IjCzAOZQgXdpOcBfxs_LoaA2rNFL3ao&dib_tag=se&keywords=Shakespeare%27s+Hamlet&qid=1755186121&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    "Image": HamletCover,
    "Author": "William Shakespeare",
    "PublishedDate": "1603"
  },
  {
    "Title": "Antony and Cleopatra",
    "Description": "A Shakespearean tragedy portraying the doomed romance between Roman general Mark Antony and Egyptian queen Cleopatra.",
    "Amazon": "https://www.amazon.com/Antony-Cleopatra-William-Shakespeare/dp/0553212893",
    "Image": AntonyCleopatraCover,
    "Author": "William Shakespeare",
    "PublishedDate": "1607"
  },
  {
    "Title": "Much Ado About Nothing",
    "Description": "A comedic play by Shakespeare featuring witty banter, mistaken identities, and the trials of love.",
    "Amazon": "https://www.amazon.com/Much-About-Nothing-William-Shakespeare/dp/B09JRLL4LR/ref=sr_1_1_sspa?crid=946NN92C24FY&dib=eyJ2IjoiMSJ9.NhSBUoZ0HZL3ublOZoxe8QmkXNGrS6LSTZewZn6GggfuI-gX0ZZJBjGeZRujIyvaqYaq76b4YwkJoUok-6ny5aUvLFwTInNy8f14WIVmX8kPtOCvn__JmyHljQMkRfYj7x6ZU2E1-Y6c_uXBq8KOfq68HVwojooogSbAu4533O0ckvBV4cWpxZ2O0ZkenugpUV2h0DLL8aUDyzUWMmaTzZ0SrOhTKcgpfMXXFNzgUVU.JAB9-1XpNHwua_PlY2UkoESYjnkj8r_tfh-eKhfY5jk&dib_tag=se&keywords=much+ado+about+nothing&qid=1755186198&s=books&sprefix=Much+Ado%2Cstripbooks%2C142&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    "Image": MuchAdoCover,
    "Author": "William Shakespeare",
    "PublishedDate": "1598"
  },
  {
    "Title": "The Merry Wives of Windsor",
    "Description": "A lighthearted Shakespearean comedy centered on the humorous misadventures of Sir John Falstaff.",
    "Amazon": "https://www.amazon.com/Merry-Wives-Windsor-William-Shakespeare/dp/B0BCD9TMSH/ref=sr_1_2_sspa?crid=R1OMQFXW6YC6&dib=eyJ2IjoiMSJ9.Tv7BSz77DTWOHCEMsUxYctLpWJ-6JSXtFsy1qq2Vc2gO8Jn7r5MrPP0tozNvtEPfqi-cgBo74CjyvIM97T_R1T4XSqOkSItaQfl0H1rBn8X_KX8KyC0cwGx0QlBZY04CDcItaPsbWurtS0SRgk-9qrSh_l2O_v_podx_4TfjDyKs4M_Uk52OyqO4D8AIzisF97lAWNY_tNLy7vCJMciJaxLWnKXrQuP1-R8VeJZ8yIk.5FLUAFe7f2xQwoBYUu_NNkrcsTRfqV7-xx0To07FTm4&dib_tag=se&keywords=merry+wives+of+windsor&qid=1755187073&s=books&sprefix=merry+wives%2Cstripbooks%2C160&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    "Image": MerryWivesCover,
    "Author": "William Shakespeare",
    "PublishedDate": "1602"
  },
  {
    "Title": "The Canterbury Tales",
    "Description": "A collection of stories told by pilgrims on their way to Canterbury, written in Middle English verse.",
    "Amazon": "https://www.amazon.com/Canterbury-Tales-Geoffrey-Chaucer/dp/0140424385/ref=sr_1_2?crid=2547FEWL2F0NG&dib=eyJ2IjoiMSJ9.k-uzQ-vc6WmyA8EtI0xsLT2LoQBJ1OE9xKA_cG36m7fxZZZ5rHoc1BT3I--pIcp3deYnckqUHewehJDTTJfs1tfmP_mQacHb1yHYNHVUzmrfutIBWBopCAHMk8W_VYcl2Kj0kZBMzckLkznAxwRyjd7_JzHlMqSu0swxnW9LRSfMMmMH0c8KE58eaoqp_z4Rtk618kudQBpT0HGD-PgqEeOsvYdiBUPbTAppuqutW2RPXL4WGGiWKYbb9EcOfpb88kKYLjfxhWL1h9NTRPi2u3wvlD9L84d6VmS95H7BgMI.aVWs7T07DkTJ4fR3rGl1k6yRuNO3JefHQkBg_ttWozU&dib_tag=se&keywords=the+canterbury+tales&qid=1755187124&s=books&sprefix=teh+canterbury+ta%2Cstripbooks%2C131&sr=1-2",
    "Image": CanterburyCover,
    "Author": "Geoffrey Chaucer",
    "PublishedDate": "1400"
  },
  {
    "Title": "Paradise Lost",
    "Description": "An epic poem exploring the biblical story of the Fall of Man, with Satan as a central character.",
    "Amazon": "https://www.amazon.com/Paradise-Lost-Penguin-Classics-Milton/dp/0140424393/ref=sr_1_2?crid=39X2M392E4GC9&dib=eyJ2IjoiMSJ9.zlQmaguW9gLwnAcVxeDb4FxOrPwZkC3AEpmDY3sUab7r2zkN6Duz4Wq9TSbyem2Zy5YGEPzRaKtx19qhhigf0eRu1_W4TNplDZULONpVeb_nWCSghnqmCUiY4jL16GSkT1GkAItyXwtz1YRZcan8lH1eK1TiMUk9AjCuFRQ2QgpOQ-CAUNGLaGBvdIw008R6Zms5eEw2VlGcDxCJPfrj8Ez0OYr6-HgcCqOU0BBbEOQWMnwmI0-_CEJLVhlxvApZKHKarNYbaWROIOrVD0jSPdjesz6RgFkqFyIsO9a7Ijs.R0LXrmDBmHNhCCV9f75ey882k5JlawngjPTFonj6fzM&dib_tag=se&keywords=paradise+lost&qid=1755187146&s=books&sprefix=paradis%2Cstripbooks%2C149&sr=1-2",
    "Image": ParadiseLostCover,
    "Author": "John Milton",
    "PublishedDate": "1667"
  },
  {
    "Title": "Pride and Prejudice",
    "Description": "A romantic novel about manners, love, and social standing in early 19th-century England.",
    "Amazon": "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/0141439513/ref=sr_1_2?crid=VB0IWZE5JGIC&dib=eyJ2IjoiMSJ9.NbgJ0Mtf0sRt5pV_URcUqOI8ghzTaObAuqqMhu-SqDcurTMA62tlS_AMq1SYdusumKOT1fUjGDCgZKGeD91VUHP0xpItsdp194VizyBP66oOQ4NPyccg-nTUGC_7nUjWXAGB07MW_v1LKkk6pT1tZqVkBvVb1W67kk4ubU2CrE8qBfH4ELEU7hZsQnMCrPcsVTkcZgV_-kmkQukJ-RsqWPK8ab3ytYKpp0TXaeMGZ_M.OCKQmwxtzf7H6aDW7Rd_fzkUXx4VJLXTBRJ9xrXb4Hg&dib_tag=se&keywords=pride+and+prejudice&qid=1755187216&s=books&sprefix=pride+and+%2Cstripbooks%2C144&sr=1-2",
    "Image": PridePrejudiceCover,
    "Author": "Jane Austen",
    "PublishedDate": "1813"
  },
  {
    "Title": "Their Eyes Were Watching God",
    "Description": "A landmark novel in African-American literature, following Janie Crawford’s search for love and identity.",
    "Amazon": "https://www.amazon.com/Their-Eyes-Were-Watching-God/dp/0061120065/ref=sr_1_1?crid=ZAEXVNBVYJ2D&dib=eyJ2IjoiMSJ9.i6xzLT4vJy3hMdofi7Pf258VGtf0URb5rCtblLftkKLfb2nC1XIli3W6Qxo4Djn0k2PC6I7Ykgsd8oq1B7VWqSoQ6x5Q-ADpdIF8xXZRJBumknSvjJalnzrTE5aTfYqANfzVYKsSDIjGG0PXb2vlD4VdSsv9-9NlYFEMbvqUvUPGg886NXfh5sd7N9hjMV-yAev3FkZcjIBYdbUTDQx8Mdm5YL64NamxBx7MwFd2C-o.nMGxDVSMFXhvdu5df0brjmUWKAXOIr-QYcAl3-kaP5k&dib_tag=se&keywords=their+eyes+were+watching+god&qid=1755187254&s=books&sprefix=their+e%2Cstripbooks%2C141&sr=1-1",
    "Image": TheirEyesCover,
    "Author": "Zora Neale Hurston",
    "PublishedDate": "1937"
  },
  {
    "Title": "Peter Rugg: The Missing Man",
    "Description": "A New England legend about a man doomed to wander forever after refusing shelter from a storm.",
    "Amazon": "https://www.amazon.com/Oxford-Book-American-Short-Stories/dp/0195070658/ref=sr_1_2?crid=2CPNWYFQ2DPWG&dib=eyJ2IjoiMSJ9.d_wVZCKxGYrYBbdjwqid5dC36xBmwOxSlfYBPHzytlrGjHj071QN20LucGBJIEps.Dn0ClO1INF-iLsTUfMF0-Ao4nsXFwbNaoVGOtcUbjSM&dib_tag=se&keywords=peter+rugg+the+missing+man&qid=1755187304&s=books&sprefix=peter+rugg+the+missing+man%2Cstripbooks%2C141&sr=1-2-catcorr",
    "Image": PeterRuggCover,
    "Author": "William Austin",
    "PublishedDate": "1824"
  },
  {
    "Title": "Rip Van Winkle",
    "Description": "A short story about a man who falls asleep in the Catskill Mountains and wakes up decades later to find the world changed.",
    "Amazon": "https://www.amazon.com/Oxford-Book-American-Short-Stories/dp/0195070658/ref=sr_1_2?crid=2CPNWYFQ2DPWG&dib=eyJ2IjoiMSJ9.d_wVZCKxGYrYBbdjwqid5dC36xBmwOxSlfYBPHzytlrGjHj071QN20LucGBJIEps.Dn0ClO1INF-iLsTUfMF0-Ao4nsXFwbNaoVGOtcUbjSM&dib_tag=se&keywords=peter+rugg+the+missing+man&qid=1755187304&s=books&sprefix=peter+rugg+the+missing+man%2Cstripbooks%2C141&sr=1-2-catcorr",
    "Image": PeterRuggCover,
    "Author": "Washington Irving",
    "PublishedDate": "1819"
  }
];

