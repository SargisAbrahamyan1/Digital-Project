const loadMore = document.getElementById('loadMore');
$(document).ready(function () {
    $(".gallery__image__intro").slice(0, 10).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".gallery__image__intro:hidden").slice(0, 5).slideDown();
        if ($(".gallery__image__intro:hidden").length == 0) {
            loadMore.style.display = 'none';
        }
    });
    if ($(".gallery__image__intro").length == 10) {
        loadMore.style.display = 'none';
    }
});

const body = document.querySelector('body');
const galleryPopUpCont = document.querySelector('.gallery__images__popup__container');
const closePopUp = document.querySelector('.close__popup');
const galleryImages = document.querySelectorAll('.gallery__image');
const galleryPopUpImage = document.querySelector('.popup__image');

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function () {
        galleryPopUpCont.style.display = 'flex';
        body.style.overflow = 'hidden';
        galleryPopUpImage.src = galleryImages[i].src;
    });
    galleryPopUpCont.addEventListener('click', function () {
        galleryPopUpCont.style.display = 'none';
        body.style.overflow = 'scroll';
    });
    closePopUp.addEventListener('click', function () {
        galleryPopUpCont.style.display = 'none';
        body.style.overflow = 'scroll';
    });
}