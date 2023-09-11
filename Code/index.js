const featureList = document.querySelector(".features-list")
const featureItems = document.querySelector(".feature-items")
const menuOptions = document.querySelector(".menu-container")
const companyOptions = document.querySelector(".company-options")
const companyItems = document.querySelector(".company-sub-items")
const arrows = document.querySelector(".arrows")
const arrows2 = document.querySelector(".arrows2")
const menuIcon = document.querySelector(".menu-icon")
const menuCloseIcon = document.querySelector(".menu-close")
const shadowing = document.querySelector(".oscuro")


menuIcon.addEventListener("click", openMenu)
menuCloseIcon.addEventListener("click", openMenu)
featureList.addEventListener("click", featrueConfig)
companyOptions.addEventListener("click", companyConfig)
arrows.addEventListener("click", featrueConfig)
arrows2.addEventListener("click", companyConfig)
shadowing.addEventListener("click", openMenu)
function openMenu() {
    if(menuOptions.classList.contains("inactive")){
        menuOptions.classList.remove("inactive")
        shadowing.classList.remove("inactive")
        shadowing.style.height = `${document.documentElement.scrollHeight}px`
        arrowImg.src = "./images/icon-arrow-down.svg"
        arrowImg2.src = "./images/icon-arrow-down.svg"
    }else if (!menuOptions.classList.contains("inactive")){
        menuOptions.classList.add("inactive")
        featureItems.classList.add("inactive")
        companyItems.classList.add("inactive")
        shadowing.classList.add("inactive")
        arrowImg.src = "./images/icon-arrow-down.svg"
        arrowImg2.src = "./images/icon-arrow-down.svg"
    }
 
}
function featrueConfig() {
    if(featureItems.classList.contains("inactive")){
        featureItems.classList.remove("inactive")
        arrowImg.src = "./images/icon-arrow-up.svg"
    }else if (!featureItems.classList.contains("inactive")){
        featureItems.classList.add("inactive")
        arrowImg.src = "./images/icon-arrow-down.svg"
    }
}
function companyConfig() {
    if(companyItems.classList.contains("inactive")){
        companyItems.classList.remove("inactive")
        arrowImg2.src = "./images/icon-arrow-up.svg"
    }else if (!companyItems.classList.contains("inactive")){
        companyItems.classList.add("inactive")
        arrowImg2.src = "./images/icon-arrow-down.svg"
    }
}
companyOptions.addEventListener( 'ondblclick', function(event) {  
    event.preventDefault();  
    event.stopPropagation(); 
  },  true 
);
window.addEventListener("resize", closeGeneral)
function closeGeneral() {
    if(window.innerWidth > 740){
        featureItems.classList.add("inactive")
        menuOptions.classList.add("inactive")
        companyItems.classList.add("inactive")
        shadowing.classList.add("inactive")
        arrowImg.src = "./images/icon-arrow-down.svg"
        arrowImg2.src = "./images/icon-arrow-down.svg"
    }
}

const arrowImg = document.createElement("img")
arrowImg.src = "./images/icon-arrow-down.svg"
arrowImg.style = ` 
width: 15px;
height: 10px;
cursor: pointer;
`


const arrowImg2 = document.createElement("img")
arrowImg2.src = "./images/icon-arrow-down.svg"
arrowImg2.style = ` 
width: 15px;
height: 10px;
cursor: pointer;
`


arrows.append(arrowImg)
arrows2.append(arrowImg2)