const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progress.style.width =
        (scroll / height) * 100 + "%";

});

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

    nav.classList.toggle("active");

});

window.addEventListener("load", () => {

    document.querySelectorAll("*").forEach(el => {

        const r = el.getBoundingClientRect();

        if (r.right > window.innerWidth + 1) {

            console.log(el);

            el.style.outline = "3px solid red";

        }

    });

});

/* =========================================================
   RESPONSIVE / MOBILE SAFETY PATCH
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

    /*
     * MOBILE NAVIGATION
     *
     * This safely looks for the mobile menu button and navigation.
     * It will not cause an error if one of the elements is missing.
     */
    const menuToggle =
        document.querySelector('.menu-toggle') ||
        document.querySelector('.nav-toggle') ||
        document.querySelector('[data-menu-toggle]');

    const nav =
        document.querySelector('.nav-menu') ||
        document.querySelector('.nav-links') ||
        document.querySelector('nav');

    if (menuToggle && nav) {

        menuToggle.addEventListener('click', function () {

            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');

            const expanded = menuToggle.classList.contains('active');

            menuToggle.setAttribute(
                'aria-expanded',
                expanded ? 'true' : 'false'
            );

        });


        /*
         * CLOSE MOBILE MENU AFTER CLICKING A NAVIGATION LINK
         */
        nav.querySelectorAll('a').forEach(function (link) {

            link.addEventListener('click', function () {

                nav.classList.remove('active');
                menuToggle.classList.remove('active');

                menuToggle.setAttribute(
                    'aria-expanded',
                    'false'
                );

            });

        });

    }


    /*
     * HORIZONTAL OVERFLOW PROTECTION
     *
     * This prevents the document from creating a horizontal
     * scrollbar when an element accidentally extends beyond
     * the viewport.
     *
     * The actual CSS fixes should still be used to prevent
     * elements from overflowing in the first place.
     */
    document.documentElement.style.overflowX = 'hidden';

    document.body.style.overflowX = 'hidden';

});