let cpt = 0;
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const deskLeftArrow = document.getElementById("desk-left-arrow");
const deskRightArrow = document.getElementById("desk-right-arrow");

const img1Mobile = document.getElementById("img1-mobile");
const img2Mobile = document.getElementById("img2-mobile");
const img3Mobile = document.getElementById("img3-mobile");
const img1Desk = document.getElementById("img1-desk");
const img2Desk = document.getElementById("img2-desk");
const img3Desk = document.getElementById("img3-desk");

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

var text = {
    0: text1,
    1: text2,
    2: text3,
};

var img = {
    0: img1Mobile,
    1: img2Mobile,
    2: img3Mobile,
};

var imgDesk = {
    0: img1Desk,
    1: img2Desk,
    2: img3Desk,
};

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Convertissez "765px" en un nombre pour effectuer une comparaison numérique
    const breakpointWidth = 768;

    // Parcourez les clés de l'objet imgDesk
    for (const key in imgDesk) {

        if (Object.hasOwnProperty.call(imgDesk, key)) {
            const element = imgDesk[key];

            // Vérifiez la largeur de la fenêtre et ajustez la visibilité des éléments
            if (windowWidth < breakpointWidth) {
                console.log("hgliyfvyuc");
                element.classList.add("hidden");
                img[cpt].classList.remove("hidden");
            }
        }

        
    }

    // Parcourez les clés de l'objet img
    for (const key in img) {
        if (Object.hasOwnProperty.call(img, key)) {
            const element = img[key];

            // Vérifiez la largeur de la fenêtre et ajustez la visibilité des éléments
            if (windowWidth > breakpointWidth) {
                element.classList.add("hidden");
                imgDesk[cpt].classList.remove("hidden");
            }
        }
    }
});


deskLeftArrow.addEventListener('click', function() {

    if (cpt === 0) {
        if (imgDesk[cpt].classList.contains("md:block")) {
            console.log("yo c moi");
            imgDesk[cpt].classList.remove("md:block");
        }
    }

    console.log(cpt);
    imgDesk[cpt].classList.add("hidden");
    text[cpt].classList.add("hidden");
    cpt = (cpt - 1 + 3) % 3;
    imgDesk[cpt].classList.remove("hidden");
    text[cpt].classList.remove("hidden");

});

deskRightArrow.addEventListener('click', function() {

    if (cpt === 0) {
        if (imgDesk[cpt].classList.contains("md:block")) {
            console.log("yo c moi");
            imgDesk[cpt].classList.remove("md:block");
        }
    }

    console.log(cpt);
    imgDesk[cpt].classList.add("hidden");
    text[cpt].classList.add("hidden");
    cpt = cpt+1;
    cpt = cpt%3;
    imgDesk[cpt].classList.remove("hidden");
    text[cpt].classList.remove("hidden");

});

leftArrow.addEventListener('click', function() {

    console.log(cpt);
    img[cpt].classList.add("hidden");
    text[cpt].classList.add("hidden");
    cpt = (cpt - 1 + 3) % 3;
    img[cpt].classList.remove("hidden");
    text[cpt].classList.remove("hidden");

});

console.log("recoucou");

rightArrow.addEventListener('click', function() {

    img[cpt].classList.add("hidden");
    text[cpt].classList.add("hidden");
    cpt = cpt+1;
    cpt = cpt%3;
    img[cpt].classList.remove("hidden");
    text[cpt].classList.remove("hidden");

});

const openMobileMenu = document.getElementById("open-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const closeMobileMenu = document.getElementById("close-mobile-menu");

openMobileMenu.addEventListener('click', function() {
    openMobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
    overlay.classList.remove("hidden");
});

closeMobileMenu.addEventListener('click', function() {
    openMobileMenu.classList.remove("hidden");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    overlay.classList.add("hidden");
});