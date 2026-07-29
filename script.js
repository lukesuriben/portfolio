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