interface SocialMediaImage {
    "Name": string,
    "Social": string, 
    URL: string, 
}

import GitHub from '../assets/GithubLogo.png'
import LinkedIn from '../assets/LinkedIn Logo(1).png'
import Instagram from '../assets/InstaLogo(1).png'

export let socialMedia: SocialMediaImage[] = [

    {
        "Name": "GitHub",
        "Social": GitHub, 
        URL: "https://github.com/AbElo-77"
    }, 
    {
        "Name": "LinkedIn",
        "Social": LinkedIn, 
        URL: "https://www.linkedin.com/in/abdallaelokely/"
    },
    {
        "Name": "Instagram",
        "Social": Instagram, 
        URL: "https://www.instagram.com/abdalla.elokely/?hl=en"
    },
]