/* =====================================================
   LUKE SURIBEN PORTFOLIO V3
   Production JavaScript
===================================================== */

/* =====================================================
   SELECTORS
===================================================== */

const header = document.querySelector(".header");

const mobileToggle = document.querySelector(".navbar__toggle");

const navMenu = document.querySelector(".navbar__menu");

const navLinks = document.querySelectorAll(".navbar__link");

const sections = document.querySelectorAll("main section");

/* =====================================================
   STICKY HEADER
===================================================== */

function handleHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

/* =====================================================
   MOBILE MENU
===================================================== */

mobileToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});

/* =====================================================
   CLOSE MENU AFTER CLICK
===================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});

/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

function activeNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeNavigation);

/* =====================================================
   INITIALIZE
===================================================== */

handleHeader();

activeNavigation();

/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".hero__content, \
     .hero__visual, \
     .tool, \
     .service-card, \
     .case-study__image, \
     .case-study__content, \
     .project-card, \
     .about__image, \
     .about__content, \
     .contact__wrapper"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {

    element.classList.add("hidden-element");

    revealObserver.observe(element);

});

/* =====================================================
   CLOSE MENU USING ESC
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navMenu.classList.remove("show");

    }

});

/* =====================================================
   CLOSE MOBILE MENU ON RESIZE
===================================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        navMenu.classList.remove("show");

    }

});

/* =====================================================
   CURRENT YEAR
===================================================== */

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* =====================================================
   PROJECT GALLERY
===================================================== */

/*
|--------------------------------------------------------------------------
| Gallery Configuration
|--------------------------------------------------------------------------
| Replace these filenames with your actual images.
| Example:
| assets/projects/admin/01.jpg
| assets/projects/admin/02.jpg
|--------------------------------------------------------------------------
*/

const galleries = {

    admin: [

        {

            image: "assets/projects/admin/calendar_week.png",

            note: "Organized and managed a weekly executive calendar using Google Calendar, coordinating meetings, " +
            "client appointments, and administrative priorities while maintaining an efficient and conflict-free schedule"

        },

        {

            image: "assets/projects/admin/calendar_details.png",

            note: "Created and managed detailed meeting events in Google Calendar, including meeting agendas, attendee " +
            "invitations, conference room assignments, and Google Meet links. This demonstrates my ability to organize " +
            "meetings efficiently, communicate with stakeholders, and ensure every session is well-prepared and professionally coordinated." 

        },

        {

            image: "assets/projects/admin/calendar_schedule.png",

            note: "Managed a structured daily schedule using Google Calendar's Schedule View to organize executive " +
            "meetings, client appointments, administrative tasks, and follow-up activities. This demonstrates my ability to " +
            "prioritize responsibilities, manage multiple commitments, and maintain an efficient workflow while ensuring " +
            "important tasks are completed on time."

        },        

        {

            image: "assets/projects/admin/sheets_tracker.png",

            note: "Developed and maintained a client management tracker in Google Sheets to organize customer information, " +
            "monitor client status, schedule follow-ups, and prioritize ongoing tasks. This system helps ensure accurate " +
            "record-keeping, timely communication, and efficient management of client relationships throughout the entire workflow"

        },

        {

            image: "assets/projects/admin/docs_agenda.png",

            note: "Prepared a professional meeting agenda using Google Docs to support leadership meetings by organizing " +
            "discussion topics, meeting details, participant information, and key objectives. This demonstrates my ability " +
            "to create clear, well-structured documents that help meetings stay organized, productive, and focused on business priorities"

        }        

    ],

    graphics: [

        {

            image: "assets/projects/graphics/canva_tarp.png",

            note: "The client provided only the product photo and trusted me to handle the entire tarpaulin design. " +
            "Using Canva, I transformed the image into a professional, eye-catching promotional layout that is " +
            "optimized for high-quality printing and effective marketing."

        },

        {

            image: "assets/projects/graphics/ps_restoration.png",

            note: "The client provided an old black-and-white photograph for restoration and colorization. Using Adobe " +
            "Photoshop, I carefully colorized the image, enhanced its overall quality, and restored damaged areas " +
            "while preserving the subject's original facial features and historical authenticity."

        },

        {

            image: "assets/projects/graphics/caricatures.png",

            note: "The client provided the original photos, and I used Adobe Photoshop to create personalized " +
            "caricatures while preserving each person's recognizable facial features and expressions. These custom " +
            "illustrations were then adapted for various print products, including framed portraits, T-shirts, mugs, " +
            "and personalized gifts."

        },

        {

            image: "assets/projects/graphics/tarp_design.png",

            note: "The clients provided the photos and project details, and I used Canva to create custom " +
            "tarpaulin designs for various occasions and promotional purposes. Each layout was designed to be " +
            "visually engaging, well-balanced, and optimized for high-quality printing. "

        },

        {

            image: "assets/projects/graphics/others.png",

            note: "The clients provided their photos and design requirements, and I used a combination of Adobe " +
            "Photoshop and Canva to create custom lanyards, badge cards, and ref magnets. Each design was " +
            "carefully crafted to be visually appealing, personalized, and optimized for high-quality printing. "

        },        
       
    ],

    research: [

        {

            image: "assets/projects/research/deal_sheet.png",

            note: "Created and maintained a Google Sheets tracker to analyze product opportunities, monitor pricing, " +
            "calculate ROI, and organize supplier information for efficient sourcing and decision-making."

        },

        {

            image: "assets/projects/research/checkout.png",

            note: "Processed online orders while applying verified discount codes and promotional offers using browser. " +
            "extensions such as Coupert and similar coupon tools. Reviewed shipping options, validated discounts, and " +
            "optimized order costs to maximize savings while ensuring accurate checkout information and a smooth purchasing process"

        },

        {

            image: "assets/projects/research/us_stores.png",

            note: "Created and maintained a categorized directory of online stores and suppliers using Google Sheets to " +
            "streamline product research and sourcing. Organized websites by industry and product category, enabling " +
            "faster access to reliable retailers and improving the efficiency of online research and procurement tasks."

        }

    ],

};

