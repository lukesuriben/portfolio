// ======================================================
// LUKE SURIBEN PORTFOLIO
// Main Script
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    initNavigation();
    initSmoothScroll();
    initActiveNavigation();
    initScrollProgress();
    initBackToTop();
    initRevealAnimation();
    initContactForm();

});

// ======================================================
// MOBILE NAVIGATION
// ======================================================

function initNavigation() {

    const menuBtn = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuBtn.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menuBtn.classList.remove("active");

        });

    });

    document.addEventListener("click", (e) => {

        if (
            !nav.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {

            nav.classList.remove("active");
            menuBtn.classList.remove("active");

        }

    });

}

// ======================================================
// SMOOTH SCROLL
// ======================================================

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}

// ======================================================
// ACTIVE NAVIGATION
// ======================================================

function initActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (!sections.length) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}

// ======================================================
// SCROLL PROGRESS BAR
// ======================================================

function initScrollProgress() {

    const bar = document.querySelector(".scroll-progress");

    if (!bar) return;

    window.addEventListener("scroll", () => {

        const total = document.documentElement.scrollHeight - window.innerHeight;

        const percent = (window.scrollY / total) * 100;

        bar.style.width = percent + "%";

    });

}

// ======================================================
// BACK TO TOP
// ======================================================

function initBackToTop() {

    const btn = document.querySelector(".back-to-top");

    if (!btn) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            btn.classList.add("show");

        } else {

            btn.classList.remove("show");

        }

    });

    btn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ======================================================
// REVEAL ANIMATION
// ======================================================

function initRevealAnimation() {

    const items = document.querySelectorAll(
        ".help-card,.timeline-item,.project-card,.tool-card,.info-card,.contact-form"
    );

    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    items.forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

}

// ======================================================
// CONTACT FORM
// ======================================================

function initContactForm() {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !message.value.trim()
        ) {

            e.preventDefault();

            alert("Please complete all required fields.");

            return;

        }

    });

}