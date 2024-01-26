const main = document.querySelector('main');
const imageTitle = document.getElementById('imageTitle');
const photos = [
    'https://www.science.org/do/10.5555/article.2373873/full/sig-lions-1644902875547.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sunset_at_Long_Beach_%28South_Africa%29.jpg/1024px-Sunset_at_Long_Beach_%28South_Africa%29.jpg',
    'https://www.wwf.org.uk/sites/default/files/styles/content_slide_image/public/2016-09/Medium_WW176748_1.jpg?h=c657a9ab&itok=G1uM76Yu',
    'https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3878104/pexels-photo-3878104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const titles = [
    "King of the Jungle",
    "Golden Hour",
    "Antarctic Penguin",
    "Rustic Living Radiance",
    "Northen lights",
    "Desert",
];

let currentImageIndex = 0;
let autoSlideInterval;

function updateImageAndTitle() {
    main.style.opacity = 0;

    setTimeout(() => {
        main.style.backgroundImage = `url('${photos[currentImageIndex]}')`;
        imageTitle.textContent = titles[currentImageIndex];
        main.style.opacity = 1;
    }, 500);
}

function Next() {
    currentImageIndex = (currentImageIndex + 1) % photos.length;
    updateImageAndTitle();
}

function Back() {
    currentImageIndex = (currentImageIndex - 1 + photos.length) % photos.length;
    updateImageAndTitle();
}

function toggleAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    } else {
        autoSlideInterval = setInterval(() => {
            Next();
        }, 2000);
    }
}

updateImageAndTitle();
