window.addEventListener('scroll', function(){
    let navscroll=document.getElementById('nav');
    navscroll.classList.toggle("fixed", window.scrollY>5)

});
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 5) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
function navBack(){
   var nav=document.getElementById('nav').classList.toggle("change");
}
