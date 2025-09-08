import { games } from "./games";
import { projects } from "./projects";
import { socialMedia } from "./socialMedia";

export let searchDatabase: object[] = [
    ...projects.map(item => ({ type: "project", ...item })),
    ...games.map(item => ({type: "game-fun", ...item})),
    ...socialMedia.map(item => ({type: "profile-link-social-media", ...item}))
]