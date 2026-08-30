const menuToggle =
document.querySelector(".menu-toggle");

const menu =
document.querySelector("nav ul");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}
const filterButtons =
document.querySelectorAll(".gallery-filter button");

const photos =
document.querySelectorAll(".photo");

if(filterButtons.length > 0){

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
            button.dataset.filter;
            filterButtons.forEach(btn => {
    btn.classList.remove("active-filter");
});

button.classList.add("active-filter");

            photos.forEach(photo => {

                if(
                    filter === "all" ||
                    photo.classList.contains(filter)
                ){

                    photo.style.display = "block";

                }else{

                    photo.style.display = "none";

                }

            });

        });

    });

}
const galleryImages =
document.querySelectorAll(".photo img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeLightbox =
document.querySelector(".close-lightbox");

if(galleryImages.length > 0){

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = image.src;

        });

    });

}
if(closeLightbox){

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}
if(lightbox){

    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}
const reveals =
document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

const counters =
document.querySelectorAll(".counter");

if(counters.length > 0){

    let countersStarted = false;

    function startCounters(){

        counters.forEach(counter => {

            const target =
            Number(counter.dataset.target);

            let count = 0;

            const increment =
            target / 100;

            function updateCounter(){

                if(count < target){

                    count += increment;

                    counter.innerText =
                    Math.ceil(count);

                    setTimeout(
                        updateCounter,
                        20
                    );

                }else{

                    counter.innerText =
                    target + "+";

                }

            }

            updateCounter();

        });

    }

    window.addEventListener(
        "scroll",
        () => {

            const firstCounter =
            counters[0];

            const top =
            firstCounter
            .getBoundingClientRect()
            .top;

            if(
                top < window.innerHeight &&
                !countersStarted
            ){

                startCounters();

                countersStarted = true;

            }

        }
    );

}
const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const nom =
            document.getElementById("nom").value;

            const telephone =
            document.getElementById("telephone").value;

            const service =
            document.getElementById("service").value;

            const message =
            document.getElementById("message").value;

            const texte =

`Bonjour Studio Obedmazeka,

Nom : ${nom}
Téléphone : ${telephone}
Service : ${service}

Message :
${message}`;

            const numero =
            "243897143750";

            const url =
            `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;

            window.open(
                url,
                "_blank"
            );

        }
    );

}