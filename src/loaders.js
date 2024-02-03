// BASE URL OF OUR DEPLOYED API

const URL = "https://express-react-lab-r05d.onrender.com"

export const projectsLoader = async () => {
    // creating this function to pull json from our backend
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}