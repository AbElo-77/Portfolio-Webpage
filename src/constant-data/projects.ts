import type { Project } from '../types/projectType'
import chessImage from '../assets/chess.jpg'
import pageImage from '../assets/portfolioImage.png'
import stocksImage from '../assets/stocks.webp'
import molecularImage from '../assets/molecule.png'

export let projects: Project[] = [
    {
        "Title": "Portfolio Page",
        "Languages": ["HTML5", "CSS3", "Javascript", "Typescript", "PHP"],
        "Framework": "React",
        "Tools": ["FullPage.js",],
        "Timeline": "July - August 2025",
        "BackgroundImage": pageImage,
        "WriteUp": "A responsive portfolio built with React and TypeScript to showcase my projects, skills, and experience. It includes a blog section with project write-ups, along with a dynamic projects gallery. Ultimately, the portfolio serves as both a professional showcase and a living sandbox for experimenting with new technologies.",
        "Complete": true,
        "Major": false,
        "Type": "Web",
        "GitHub Docs": "https://github.com/AbElo-77/Portfolio-Webpage.git",
        "Keywords": [
            "portfolio", "web development", "frontend", "React", "TypeScript", "JavaScript", 
            "HTML5", "CSS3", "responsive design", "UI/UX", "dynamic projects gallery", 
            "single-page application", "routing", "modular code", "PHP backend", "blog system", 
            "component-based design", "state management", "hooks", "form handling", 
            "API integration", "animations", "SEO optimization", "accessibility", 
            "mobile-first design", "deployment", "GitHub Pages", "Netlify", "Vercel", 
            "cross-browser compatibility", "code maintainability", "scalability", 
            "reusable components", "performance optimization", "testing", "Jest", 
            "CI/CD", "modern JavaScript", "asynchronous programming"
        ], 
        Markdown: `## Portfolio Webpage  
        
                        ## Overview  
                            The **Portfolio Webpage** is a responsive, modern, and fully customizable website built using **React** and **TypeScript**. It serves as both a **professional showcase** of my projects, skills, and education, and a **technical demonstration** of my growing frontend development abilities.  
        
                            This portfolio highlights my journey as a **Chemical Engineering and Computer Science dual-degree student** at the **University of Wyoming**, combining analytical problem-solving with clean software design. It’s the centerpiece of my online presence — designed for scalability, readability, and maintainability, while reflecting my professional brand.
        
                            ---
        
                        ## Tech Stack  
        
                        | Category | Technology |
                        |-----------|-------------|
                        | **Frontend Framework** | React + TypeScript |
                        | **Styling** | Tailwind CSS |
                        | **Routing** | React Router |
                        | **Deployment** | GitHub Pages (future: custom .com domain) |
                        | **Version Control** | Git + GitHub |
                        | **Design Tools** | Figma (for layout and visual mockups) |
        
                        ---
        
                        ## Project Goals  
        
                        1. **Personal Branding** – Build a professional online hub showcasing my technical and academic portfolio.  
                        2. **Frontend Mastery** – Strengthen proficiency in **React**, **TypeScript**, and component-driven design.  
                        3. **Performance & Accessibility** – Optimize for fast load times, SEO, and full accessibility compliance.  
                        4. **Scalability** – Support dynamic project listings, blogs, and new sections as my portfolio grows.  
                        5. **Deployment** – Launch with GitHub Pages and later connect to a **custom domain**.  
        
                        ---
        
                        ## Core Features  
        
                        ### Home  
                        - Hero section introducing my background and technical interests.  
                        - Smooth navigation to other sections (Projects, Skills, Contact).  
                        - Responsive layout and minimal design aesthetic.  
        
                        ### Projects  
                        - Displays all major software and engineering projects.  
                        - Each project card features:  
                        - Title and description  
                        - Technologies used  
                        - GitHub and live demo links  
                        - Visual preview or screenshot  
                        - Organized by category (React/JS, Python, Engineering, etc.).  
        
                        ### Skills  
                        - Highlights my technical stack and engineering toolkit:  
                        - **Programming:** Python, C, C++, JavaScript, TypeScript, SQL, etc.
                        - **Frameworks & Tools:** React, Node.js, pandas, NumPy, etc.
                        - **Engineering:** MATLAB, Aspen Plus, process modeling tools  
                        - May in the future, include interactive charts or progress bars.  
        
                        ### Education & Experience  
                        - Summarizes my academic progress and coursework:  
                        - Data Structures, Computer Organization, Discrete Structures  
                        - Differential Equations, Linear Algebra, Calculus III  
                        - Chemical Process Analysis and Scientific Computing  
                        - Includes plans for internships and future industry experience.  
        
                        ### Blog / Write-ups  
                        - Each project includes a corresponding markdown write-up.  
                        - Write-ups discuss algorithmic design, implementation, and lessons learned.  
                        - Blog section supports future long-form technical content.  
        
                        ### Contact  
                        - Contact form integrated with **PHP** backend API.  
                        - Direct links to my GitHub and LinkedIn profiles.  
        
                        ---
        
                        ## Folder Structure  

                        Portfolio-Webpage/
                        │
                        ├── public/               
                        ├── src/
                        │   ├── assets/           
                        │   ├── components/       
                        │   ├── pages/            
                        │   ├── data/             
                        │   ├── styles/           
                        │   ├── hooks/            
                        │   ├── App.tsx
                        │   └── main.tsx
                        │
                        ├── package.json
                        ├── tailwind.config.js
                        ├── tsconfig.json
                        └── README.md
                        
                        ## Design and Development 
        
                        - Design & Setup	Project foundation	Planned layout, typography, and color scheme. Initialized React + TypeScript project with Tailwind.
                        - Component Building	Modular UI	Built reusable, composable components (Navbar, ProjectCard, Footer).
                        - Dynamic Data Integration	JSON-driven content	Added structured data for projects and skills.
                        - SEO & Optimization	Performance tuning	Lazy-loaded images, minimized assets, and optimized metadata.
                        - Deployment	GitHub Pages	Continuous integration with GitHub and preparation for a .com domain.
        
                        ## Performance Highlights
        
                        - Responsive across all devices and resolutions.
                        - Accessible with semantic HTML and ARIA attributes.
                        - Optimized with Tailwind’s JIT compilation and asset minification.
                        - SEO-ready with meta descriptions, structured data, and page titles.
        
                        ## Future Enhancements
        
                        - Add dark/light mode toggle with user preference persistence.
        
                        - Introduce 3D or interactive visualizations (using Three.js).
        
                        - Implement a custom backend for the blog and analytics.
        
                        - Integrate a visitor dashboard (view counts, country stats).
        
                        - Add i18n (internationalization) for multilingual support.
        
                        ## Author
        
                        - Name: AbElo
                        - GitHub: github.com/AbElo-77
                        - Email: abdallaelokely@gmail.com
        `
    },
    {
        "Title": "Abdalla Bot",
        "Languages": ["Python", "SQL"],
        "Modules": ['Request', 'AsynchIO','SciPy', 'Pandas'],
        "Framework": "Flask",
        "Tools": ["PyCharm", "MySQL",],
        "Timeline": "August - September 2025",
        "BackgroundImage": chessImage,
        "WriteUp": "Developed with Python, SQL, and specialized chess libraries, this project employs multi-modal machine learning models trained on my personal game data to emulate my playing style and create adaptive, lifelike AI opponents.",
        "Complete": false,
        "Major": false, 
        "Type": "ML",
        "GitHub Docs": "https://github.com/AbElo-77/Python-Chess?tab=readme-ov-file",
        "Keywords": [
            "Python", "SQL", "machine learning", "AI", "Flask", "REST API", "Pandas", 
            "SciPy", "async programming", "AsynchIO", "requests library", "data pipelines", 
            "MySQL", "PyCharm", "neural networks", "reinforcement learning", 
            "chess AI", "game modeling", "training data", "predictive modeling", 
            "pattern recognition", "feature engineering", "evaluation metrics", 
            "Python scripting", "statistical analysis", "probability", "decision making", 
            "search algorithms", "minimax", "Monte Carlo Tree Search", "deployment", 
            "model serialization", "TensorFlow", "PyTorch", "automation", 
            "backtesting", "strategic gameplay", "adaptive systems", "simulation"
        ]
    },
    {
        "Title": "Jr. Stock Analyst",
        "Languages": ["Java", "SQL"],
        "Framework": "Spring Boot", 
        "Tools": ["Maven", "PostgreSQL"],
        "Timeline": "August - December 2025",
        "BackgroundImage":  stocksImage,
        "WriteUp": "Built in Java with PostgreSQL and supporting data-processing tools, this system trains predictive models on historical market data to detect patterns and forecast potential price movements for informed decision-making.",
        "Complete": false,
        "Major": false,
        "Type": "Backend",
        "GitHub Docs": "https://github.com/AbElo-77/Stock-Analyst-Jr.git",
        "Keywords": [
            "Java", "Spring Boot", "backend", "REST API", "Maven", "SQL", "PostgreSQL", 
            "database design", "data pipelines", "data modeling", "data science", 
            "predictive analytics", "machine learning", "time series", "financial data", 
            "market forecasting", "feature engineering", "ETL", "big data", 
            "algorithm design", "data visualization", "trading systems", "stock analysis", 
            "financial modeling", "deployment", "Docker", "CI/CD", "object-oriented programming", 
            "multithreading", "error handling", "JDBC", "Hibernate", "API endpoints", 
            "scalability", "system architecture", "data integrity", "testing", "JUnit", 
            "logging", "real-time analysis"
        ]
     }, 
     {
        "Title": "Molecular Modeler", 
        "Languages": ["Python", "C++"],
        "Framework": "PyQt5",
        "Tools": ["Qt Designer", "Git"],
        "Timeline": "January - March 2026",
        "BackgroundImage": molecularImage,
        "WriteUp": "Developed a molecular modeling application using Python and C++ with a PyQt5 GUI, enabling users to visualize and manipulate 3D molecular structures. This project showcases my skills in scientific computing and software development.",
        "Complete": false,
        "Major": true,
        "Type": "ML",
        "GitHub Docs": "https://github.com/AbElo-77/Molecular-Modeler.git",
        "Keywords": [
            "Python", "C++", "PyQt5", "Qt Designer", "scientific computing", 
            "molecular modeling", "3D visualization", "GUI development", "OpenGL", 
            "data visualization", "chemistry", "bioinformatics", "simulation", 
            "geometry", "computational modeling", "linear algebra", "matrix operations", 
            "numerical methods", "object-oriented design", "performance optimization", 
            "cross-platform development", "event-driven programming", "user interface", 
            "interaction design", "Git", "version control", "debugging", 
            "scientific visualization", "vector math", "chemical bonds", 
            "structure manipulation", "simulation tools", "data export", 
            "software engineering", "multi-language integration", 
            "Python-C++ bindings", "scientific algorithms", "research computing"
        ]
     },
     {
        "Title": "Compiler in C", 
        "Languages": ["C", "Lex", "Yacc"],
        "Framework": "GNU Compiler Collection",
        "Tools": ["GCC", "Makefile"],
        "Timeline": "September - March 2026",
        "BackgroundImage": "",
        "WriteUp": "This project implements a custom compiler for a simplified programming language, utilizing C, Lex, and Yacc to create a lexer, parser, and code generator. It serves as a practical exploration of compiler design principles.",
        "Complete": false,
        "Major": true,
        "Type": "Backend",
        "GitHub Docs": "https://github.com/AbElo-77/Compiler-in-C.git",
        "Keywords": [
            "C programming", "Lex", "Yacc", "compiler design", "parsing", 
            "lexical analysis", "syntax analysis", "code generation", "GCC", 
            "Makefile", "assembly", "tokenization", "context-free grammar", 
            "language design", "AST (abstract syntax tree)", "semantic analysis", 
            "intermediate code", "runtime environment", "linking", "error handling", 
            "debugging", "optimization", "memory management", "symbol tables", 
            "recursive descent parsing", "shift-reduce parsing", "regular expressions", 
            "formal languages", "compiler theory", "modular design", "low-level programming", 
            "systems programming", "C libraries", "unit testing", "build automation", 
            "source-to-source translation", "static analysis", "language implementation"
        ]
     }, 
     {
        "Title": "2D Platformer", 
        "Languages": ["C++", "SDL"],
        "Framework": "SDL2",   
        "Tools": ["Visual Studio", "Git"],
        "Timeline": "January - March 2026",
        "BackgroundImage": "",
        "WriteUp": "Developed a 2D platformer game using C++ and SDL2, featuring sprite animations, collision detection, and a level editor. This project showcases my skills in game development and software engineering.",
        "Complete": false,
        "Major": false,
        "Type": "Web",
        "GitHub Docs": "",
        "Keywords": [
            "C++", "SDL2", "game development", "2D graphics", "sprite animation", 
            "collision detection", "level editor", "Visual Studio", "Git", "OOP", 
            "game physics", "event handling", "input handling", "rendering", 
            "performance optimization", "game loop", "tile-based maps", "audio integration", 
            "game engine", "AI behaviors", "NPCs", "pathfinding", "game assets", 
            "resource management", "debugging", "profiling", "cross-platform", 
            "Windows development", "game state management", "menu systems", 
            "UI elements", "design patterns", "modular code", "playtesting", 
            "iterative development", "graphics pipeline", "real-time rendering", 
            "shader basics", "game deployment"
        ]
     }, 
]
