// const modal = document.getElementById("imageModal");
// const img = document.getElementById("myImage");
// const modalImg = document.getElementById("expandedImg");
// const span = document.getElementsByClassName("close")[0];

const xaiObj = {
    RUSH_HOUR_GAME: 'A typical game of Rush Hour with the virtual robot.',
    SAMPLE_TRIAL_SETTINGS: 'The trial experimental settings implemented over the summer of 2025',
    ERROR_CHECKING: 'Error check popup for invalid XAI settings',
    ERROR_CHECKING_2: 'Error check notification for invalid experimental settings due to mismatched puzzles or for an older experiments.',
    ERROR_CHECKING_3: 'Notification on potentially invalid experiment due to puzzle difficulty changes.',
    NORMAL_EXPERIMENTAL_SETTINGS: 'The normal experiment settings.',
    XAI_SETTINGS_TIMING: 'Timing section of the XAI settings'
};

const xaiImageList = Object.keys(xaiObj);
const xaiProjectImages = document.getElementById("xaiImages");

const modalDOMElement = document.getElementById("modalHere");

const leftButton = document.querySelector('.prev');
const rightButton = document.querySelector('.next');

const modal = document.querySelector(`.modal`);
const modalImg = modal.querySelector(`img`);
const span = modal.querySelector(`.close`);

let galleryUsed = null;
let currIdx = 0;

leftButton.onclick = function () {
    console.log(galleryUsed[ currIdx - 1])
    if (galleryUsed && currIdx > 0) {
        modalImg.src = `images/${galleryUsed[--currIdx ]}.png`;
        modalImg.alt = `${galleryUsed[currIdx]}`;
        buttonDisplay(currIdx, galleryUsed.length);
    }
}

rightButton.onclick = function () {
    if (galleryUsed && currIdx < (galleryUsed.length - 1)) {
        modalImg.src = `images/${galleryUsed[++currIdx ]}.png`;
        modalImg.alt = `${galleryUsed[currIdx]}`;
        buttonDisplay(currIdx, galleryUsed.length);
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Optional: Close modal when clicking anywhere outside the image
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

setSlideShow(xaiImageList, Object.values(xaiObj), xaiProjectImages, 'xaiImageList');

function setSlideShow(imageList, descriptionList, imageDOMElementLocation, imageListName) {

    for (let i = 0; i < imageList.length; i++) {
        const imageName = imageList[i];

        const image = document.createElement('img');
        image.classList.add("thumbnailImg", imageListName);
        image.dataset.img = `${imageName}.png`;
        image.src = `images/${imageName}.png`;
        image.alt = imageName;

        const div = document.createElement('div');
        div.classList.add('d-flex', 'flex-column', 'thumbnailImgDiv');

        div.append(image);
        const description = document.createElement('p');
        description.classList.add("py-2", "thumbnailDesc");
        description.innerText = descriptionList[i];
        div.append(description);

        imageDOMElementLocation.append(div);

        image.onclick = function () {
            modal.style.display = "block";
            modalImg.src = image.src; // Uses the same image source
            galleryUsed = imageList;
            currIdx = i;

            buttonDisplay(i, imageList.length);
        }

    }

}

function buttonDisplay(idx, maxLength) {
    leftButton.style.display = (idx === 0) ? 'none' : 'block';
    rightButton.style.display = idx === (maxLength - 1) ? 'none' : 'block';
}