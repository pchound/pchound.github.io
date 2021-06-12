<<<<<<< HEAD
const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src= img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

=======
const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src= img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

>>>>>>> d08d44be9622de1fc454340a954d432227189462