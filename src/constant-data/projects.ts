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
        ]
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
