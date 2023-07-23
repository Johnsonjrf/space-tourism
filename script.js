const heroImg = document.querySelector(".hero-img");
heroImg.addEventListener("click", () => {
    heroImg.classList.toggle("show-bg")
})





// destinations

const destinationsLinks = document.querySelectorAll(".location");
const allDestinations = document.querySelectorAll(".different-destinations");

destinationsLinks.forEach((destLink) => {
    destLink.addEventListener("click", (e) => {
        for (let i = 0; i < allDestinations.length; i++) {
            destinationsLinks[i].classList.remove("active-link")
            allDestinations[i].classList.remove("dest-active")
        }
        const key = e.target.getAttribute("data-id");
        e.target.classList.add("active-link")
        showDestination(key)
    })
})

function showDestination (key) {
    allDestinations.forEach((destination) => {
        const id = destination.getAttribute("data-id");
       if (id === key) {
        destination.classList.add("dest-active")
       }
       else {
        destination.classList.remove("dest-active")
       }
    })
}


// crew

const indicators = document.querySelectorAll(".indic")
const crewContainer = document.querySelector(".crew-container")
const allCrew = document.querySelectorAll(".all-crew")

indicators[0].addEventListener("click", (e) => {
    
    // crewContainer.style.transform = "translateX(0)"
    for(let i = 0; i < allCrew.length; i++) {
        allCrew[i].classList.remove("active-container")
        indicators[i].classList.remove("active-indicator")
    }
    allCrew[0].classList.add("active-container")
    indicators[0].classList.add("active-indicator")
    
})

indicators[1].addEventListener("click", () => {
    
    // crewContainer.style.transform = "translateX(-400px)"
    for(let i = 0; i < allCrew.length; i++) {
        allCrew[i].classList.remove("active-container")
        indicators[i].classList.remove("active-indicator")
    }
    allCrew[1].classList.add("active-container")
    indicators[1].classList.add("active-indicator")
})

indicators[2].addEventListener("click", () => {
    
    // crewContainer.style.transform = "translateX(-1600px)"
    for(let i = 0; i < allCrew.length; i++) {
        allCrew[i].classList.remove("active-container")
        indicators[i].classList.remove("active-indicator")
    }
    allCrew[2].classList.add("active-container")
    indicators[2].classList.add("active-indicator")
})

indicators[3].addEventListener("click", () => {
    
    // crewContainer.style.transform = "translateX(-2400px)"
    for(let i = 0; i < allCrew.length; i++) {
        allCrew[i].classList.remove("active-container")
        indicators[i].classList.remove("active-indicator")
    }
    allCrew[3].classList.add("active-container")
    indicators[3].classList.add("active-indicator")
})


// technology

const allTechSwitchs = document.querySelectorAll(".switch");
const allTechnologies = document.querySelectorAll(".technologies")

allTechSwitchs.forEach((techSwitch) => {
    techSwitch.addEventListener("click", (e) => {
        for(let i = 0; i < allTechnologies.length; i++) {
            allTechnologies[i].classList.remove("active-tech")
            allTechSwitchs[i].classList.remove("active-switch")
        }
        e.target.classList.add("active-switch")
        const uniqueId = e.target.getAttribute("data-id");
        showTech(uniqueId)
        
    })
})

function showTech(key) {
   allTechnologies.forEach((tech) => {
    const techId = tech.getAttribute("data-id");
    if(techId === key) {
        tech.classList.add("active-tech")
    }
   })
}

// responsiveness  for  smaller  screens

// toggle menu
const navMenu = document.querySelector(".page-links")
const close = document.querySelector(".close")
document.querySelector(".menu").addEventListener("click", () => {
    navMenu.classList.add("show-nav")
})

close.addEventListener("click", () => {
    navMenu.classList.remove("show-nav")
})

window.onscroll = () => {
    navMenu.classList.remove("show-nav")
}