/* =====================================================
   Elements
===================================================== */

const galleryModal = document.getElementById("galleryModal");

const galleryImage = document.getElementById("galleryImage");

const galleryCounter = document.querySelector(".gallery-modal__counter");

const galleryNote = document.getElementById("galleryNote");

const galleryButtons = document.querySelectorAll(".project-card__view");

const closeGallery = document.querySelector(".gallery-modal__close");

const overlay = document.querySelector(".gallery-modal__overlay");

const previousButton = document.querySelector(".gallery-modal__prev");

const nextButton = document.querySelector(".gallery-modal__next");

let currentGallery = [];

let currentIndex = 0;

/* =====================================================
   Functions
===================================================== */

function updateGallery(){

    const item = currentGallery[currentIndex];

    galleryImage.src = item.image;

    galleryNote.textContent = item.note;

    galleryCounter.textContent =
        `${currentIndex + 1} / ${currentGallery.length}`;

}

function openGallery(name) {

    currentGallery = galleries[name];

    currentIndex = 0;

    updateGallery();

    galleryModal.classList.add("show");

    document.body.style.overflow = "hidden";

}

function closeModal() {

    galleryModal.classList.remove("show");

    document.body.style.overflow = "";

}

function nextImage() {

    currentIndex++;

    if (currentIndex >= currentGallery.length) {

        currentIndex = 0;

    }

    updateGallery();

}

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = currentGallery.length - 1;

    }

    updateGallery();

}

/* =====================================================
   Events
===================================================== */

galleryButtons.forEach(button => {

    button.addEventListener("click", () => {

        openGallery(button.dataset.gallery);

    });

});

closeGallery.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

nextButton.addEventListener("click", nextImage);

previousButton.addEventListener("click", previousImage);

/* =====================================================
   Keyboard Navigation
===================================================== */

document.addEventListener("keydown", (event) => {

    if (!galleryModal.classList.contains("show")) return;

    switch (event.key) {

        case "Escape":

            closeModal();

            break;

        case "ArrowRight":

            nextImage();

            break;

        case "ArrowLeft":

            previousImage();

            break;

    }

});