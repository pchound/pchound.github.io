const navigation = document.querySelector('.navigation')
const ham = document.querySelector('.ham');

ham.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) navigation.classList.remove('responsive')};





const vintage_photos_button = document.querySelector('.vintage_photos_button');
const vintage_photos = document.querySelector('.vintage_photos')

vintage_photos_button.addEventListener('click', () => {vintage_photos.classList.toggle('vintage_photos_responsive')}, false);

/*document.getElementsByClassName("vintage_photos_button").addEventListener("click", up_arrow);

function up_arrow() 
{
    document.getElementsByClassName("vintage_photos_button").innerHTML = "It works!";
}*/

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) vintage_photos.classList.remove('vintage_photos_responsive')};






const new_photos_button = document.querySelector('.new_photos_button');
const new_photos = document.querySelector('.new_photos')

new_photos_button.addEventListener('click', () => {new_photos.classList.toggle('new_photos_responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) new_photos.classList.remove('new_photos_responsive')};





const article_button = document.querySelector('.article_button');
const article = document.querySelector('.article')

article_button.addEventListener('click', () => {article.classList.toggle('article_responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) article.classList.remove('article_responsive')};