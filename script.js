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

    /* =====================================================
       ENTERPRISE BUSINESS SYSTEMS
    ===================================================== */

    sales: [

        {
            image: "assets/projects/enterprise/sales/menu.PNG",

            note: "This is the main menu of the Sales Management System, serving as the central navigation hub for" +
            "customer management, product records, sales transactions, reporting, and inquiry modules. " +
            "It was designed to provide users with quick and organized access to daily business operations."
            
        },

        {
            image: "assets/projects/enterprise/sales/processing.PNG",

            note: "This module manages the complete sales transaction workflow, from sales orders and delivery receipts " + 
            "to invoice processing and purchase order updates. It helps streamline daily sales operations while maintaining " + 
            "accurate records and improving overall efficiency."
        },

        {
            image: "assets/projects/enterprise/sales/customer_file.PNG",

            note: "The Customer File Maintenance module serves as the centralized database for customer information, " +
            "allowing users to maintain customer profiles, contact details, and business records. It ensures accurate, organized, " + 
            "and up-to-date customer data that supports efficient sales processing and long-term client relationship management."
        },

        {
            image: "assets/projects/enterprise/sales/delivery_receipt.PNG",

            note: "The Delivery Receipt module records and processes customer deliveries while automatically updating inventory balances " + 
            "and transaction records. It helps ensure accurate order fulfillment, inventory tracking, and complete documentation of every " +
            "delivery made to customers."

        },

        {
            image: "assets/projects/enterprise/sales/sales_invoice.PNG",

            note: "The Sales Invoice module generates customer invoices by linking completed delivery receipts to billing records, " +
            "helping prevent duplicate invoicing while maintaining accurate sales documentation. This process ensures reliable financial " +
            "records and supports efficient order-to-cash operations."
        },

        {
            image: "assets/projects/enterprise/sales/po_balance.PNG",

            note: "The Purchase Order Balance module monitors outstanding purchase order quantities against completed deliveries, " +
            "providing real-time visibility into remaining commitments. It helps prevent over-delivery, improves inventory planning, " +
            "and ensures accurate order fulfillment throughout the sales process."
        },

        {

            image: "assets/projects/enterprise/sales/weekly_sales.PNG",

            note: "The Weekly Sales Report provides a consolidated summary of completed sales transactions within a selected reporting period. " +
            "It enables management to monitor sales performance, review product movement, and support informed business decisions through accurate " +
            "and timely reporting."

        }

    ],

    inventory: [

        {
            image: "assets/projects/enterprise/inventory/menu.PNG",

            note: "This is the main menu of the Inventory Management System, providing centralized access to inventory maintenance, " +
            "transaction processing, and reporting modules. It was designed to help users efficiently manage inventory records, " +
            "monitor stock movements, and streamline day-to-day warehouse operations."

        },

        {
            image: "assets/projects/enterprise/inventory/item_file.PNG",

            note: "The Item File Maintenance module serves as the central repository for product information, " +
            "allowing users to manage item classifications, descriptions, units of measurement, and inventory settings. " +
            "It helps maintain accurate master data that supports inventory control, purchasing, sales, and warehouse operations."
        },

        {
            image: "assets/projects/enterprise/inventory/supplier.PNG",

            note: "The Supplier File Maintenance module centralizes supplier information, including company profiles, contact details, " +
            "and communication records. It provides a reliable database for purchasing and inventory operations, " + 
            "helping ensure accurate supplier management and efficient procurement processes."

        },

        {
            image: "assets/projects/enterprise/inventory/receiving.PNG",

            note: "The Receiving Transactions module records incoming inventory from suppliers, capturing item details, quantities, " +
            "unit costs, and reference documents in a single transaction. It helps maintain accurate stock records, " + 
            "supports inventory valuation, and ensures traceability of all received goods."

        },

        {
            image: "assets/projects/enterprise/inventory/physical_inventory.PNG",

            note: "The Physical Inventory module records and updates actual stock quantities during inventory counts, " +
            "helping reconcile system records with on-hand inventory. It supports accurate stock control, minimizes inventory discrepancies, " +
            "and improves the reliability of inventory management processes."

        },

        {
            image: "assets/projects/enterprise/inventory/report.PNG",

            note: "The Inventory Reporting module provides real-time visibility into current stock levels and inventory consumption, " +
            "enabling users to monitor product availability and support inventory planning. It helps improve purchasing decisions, " +
            "reduce stock shortages, and maintain optimal inventory levels across operations."
        }

    ],

    production: [

        {
            image: "assets/projects/enterprise/production/production_plan.PNG",

            note: "The Production Planning module generates production schedules based on customer orders and purchase requirements, " +
            "defining the required quantities and production workload for each product. It helps optimize production planning, " +
            "improve resource utilization, and ensure timely order fulfillment."

        },

        {
            image: "assets/projects/enterprise/production/mrp.PNG",

            note: "The Material Requirements Planning (MRP) module calculates the raw materials and packaging components required to " +
            "fulfill production plans based on demand forecasts and manufacturing schedules. It helps optimize material planning, " +
            "prevent shortages, reduce excess inventory, and ensure production readiness."

        },

        {
            image: "assets/projects/enterprise/production/bom.PNG",

            note: "The Bill of Materials (BOM) module defines the complete list of raw materials, packaging components, " +
            "and required quantities needed to manufacture a finished product. It serves as the foundation for production planning, " +
            "material costing, and inventory control, ensuring consistent product formulation and efficient manufacturing operations."

        }

    ],

    rawmaterials: [

        {
            image: "assets/projects/enterprise/rawmaterials/menu.png",
            note: "Raw Materials Inventory System"
        }

    ],

    restaurant: [

        {
            image: "assets/projects/enterprise/restaurant/menu.png",
            note: "Restaurant Logistics"
        },

        {
            image: "assets/projects/enterprise/restaurant/process.png",
            note: "Restaurant Processing"
        },

        {
            image: "assets/projects/enterprise/restaurant/reports.png",
            note: "Restaurant Reports"
        },

        {
            image: "assets/projects/enterprise/restaurant/inventory.png",
            note: "Restaurant Inventory"
        }

    ],

    /* =====================================================
       ADMINISTRATIVE
    ===================================================== */

    admin: [

        {

            image: "assets/projects/admin/calendar_week.png",

            note: "Organized and managed a weekly executive calendar using Google Calendar."

        },

        {

            image: "assets/projects/admin/calendar_details.png",

            note: "Created and managed detailed meeting events in Google Calendar."

        },

        {

            image: "assets/projects/admin/calendar_schedule.png",

            note: "Managed daily executive schedules and priorities."

        },

        {

            image: "assets/projects/admin/sheets_tracker.png",

            note: "Client Management Tracker."

        },

        {

            image: "assets/projects/admin/docs_agenda.png",

            note: "Meeting Agenda Preparation."

        }

    ],

    /* =====================================================
       GRAPHICS
    ===================================================== */

    graphics: [

        {

            image: "assets/projects/graphics/canva_tarp.png",

            note: "Tarpaulin Design"

        },

        {

            image: "assets/projects/graphics/ps_restoration.png",

            note: "Photo Restoration"

        },

        {

            image: "assets/projects/graphics/caricatures.png",

            note: "Caricatures"

        },

        {

            image: "assets/projects/graphics/tarp_design.png",

            note: "Print Designs"

        },

        {

            image: "assets/projects/graphics/others.png",

            note: "Other Graphic Projects"

        }

    ],

    /* =====================================================
       PRODUCT RESEARCH
    ===================================================== */

    research: [

        {

            image: "assets/projects/research/deal_sheet.png",

            note: "Product Research"

        },

        {

            image: "assets/projects/research/checkout.png",

            note: "Order Processing"

        },

        {

            image: "assets/projects/research/us_stores.png",

            note: "Store Directory"

        }

    ]

};

