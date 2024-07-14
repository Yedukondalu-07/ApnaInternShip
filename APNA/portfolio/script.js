const homeTab = document.querySelector(".homeItem");
const skillsTab = document.querySelector(".skillsItem");
const educationTab = document.querySelector(".educationItem");
const certificatesTab = document.querySelector(".certificationItem");
const projectsTab = document.querySelector(".projectsItem");
const contactTab = document.querySelector(".contactItem")

const skillContainer = document.querySelector(".skills");
const homeContainer = document.querySelector(".home")
const educationContainer = document.querySelector(".education")
const certificatesContainer = document.querySelector(".certificates")
const projectsContainer = document.querySelector(".projects")
const contactContainer = document.querySelector(".contact");

skillsTab.addEventListener("click", () => {
    skillContainer.style.display = "flex";
    homeContainer.style.display = "none";
    educationContainer.style.display = "none";
    certificatesContainer.style.display = "none";
    projectsContainer.style.display = "none";
    contactContainer.style.display = "none";

    skillContainer.classList.add("skills-js")
})

homeTab.addEventListener("click", () => {
    homeContainer.style.display = "flex";
    skillContainer.style.display = "flex";
    educationContainer.style.display = "flex";
    certificatesContainer.style.display = "flex";
    projectsContainer.style.display = "flex";
    contactContainer.style.display = "flex";

    skillContainer.classList.add("skills")
    skillContainer.classList.remove("skills-js")
    educationContainer.classList.add("education")
    educationContainer.classList.remove("education-js")
    contactContainer.classList.add("contact")
    contactContainer.classList.remove("contact-js")
})

educationTab.addEventListener("click", () => {
    homeContainer.style.display = "none"
    skillContainer.style.display = "none";
    educationContainer.style.display = "flex";
    certificatesContainer.style.display = "none";
    projectsContainer.style.display = "none";
    contactContainer.style.display = "none";
    
    educationContainer.classList.add("education-js");
})

certificatesTab.addEventListener("click", () => {
    homeContainer.style.display = "none";
    skillContainer.style.display = "none";
    educationContainer.style.display = "none";
    certificatesContainer.style.display = "flex";
    projectsContainer.style.display = "none";
    contactContainer.style.display = "none";
})

projectsTab.addEventListener("click", () => {
    homeContainer.style.display = "none";
    skillContainer.style.display = "none";
    educationContainer.style.display = "none";
    certificatesContainer.style.display = "none";
    projectsContainer.style.display = "flex";
    contactContainer.style.display = "none";
})

contactTab.addEventListener("click", () =>{
    homeContainer.style.display = "none";
    skillContainer.style.display = "none";
    educationContainer.style.display = "none";
    certificatesContainer.style.display = "none";
    projectsContainer.style.display = "none";
    contactContainer.style.display = "flex";

    contactContainer.classList.add("contact-js")
})