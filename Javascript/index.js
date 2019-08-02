const elements = {
    images: document.querySelectorAll('.app-image'),
    lists: document.querySelectorAll('.app-list'),
    featureButton: document.querySelector('.featureButton'),
    aboutUs: document.querySelector('.about-us-text'),
    aboutButton: document.querySelector('.aboutButton'),
    features: document.querySelector('.features'),
    featuresImage: document.querySelector('.features-image'),
};

function featureToggle() {
    elements.lists.forEach(cur => {
        cur.classList.toggle('displayList');
    })
    elements.images.forEach(cur => {
        cur.classList.toggle('displayImage')
    })
    elements.features.style.flexFlow === "" || elements.features.style.flexFlow === "row wrap" ? elements.features.style.flexFlow = "column wrap" : elements.features.style.flexFlow = "row wrap";
    if (elements.featureButton.textContent === "Learn More") {
        elements.featureButton.textContent = "See Less";
    } else if (elements.featureButton.textContent === "See Less") {
        elements.featureButton.textContent = "Learn More";
    }
    elements.featuresImage.style.flexFlow === "" || elements.featuresImage.style.flexFlow === "column wrap" ? elements.featuresImage.style.flexFlow = "row wrap" : elements.featuresImage.style.flexFlow = "columnw wrap";
}




//* toggle Contributers button


// function toggleAbout() {
//     elements.aboutUs.classList.toggle('displayAbout');

//     if (elements.aboutButton.textContent === "Contributers") {
//         elements.aboutButton.textContent = "See Less";
//     } else if (elements.aboutButton.textContent === "See Less") {
//         elements.aboutButton.textContent = "Contributers";
//     }
// };