/* =====================================================
   PROJECT GALLERY V2
===================================================== */

/* =====================================================
   ELEMENTS
===================================================== */

const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");
const galleryCounter = document.querySelector(".gallery-modal__counter");
const galleryNote = document.getElementById("galleryNote");

galleryBack.addEventListener("click", closeGalleryModal);
const overlay = document.querySelector(".gallery-modal__overlay");

const previousButton = document.querySelector(".gallery-modal__prev");
const nextButton = document.querySelector(".gallery-modal__next");

const galleryButtons = document.querySelectorAll(".project-card__view");

/* =====================================================
   SYSTEM SELECTOR
===================================================== */

const selectorModal = document.getElementById("systemSelector");

const selectorOverlay =
    document.querySelector(".system-selector__overlay");

const selectorClose =
    document.querySelector(".system-selector__close");

const systemCards =
    document.querySelectorAll(".system-card");

/* =====================================================
   VARIABLES
===================================================== */

let currentGallery = [];

let currentIndex = 0;

let returnToSystems = false;

/* =====================================================
   GALLERY FUNCTIONS
===================================================== */

function updateGallery() {

    if (currentGallery.length === 0) return;

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

function closeGalleryModal(){

    galleryModal.classList.remove("show");

    if(returnToSystems){

        selectorModal.classList.add("show");

        document.body.style.overflow="hidden";

    }else{

        document.body.style.overflow="";

    }

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
   SYSTEM SELECTOR
===================================================== */

function openSystemSelector() {

    selectorModal.classList.add("show");

    document.body.style.overflow = "hidden";

}

function closeSystemSelector() {

    selectorModal.classList.remove("show");

    document.body.style.overflow = "";

}

/* =====================================================
   EVENTS
===================================================== */

// Project Card Click

galleryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const gallery = button.dataset.gallery;

        // Enterprise Business Systems
        if (gallery === "enterprise") {

            openSystemSelector();

            return;

        }

        // Other Galleries

        returnToSystems = false;

        openGallery(gallery);
    });

});

// System Selection

systemCards.forEach(card => {

    card.addEventListener("click", () => {

        const system = card.dataset.system;

        returnToSystems = true;

        closeSystemSelector();

        openGallery(system);

    });

});

// Close Selector

selectorClose.addEventListener("click", closeSystemSelector);

selectorOverlay.addEventListener("click", closeSystemSelector);

// Gallery Controls

galleryBack.addEventListener("click", closeGalleryModal);

overlay.addEventListener("click", closeGalleryModal);

nextButton.addEventListener("click", nextImage);

previousButton.addEventListener("click", previousImage);

/* =====================================================
   Keyboard Navigation
===================================================== */

document.addEventListener("keydown", (event) => {

    // Escape

    if (event.key === "Escape") {

        if (galleryModal.classList.contains("show")) {

            closeGalleryModal();

        }

        if (selectorModal.classList.contains("show")) {

            closeSystemSelector();

        }

    }

    // Gallery only

    if (!galleryModal.classList.contains("show")) return;

    if (event.key === "ArrowRight") {

        nextImage();

    }

    if (event.key === "ArrowLeft") {

        previousImage();

    }

});